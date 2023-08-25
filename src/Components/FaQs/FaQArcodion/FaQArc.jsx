import React from 'react'
import Accordion from './Accordion'
import questionsData from '/src/Database/questionsData.json'

function FaQArc() {

  return (
      <div className='list w-screen h-fit flex flex-col justify-center mx-2 mt-2'>
        {
          questionsData.map ((item, index) => (
            <Accordion 
              key={index} 
              question={item.question}
              answer={item.answer}
              />
          ))
        }
      </div>
  )
}

export default FaQArc


