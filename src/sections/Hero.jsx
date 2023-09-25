import { robot } from '../assets'

const Hero = () => {
  return (
    <>
    <div className="flex">
      <div className="flex flex-col max-w-2xl">
        
        <div className="self-start mb-6 py-1 px-3 rounded-sm bg-gradient-to-r from-teal-400 to-sky-700">
          Welcome to my Portfolio
        </div>

        <h1 className="font-montserrat mb-6">
          Hi! I'm Lucas <span className="text-gradient">Web Dev</span> 
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

      </div>
      
      <div className='flex flex-1'>
        <img src={robot} alt="Robot Hand" className='self-end object-contain w-[100%] h-[100%]' />
      </div>
      

    </div>
    </>
  )
}

export default Hero