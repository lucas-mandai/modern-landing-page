import { robot, arrowRight } from '../assets'
import Button from '../components/Button'

const Hero = () => {
  return (
    <>
    <div className="flex">
      <div className="flex flex-col max-w-xl">
        
        <div className="font-bold self-start mb-6 py-1 px-3 rounded-sm bg-gradient-to-r from-teal-400 to-sky-700">
          Welcome to my Portfolio
        </div>

        <h1 className="font-montserrat font-bold">
          Hi! I'm Lucas 
        </h1>

        <h1 className="text-gradient font-bold mt-3 mb-9">
          Web Developer
        </h1> 

        <p className='mb-9'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <Button label='Call to action' iconURL={arrowRight} />
        
      </div>
      
      <div className='flex flex-1'>
        <img src={robot} alt="Robot Hand" className='self-end object-contain w-[100%] h-[100%]' />
      </div>
      

    </div>
    </>
  )
}

export default Hero