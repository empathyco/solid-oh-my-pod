import { VideoFileModel } from "@containers/FileExplorer/models";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "plyr/dist/plyr.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Plyr from "react-plyr";
import { fileExplorerService } from "services";
import { FileInfo, FileMenuTrigger } from "./fileItem.style";

type Props = {
  file: VideoFileModel;
  highlight: boolean;
  onClickHandler: () => void;
};
export default function VideoFile(props) {
  let style = props.highlight ? "active" : "";
  let name = props.file.name + "." + props.file.extension;
  let path = props.file.url;
  let type = props.file.type;
  let parent = props.file.parent;
  let click = props.onClickHandler;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FileMenuTrigger
      className={style}
      id={path}
      onClick={click}
      onDoubleClick={handleOpen}
      // id={`${name.concat("_context_menu")}`}
    >
      <img
        src="/img/icon/icon-files-video.svg"
        className="imgfile"
        alt="video"
        id={path}
      />

      <FileInfo id={path}>
        <h2 id={path}>{name}</h2>
      </FileInfo>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-display-media"
        fullScreen
      >
        <DialogTitle id="form-dialog-display-media">{name}</DialogTitle>
        <DialogContent>
          <Plyr type="video" url={path} iconUrl="./vendor/plyr/plyr.svg" />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => fileExplorerService.promptDownload(path, type, name)}
            color="primary"
          >
            {t("fileexplorer.download")}
          </Button>
          <Button onClick={handleClose} color="primary" type="button">
            {t("fileexplorer.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </FileMenuTrigger>
  );
}
