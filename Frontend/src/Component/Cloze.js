import React from 'react'
import ClozeQuestion from './ClozeQuestion'
import Addbutton from './Addbutton'

const Cloze = () => {
  return (
    <div className="flex max-w-xl my-4 mx-auto justify-around">
      <div className="w-11/12 border border-l-8 py-10 px-4 bg-slate-100 shadow-md border-blue-500">
        <ClozeQuestion/>
      </div>
      <Addbutton/>
    </div>
  )
}

export default Cloze