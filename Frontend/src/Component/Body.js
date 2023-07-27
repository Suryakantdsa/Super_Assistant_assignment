import React from 'react'
import FormHeader from './FormHeader'
// import AddQus from './AddQus'
import QusTypeOption from './QusTypeOption'
// import Questions from './Questions'

const Body = () => {
  return (
    <div className='bg-gray-200 w-screen h-screen'>
        <h1 className='text-3xl text-center font-bold'>Form Builder App</h1>
        <FormHeader/>
        <QusTypeOption/>
    </div>
  )
}

export default Body