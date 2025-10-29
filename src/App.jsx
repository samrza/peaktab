import React from 'react'
import Background from './components/Background'
import Clock from './components/Clock'
import Greeting from './components/Greeting'
import Quotes from './components/Quotes'
import Todo from './components/Todo'
import RefreshBtn from './components/RefreshBtn'

const App = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <Background />
      
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 ">
      <Clock />
      <Greeting />
      <Quotes />
      
      
      </div>

      
        <Todo />
        <RefreshBtn />
      
      
      
    </div>
  )
}

export default App