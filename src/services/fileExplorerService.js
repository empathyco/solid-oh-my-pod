import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import data from "@solid/query-ldflex";
import Cache from "./Cache";

const cache = new Cache();
const fileCache = new Cache();

const fc = new SolidFileClient(auth, { enableLogging: true });

const patterns = {
  editable: /\.(txt|diff?|patch|svg|asc|cnf|cfg|conf|html?|cfm|cgi|aspx?|ini|pl|py|md|css|cs|jsx?|jsp|log|htaccess|htpasswd|gitignore|gitattributes|env|json|atom|eml|rss|markdown|sql|xml|xslt?|sh|rb|as|bat|cmd|cob|for|ftn|frm|frx|inc|lisp|scm|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb|tmpl|lock|go|yml|yaml|tsv|lst|ttl)$/i,
  image: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
  media: /\.(mp3|ogg|wav|mp4|webm)$/i,
  video: /\.(mp4|webm|ogg)$/i,
  extractable: /\.(zip)$/i
};

const getSession = async () => {
  let session = await auth.currentSession(localStorage);
  return session;
};

export const getWebId = async () => {
  let session = await getSession();
  let webId = session.webId;
  return webId;
};

export const getRoot = async () => {
  let me = data[await getWebId()];
  return `${await me["solid:account"]}`;
};

const checkFileType = file => {
  return patterns.editable.test(file.name)
    ? "editable"
    : patterns.image.test(file.name)
    ? "image"
    : patterns.video.test(file.name)
    ? "video"
    : patterns.media.test(file.name)
    ? "audio"
    : "unknownType";
};

export const getFolderContent = async folderUrl => {
  if (cache.contains(folderUrl)) return cache.get(folderUrl);

  let folderContent = await fc.readFolder(folderUrl);
  for (let file of folderContent.files) {
    file.ctype = checkFileType(file);
  }
  return cache.add(folderUrl, folderContent);
};

export const readFile = async fileUrl => {
  if (fileCache.contains(fileUrl)) return fileCache.get(fileUrl);

  let fileContent = await fc.readFile(fileUrl);
  return cache.add(fileUrl, fileContent);
};

export const renameFile = async (path, fileName, newFileName) => {
  cache.remove(path);
  fileCache.remove(buildFileUrl(path, fileName));
  return await fc.rename(buildFileUrl(path, fileName), newFileName);
};

export const renameFolder = async (path, folderName, newFolderName) => {
  cache.remove(path);
  return await fc.rename(buildFolderUrl(path, folderName), newFolderName);
};

export const createFolder = async (path, folderName) => {
  cache.remove(path);
  if (!(folderName || "").trim()) {
    console.log("Invalid folder name");
  } else {
    return await fc.createFolder(buildFolderUrl(path, folderName), {
      merge: SolidFileClient.MERGE.KEEP_TARGET
    });
  }
};

export const removeItem = async (path, itemName) => {
  const url = buildFileUrl(path, itemName);
  cache.remove(path);
  fileCache.remove(buildFileUrl(path, itemName));
  try {
    return await fc.delete(url);
  } catch (err) {
    if (err.status === 409 || err.status === 301) {
      return fc.deleteFolderRecursively(buildFolderUrl(path, itemName));
    } else if (err.status === 404) {
      console.log("item not found");
    }
  }
};

export const removeItems = async (path, fileNames) => {
  if (!fileNames.length) {
    console.log("No items to remove");
  } else {
    cache.remove(path);
    for (let file of fileNames) {
      fileCache.remove(buildFileUrl(path, file));
      await removeItem(path, file);
    }
  }
};

export const moveItems = async (path, destination, fileNames) => {
  if (!fileNames.length) {
    console.log("No items to move");
  } else {
    cache.remove(path, destination);
    await copyItems(path, destination, fileNames);
    for (let file of fileNames) {
      fileCache.remove(buildFileUrl(path, file));
      await removeItem(path, file);
    }
  }
};

export const copyItems = async (path, destination, fileNames) => {
  if (!fileNames.length) {
    console.log("No items to copy");
  } else {
    let items = await getFolderContent(path);
    items = items.filter(({ name }) => fileNames.include(name));
    items.map(item =>
      item.type === "folder"
        ? fc.copyFolder(
            buildFolderUrl(path, item.name),
            buildFolderUrl(destination, item.name),
            {
              withAcl: false,
              withMeta: true,
              createPath: true,
              merge: SolidFileClient.Merge.KEEP_SOURCE
            }
          )
        : fc.copyFile(
            (buildFileUrl(path, item.name),
            buildFileUrl(destination, item.name),
            {
              withAcl: false,
              withMeta: true,
              createPath: true,
              merge: SolidFileClient.Merge.REPLACE
            })
          )
    );
  }
};

export const uploadFiles = async (path, fileList) => {
  if (!fileList.length) {
    console.log("No files to upload");
  } else {
    cache.remove(path);
    for (let file of fileList) {
      return await updateFile(path, file.name, file, file.type);
    }
  }
};
export const writejsoninpod=  async (jsoncontent,filename) => {

  try {

    let rootfolder =  await getRoot()+'/private/ohmypodsd/'+filename+ '.json'
     console.log('created folder'+ rootfolder.toString());

   await fc.createFile( rootfolder, jsoncontent, "text/json" )
    console.log('search data writen in pod');


  }catch (e) {
    console.log(e, e.message)
  }

};
export const updateFile = async (path, fileName, content, contentType) => {
  let oldContent = await fc.readFile(buildFileUrl(path, fileName));
  if (oldContent !== content) {
    alert(
      "File content has changed since last edit, cannot update content, please reopen file."
    );
  } else {
    cache.remove(path);
    fileCache.remove(buildFileUrl(path, fileName));
    return await fc.putFile(buildFileUrl(path, fileName), content, contentType);
  }
};

export const promptDownload= (file,contentType, fileName) => {
  file = readFile(file);
  file = new Blob([file],{type: contentType});
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, fileName);
  else {
    // Others
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(file);
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

const buildFolderUrl = (path, folderName) => {
  return buildFileUrl(path, folderName).concat("/");
};

const buildFileUrl = (path, fileName) => {
  return `${path.concat(fileName)}`;
};

/**
 * Creates a file in the path location
 * @param {string} path path of the folder where the file will be created
 * @param {string} filename name of the file, must have extension
 * @param {string} content content of the file
 * @param {string} type type of the file, must be something like "text/turtle" or "image/png"
 * @param {boolean} keepContent if true existing+newContent, else replaced
 */
export const createFile=async (path,filename,content,type,keepContent)=>{
  let options={merge:keepContent?"keep_target":"default"}
  let completePath=`${path}/${filename}`
  console.log("Creating file",completePath)
  return await fc.createFile(completePath,content,type,options)

}

/**
 * Returns true if the path exists,false otherwise
 * @param {string} path path for the file or folder to check
 */
export const doesItemExist=async(path)=>{
  return fc.itemExists(path)
}
