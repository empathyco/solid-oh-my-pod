import React, { useState } from "react";
import { FileMenuTrigger, FileInfo } from "./fileItem.style";
import { fileExplorerService } from "@services";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Plyr from "react-plyr";
import "plyr/dist/plyr.css";
import { useTranslation } from "react-i18next";

export default function AudioFile(props) {
  let clas = props.highlight;
  let name = props.file.name;
  let path = props.file.url;
  let type = props.file.type;
  let click = props.click;
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
      className={clas}
      id={path}
      onClick={click}
      onDoubleClick={handleOpen}
      tabIndex={0}

      // id={`${name.concat("_context_menu")}`}
    >
      <img src="/img/icon/icon-files-video.svg" size="2x" className="imgfile" title={path} alt={path}  id={path}/>

      <FileInfo id={path}>
        <h2 id={path}>{name}</h2>
      </FileInfo>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-display-media"
        fullWidth={true}
        maxWidth={"lg"}
      >
        <DialogTitle id="form-dialog-display-media">{name}</DialogTitle>
        <DialogContent>
          <Plyr type="audio" url={path} alt="play" />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => fileExplorerService.promptDownload(path, type, name)}
            color="primary"
          >
            { t('fileexplorer.download')}
          </Button>
          <Button onClick={handleClose} color="primary" type="button">
            { t('fileexplorer.close')}
          </Button>
        </DialogActions>
      </Dialog>
    </FileMenuTrigger>
  );
}
