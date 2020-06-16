import React, { useState } from "react";
import {
  FileMenuTrigger,
  FileInfo,
  FileTitle, TableFile, TableContainer
} from "./fileItem.style";
import { fileExplorerService } from "@services";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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


  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");
   const [tble, setTable] = useState([]);

   const handleOpen = async () => {
    try {
      const cont = await fileExplorerService.readFile(path);

        if( path.includes('.json') && path.includes('ohmypodsd'))
        {
         await converttotable(cont);
        }
        await setContent(cont);
        console.log(path);


    } catch (error) {
      console.log("something went wrong when fetching file ");
    }
    setOpen(true);
    // setContext(false);

  };

  const handleCloseNoEdit = () => {
    setOpen(false);
  };

  const  converttotable = async  ( cont ) => {

    let jsonc = JSON.parse(cont);

    delete jsonc['@context'];

    let keys = Object.keys(jsonc);
    let values = Object.values(jsonc);

     let tb = [

       keys,
       values
    ];
    await setTable(tb);
    console.log("table formed" );

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

  const renderTable = () => {
    console.log(tble );
    console.log("loop" );

    return tble.map((row, index)=>{
      return <tr key={index}><RenderRow key={index} data={row} keys={tble}/></tr>
   })
  }
    const RenderRow = (values) =>{
    console.log(values);
      return values.data.map((key, index)=>{
        return <td key={key}>{key.toString()}</td>
      })
    }

   return (
    <FileMenuTrigger
      className={clas}
      id={path}
      onClick={click}
      onDoubleClick={handleOpen}
      tabIndex="0"

    >
      <img src="/img/icon/icon-files-text.svg" size="2x" className="imgfile" title={path} alt={path}  id={path}/>

      <FileInfo id={path}>
        <h2 id={path}>{name}</h2>
      </FileInfo>
      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseNoEdit}
        aria-labelledby="form-dialog-title"
      >
        <FileTitle id="form-dialog-title">{name}</FileTitle>


        <DialogContent>
          <TableContainer> <TableFile className="tablejson"
          > <tbody>{ renderTable()}</tbody></TableFile> </TableContainer>
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
