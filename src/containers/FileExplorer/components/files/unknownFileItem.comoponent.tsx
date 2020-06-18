import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { UnknownFileModel } from "containers/FileExplorer/models/UnknownFileModel";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { fileExplorerService } from "services";
import { FileInfo, FileMenuTrigger } from "./fileItem.style";

type Props = {
  file: UnknownFileModel;
  highlight: boolean;
  onClickHandler: () => void;
};
export default function UnknownFile(props: Props) {
  let style = props.highlight ? "active" : "";
  let name =
    props.file.name + (props.file.extension ? "." + props.file.extension : "");
  let path = props.file.url;
  let type = props.file.type;
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
      tabIndex={0}

      // id={`${name.concat("_context_menu")}`}
    >
      <img src="/img/icon/icon-files-unknown.svg"   className="imgfile" title={path} alt={path}  id={ path}/>

      <FileInfo id={path}>
        <h2 id={path}>{name}</h2>
      </FileInfo>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-display-media"
        // fullWidth={true}
        // maxWidth={"lg"}
      >
        <DialogTitle id="form-dialog-display-media">{name}</DialogTitle>
        {/* <DialogContent>{name}</DialogContent> */}
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
