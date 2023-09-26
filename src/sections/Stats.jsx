import { stats } from '../constants'

const Stats = () => {
  return (
    <div className='flex justify-evenly flex-wrap'>
        {stats.map((stat) => (
            <div className='flex items-center gap-4' key={stat.id}>
                <h4 className='text-3xl font-bold'>{stat.value}</h4>
                <span className='text-gradient font-bold uppercase'>{stat.title}</span>
            </div>
        ))}
    </div>
  )
}

export default Stats