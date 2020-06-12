import { EditableFileModel } from "@containers/FileExplorer/models";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { LoaderService } from "components/";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { fileExplorerService } from "services";
import { FileInfo, FileMenuTrigger } from "./fileItem.style";

type Props = {
  file: EditableFileModel;
  highlight: boolean;
  onClickHandler: () => void;
};
export default function EditableFile(props: Props) {
  let style = props.highlight ? "active" : "";
  let name = props.file.name + "." + props.file.extension;
  let path = props.file.url;
  let type = props.file.type;
  let parent = props.file.parent;
  let click = props.onClickHandler;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  // const [context, setContext] = useState(false);
  // const [contextX, setContextX] = useState(0);
  // const [contextY, setContextY] = useState(0);
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");

  const handleOpen = async () => {
    try {
      LoaderService.nowLoading();
      const cont = await fileExplorerService.readFile(path);
      await setContent(cont);
    } catch (error) {
      console.log("something went wrong when fetching file content");
    }
    await setOpen(true);
    LoaderService.completeLoad();
    // setContext(false);
  };

  const handleCloseNoEdit = () => {
    setOpen(false);
  };

  const handleCloseEdit = async () => {
    try {
      const cont = await fileExplorerService.readFile(path);
      await setContent(cont);
    } catch (error) {
      console.log("something went wrong when fetching file content");
    }
    setEdit(false);
  };

  // const handleContext = event => {
  //   event.preventDefault();
  //   let x = 0;
  //   let y = 0;

  //   if (event.nativeEvent instanceof MouseEvent) {
  //     x = event.nativeEvent.clientX;
  //     y = event.nativeEvent.clientY;
  //   } else if (event.nativeEvent instanceof TouchEvent) {
  //     x = event.nativeEvent.touches[0].pageX;
  //     y = event.nativeEvent.touches[0].pageY;
  //   }
  //   setContextX(x);
  //   setContextY(y);
  //   setContext(true);
  // };

  const handleSave = () => {
    fileExplorerService.updateFile(parent, name, content, type);
    setEdit(false);
  };

  const handleChange = async (event) => {
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
      className={style}
      id={path}
      onClick={click}
      onDoubleClick={handleOpen}
      // onContextMenu={handleContext}
    >
      <img
        src="/img/icon/icon-files-text.svg"
        className="imgfile"
        alt="folder"
        id={path}
      />

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
              {t("fileexplorer.download")}
            </Button>
          ) : null}
          <Button
            onClick={edit === true ? handleCloseEdit : handleCloseNoEdit}
            color="primary"
          >
            {t("fileexplorer.cancel")}
          </Button>
          <Button
            onClick={edit === true ? handleSave : handleEdit}
            color="primary"
          >
            {edit === true ? t("fileexplorer.save") : t("fileexplorer.edit")}
          </Button>
        </DialogActions>
      </Dialog>
      {/* {context === true ? contextMenu : null} */}
    </FileMenuTrigger>
  );
}
