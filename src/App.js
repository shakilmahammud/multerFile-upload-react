import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

function App() {
  const [files,setFiles]=useState()
  const [message,setmessage]=useState()
  const onSubmit = async e =>{
    e.preventDefault();
    const formData=new FormData()
    formData.append("message",message)
    for(let index=0; index<files.length; index++){
      const avatar =files[index]
      formData.append("files",avatar)
    }
  const result = await axios.post('http://localhost:30001/multifiles',formData)
    console.log(result)
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="file" name="avatar"  multiple onChange={e=>{
        const filelist=e.target.files
        setFiles(filelist)
      }}/>
      <input type="text" name="message"  onChange={e=>setmessage(e.target.value)}/>
      <input type="submit" />
    </form>
  );
}

export default App;
