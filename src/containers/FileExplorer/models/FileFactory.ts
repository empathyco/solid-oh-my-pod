import { EditableFileModel } from "./EditableFileModel";
import { ImageFileModel } from "./ImageFileModel";
import { UnknownFileModel } from "./UnknownFileModel";
import { VideoFileModel } from "./VideoFileModel";

export class FileFactory {
  static IMAGE_EXTENSIONS = ["svg", "png", "jpg", "jpeg", "ico"];
  static VIDEO_EXTENSIONS = ["mp4"];
  static EDITABLE_EXTENSIONS = ["html", "txt", "json", "ttl"];
  static buildFileModel(
    type: string,
    fullName: string,
    parent: string,
    url: string
  ) {
    let [name, extension] = FileFactory.extractNameAndExtension(fullName);

    if (this.IMAGE_EXTENSIONS.includes(extension))
      return new ImageFileModel(type, name, extension, parent, url);
    if (this.VIDEO_EXTENSIONS.includes(extension))
      return new VideoFileModel(type, name, extension, parent, url);
    if (this.EDITABLE_EXTENSIONS.includes(extension))
      return new EditableFileModel(type, name, extension, parent, url);

    return new UnknownFileModel(type, name, extension, parent, url);
  }
  static extractNameAndExtension(fullName: string): [string, string] {
    if (fullName === undefined) return ["", ""];
    if (!fullName.includes(".")) return [fullName, ""];
    var re = /(?:\.([^.]+))?$/;
    let array = re.exec(fullName);
    let extension = array ? array[1] : "";
    let name = fullName.slice(0, fullName.length - (extension.length + 1));

    if (name === undefined) name = "";

    if (extension === undefined) extension = "";
    return [name, extension];
  }
}
