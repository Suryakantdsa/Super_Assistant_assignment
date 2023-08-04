import React from 'react'
import Addbutton from './Addbutton'

const NoquestionPage = () => {
  return (
    <div className="flex max-w-xl my-4 mx-auto justify-around">
      <div className="w-11/12 border border-l-8 py-10 px-4 bg-slate-100 shadow-md border-blue-500">
        <h1 className='text-3xl'>No question is Added . Click on <i className="pt-2 fa-solid fa-circle-plus"></i> to Add new question </h1>
      </div>
      <Addbutton/>
    </div>
  )
}

export default NoquestionPage