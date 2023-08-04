import React from 'react'
import Category from './Category'
import Cloze from './Cloze'
import Comprehension from './Comprehension'
import { useSelector } from 'react-redux'
import NoquestionPage from './NoquestionPage'


const Body = () => {
  const AllQuestions=useSelector(store=>store.AllQuestions)
  return (
    <div className='bg-gray-200 w-screen min-h-screen'>
        <h1 className='text-3xl text-center font-bold'>Form Builder App</h1>
        {AllQuestions.length===0?
        <NoquestionPage/>:
          (
            AllQuestions.map((qus,index)=>
              qus.type==="category"?<Category/>:qus.type==="cloze"?<Cloze/>:<Comprehension/>
            )
          )
        }

        {/* <Category/>
        <Cloze/>
        <Comprehension/> */}
        {/* <ClozeQuestion/> */}
        {/* <ComprehensiveQuestion/> */}
    </div>
  )
}

export default Body