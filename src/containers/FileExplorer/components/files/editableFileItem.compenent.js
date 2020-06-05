import React, { useState } from "react";
import {
  FileMenuTrigger,
  FileInfo,
} from "./fileItem.style";
import { fileExplorerService } from "@services";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";

export default function EditableFile(props) {
  let clas = props.highlight;
  let name = props.file.name;
  let path = props.file.url;
  let folder = props.file.parent;
  let type = props.file.type;
  let click = props.click;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  // const [context, setContext] = useState(false);
  // const [contextX, setContextX] = useState(0);
  // const [contextY, setContextY] = useState(0);
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");

  const handleOpen = async () => {
    try {
      const cont = await fileExplorerService.readFile(path);
      //await setContent(cont);
      if(path.includes('ohmypodsd'))
      {
        converttotable(cont);

      }
      else {
        //await setContent(cont);
      }
      console.log('!!!contenttextarea');
      //console.log(cont);
      console.log(path);

    } catch (error) {
      console.log("something went wrong when fetching file content");
    }
    setOpen(true);
    // setContext(false);
  };

  const handleCloseNoEdit = () => {
    setOpen(false);
  };

  const  converttotable = async  ( cont) => {
    console.log('TABLE!!');

    let jsonc = JSON.parse(cont);
    //let cols = Headers(jsonc);
    let keys = Object.keys(jsonc);
    let  values = Object.values(jsonc);
    console.log(keys);

    console.log(values);



    let table = document.createElement('table');
    for (let i = 1; i < keys.length; i++) {
      table.insertRow();
      let newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = keys[i];
      let rowCell = table.rows[table.rows.length - 1].insertCell();

      rowCell.textContent = values[i];


    }
      console.log(table);
      // this.div.appendChild(table);


  }

  const handleCloseEdit = async () => {
    try {
      const cont = await fileExplorerService.readFile(path);
      await setContent(cont);
    } catch (error) {
      console.log("something went wrong when fetching file content");
    }
    setEdit(false);
  };



  const handleSave = () => {
    fileExplorerService.updateFile(folder, name, content, type);
    setEdit(false);
  };

  const handleChange = async event => {
    await setContent(event.target.value);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  // const contextMenu = (
  //   <CustomContext x={contextX} y={contextY}>
  //     <CustomContextOption>
  //       <AwesomeIcon icon={faDownload} />
  //       <span onClick={() => fileExplorerService.promptDownload(path,type, name)}>
  //         Download
  //       </span>
  //     </CustomContextOption>
  //   </CustomContext>
  // );

  return (
    <FileMenuTrigger
      className={clas}
      id={path}
      onClick={click}
      onDoubleClick={handleOpen}
      // onContextMenu={handleContext}
    >
      <img src="/img/icon/icon-files-text.svg" size="2x" className="imgfile" alt="folder" id={path}/>

      <FileInfo id={path}>
        <h2 id={path}>{name}</h2>
      </FileInfo>
      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseNoEdit}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{name}</DialogTitle>
        <div className="tablejson"></div>
        <DialogContent>
          {edit === true ? (
            <TextareaAutosize
              aria-label="maximum height"
              value={content}
              onChange={handleChange}
            />
          ) : (
            <TextareaAutosize aria-label="maximum height" value={content} />
          )}
        </DialogContent>
        <DialogActions>
          {edit === false ? (
            <Button
              onClick={() =>
                fileExplorerService.promptDownload(path, type, name)
              }
              color="primary"
            >
              { t('fileexplorer.download')}
            </Button>
          ) : null}
          <Button
            onClick={edit === true ? handleCloseEdit : handleCloseNoEdit}
            color="primary"
          >
            { t('fileexplorer.cancel')}
          </Button>
          <Button onClick={edit === true ? handleSave : handleEdit} color="primary">
            {edit === true ? t('fileexplorer.save') : t('fileexplorer.edit')}
          </Button>
        </DialogActions>
      </Dialog>
      {/* {context === true ? contextMenu : null} */}
    </FileMenuTrigger>
  );
}
