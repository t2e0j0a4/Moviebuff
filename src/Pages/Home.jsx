import React, {useContext} from 'react'
import Context from "../Context/Context";
import MovieDisplay from '../Components/MovieDisplay';

const Home = () => {

  const context = useContext(Context);
  let { filter, changeFilter, trendingResults } = context;

  return (
    <div className='w-[1240px] max-w-[98%] mx-auto p-2'>

      {/* Heading & Filter : Types */}
      <div className="w-[100%] flex justify-between gap-[1rem] items-center my-1 py-2">
        <h1 className="font-Roboto text-[32px] font-[900]">Trending</h1>
        <ul className='flex flex-row justify-center items-center gap-4'>
          <li value="day" className={`text-slate-400 hover:text-slate-800 ${filter === 'day' ? 'text-slate-800 border-b-[2px] border-slate-800' : 'text-slate-400'} cursor-pointer transition-colors duration-500 font-NotoSans text-[18px]`} onClick={() => {changeFilter('day')}} >Today</li>
          <li value="week" className={`text-slate-400 hover:text-slate-800 ${filter === 'week' ? 'text-slate-800 border-b-[2px] border-slate-800' : 'text-slate-400'} cursor-pointer transition-colors duration-500 font-NotoSans text-[18px]`} onClick={() => {changeFilter('week')}} >Week</li>
        </ul>
      </div>

      {/* Trending Movies */}
      <div className="flex w-[100%] flex-wrap gap-[4rem] py-4 justify-center items-center">
        {
          trendingResults.map((movie) => {
            return (
              <MovieDisplay key={movie.id} details={movie}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home