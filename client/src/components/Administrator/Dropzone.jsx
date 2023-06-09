import { useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export let Images ;
export  const Uploader = () => {
const  [files, setFiles] = useState([])
// called every time a file's `status` changes
const handleChangeStatus = ({ meta, file }, status) => { 
    // update files state
    setFiles(prevFiles => [...prevFiles, { meta, file, status }])
    // check if all files are done uploading
    const allDone = files.every(file => file.status === 'done')
    if (allDone) {
      Images = file
    }
    }  
   
    return (
      <Dropzone
      
    /* onSubmit={handleSubmit} */ 
        onChangeStatus={handleChangeStatus}
        accept="image/*,audio/*,video/*"
        maxFiles={1}
        //multiple ={false}
        maxSizeBytes={1257698}
      />
    )
  }
   
  