import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#000")


  const randomClr = () => {
    let clr='#';
    const hax = '012345678abcdef'
    for(let i = 0; i< 6; i++){
      // console.log(hax.charAt(i))
      clr+=hax.charAt(Math.floor(Math.random()*hax.length))
      
    }
    return clr;
  }
  
  return (
    
    <>
    {/* {console.log(randomClr()) } */}
      <div className='w-screen h-screen duration-700'
      style={{backgroundColor: color}}> 
        <div className='h-screen fixed flex flex-wrap justify-start items-center left-10 inset-x-0 px-2'>
          <div className='flex flex-wrap flex-col  gap-7 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none bg-red-500 mt-5 px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black '
              onClick={() => setColor("red")}
              >Red</button>
            <button className='outline-none bg-blue-600 px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black '
              // style={{backgroundColor: "blue"}}
              onClick={() => setColor("blue")}
              >blue</button>
            <button className='outline-none bg-green-600 px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("Green")}
              >Green</button>
            <button className='outline-none bg-yellow-400 px-4 py-1 rounded-full text-black shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("yellow")}
              >Yellow</button>
            <button className='outline-none bg-pink-600 px-4 py-1 rounded-full text-black shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("pink")}
              >pink</button>
            <button className='outline-none bg-gray-600 px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("gray")}
              >Gay!</button>
            <button className='outline-none bg-orange-600 px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("orange")}
              >Orange</button>
            <button className='outline-none bg-purple-600 px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("purple")}
              >purple</button>
            <button className='outline-none bg-black px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("black")}
            >black</button>
            <button className='outline-none bg-sky-400  px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => setColor("skyblue")}
            >skyBlue</button>
            <button className='outline-none bg-orange-200 mb-5 px-4 py-4 rounded-full text-pink-600 shadow-lg hover:scale-105 duration-200 active:bg-slate-400 active:scale-95 active:text-black'
              onClick={() => ( setColor(randomClr))}
            >RANDOM</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
