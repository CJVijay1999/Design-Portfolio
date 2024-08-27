import React from 'react'
import ProjectItem from './ProjectItem'
import todo from '../assets/images/todo-image.png'
import imdb1img from '../assets/images/Project-1.png'
import TicTacToe from '../assets/images/Tic-Tac-Toe.png'
import Portfolio from '../assets/images/Static Portfolio Website.png'

const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl  font-bold text-center  text-[#134B70]'>Project</h1>
        <p className='text-center py-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis ipsum quasi, doloremque quas aliquid? Ex rem quam, maxime eius excepturi consequatur nam quo omnis voluptas ut modi, soluta veniam.
        </p>

        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={todo} title='Todo' />
          <ProjectItem img={imdb1img} title='IMDB1img' />
          <ProjectItem img={TicTacToe} title='TicTacToe' />
          <ProjectItem img={Portfolio} title='Protfolio' />
        </div>
        </div>
  )
}

export default Project