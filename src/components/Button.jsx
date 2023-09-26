const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center self-start py-2 px-5 rounded-full border-2 border-white text-white"
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  )
}

export default Button