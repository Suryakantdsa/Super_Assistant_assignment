import React from 'react'
import Addbutton from './Addbutton'
import ComprehensiveQuestion from "./ComprehensiveQuestion"

const Comprehension = () => {
  return (
    <div className="flex max-w-xl my-4 mx-auto justify-around">
    <div className="w-11/12 border border-l-8 py-10 px-4 bg-slate-100 shadow-md border-blue-500">
      <ComprehensiveQuestion/>
    </div>
    <Addbutton/>
  </div>
  )
}

export default Comprehension