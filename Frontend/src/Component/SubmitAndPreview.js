import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SubmitAndPreview = () => {
    const form=useSelector(store=>store.form)
    const uploadToMongodb=async()=>{
        // console.log(form)
        try {
            const response = await fetch(
                "https://superassistant.onrender.com/",
                {
                  method: "post",
                  body: form,
                }
              );
            const result=await response.json()
            // console.log(result)
            alert("form data submitted to database 👍👍👍")
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='w-full mx-auto bg-white rounded-lg shadow-lg p-4 mt-4 flex justify-around '>
        <button className='bg-black text-white  py-1 px-2 rounded-md'onClick={uploadToMongodb}>Submit</button>
        <button className='border-2 border-black  py-1 px-2 rounded-md'><Link to={"/preview"}>Preview</Link></button>
    </div>
  )
}

export default SubmitAndPreview