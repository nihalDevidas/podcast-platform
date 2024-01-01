import React,{useState} from 'react';
import "./styles.css"

const FileInput = ({accept, id, fileHandleFunc, text}) => {

    const[fileSelected, setFileSelected] = useState("");

    function onChangeHandler(e){
      setFileSelected(e.target.files[0].name);
      fileHandleFunc(e.target.files[0])
    }

  return (
    <>
      <label htmlFor= {id} className={`custom-input ${!fileSelected && "input-label"}`}>
        {fileSelected ? `The File ${fileSelected} was selected`: text }
      </label>

      <input type="file" accept = {accept}
       id = {id} style={{display:"none"}} 
       onChange = {onChangeHandler}
       />
    </>
    
  )
}

export default FileInput;