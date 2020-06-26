import { ImageFileModel } from "@containers/FileExplorer/models";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { fileExplorerService } from "services";
import { FileInfo, FileMenuTrigger } from "./fileItem.style";

type Props = {
  file: ImageFileModel;
  highlight: boolean;
  onClickHandler: () => void;
};
export default function ImageFile(props) {
  let style = props.highlight ? "active" : "";
  let name = props.file.name +"."+ props.file.extension;
  let path = props.file.url;
  let type = props.file.type;
  let parent = props.file.parent;
  let click = props.onClickHandler;
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  // const [context, setContext] = useState(false);
  // const [contextX, setContextX] = useState(0);
  // const [contextY, setContextY] = useState(0);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleContext = event => {
  //   event.preventDefault();
  //   setContextX(event.clientX);
  //   setContextY(event.clientY);
  //   setContext(true);
  // };

  // const contextMenu = (
  //   <CustomContext x={contextX} y={contextY}>
  //     <CustomContextOption>
  //       <AwesomeIcon icon={faDownload} />
  //       <span
  //         onClick={() => fileExplorerService.promptDownload(path, type, name)}
  //       >
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
      tabIndex={0}

      // onContextMenu={handleContext}
      // id={`${name.concat("_context_menu")}`}
    >
      <img
        src="/img/icon/icon-files-pic.svg"
          className="imgfile" title={path} alt={path} id={path}

      />

      <FileInfo id={path}>
        <h2 id={path}>{name}</h2>
      </FileInfo>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-content"
        fullScreen
      >
        <DialogTitle id="form-dialog-content">
          {t("fileexplorer.viewing")}{" "}
        </DialogTitle>
        <DialogContent>
          <img src={path} alt="" style={{ maxHeight: "100%" }} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => fileExplorerService.promptDownload(path, type, name)}
            color="primary"
          ></Button>
          <Button onClick={handleClose} color="primary" type="button">
            {t("fileexplorer.close")}
          </Button>
        </DialogActions>
      </Dialog>
      {/* {context === true ? contextMenu : null} */}
    </FileMenuTrigger>
  );
}
