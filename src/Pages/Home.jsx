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
        <select name='time' className='border-[2px] border-slate-800 py-2 px-[5px] cursor-pointer font-Roboto rounded-[4px] outline-none text-[18px]' value={filter} onChange={(e) => {changeFilter(e)}} >
          <option className='font-Roboto text-[16px] px-2 py-1 outline-none' value="day">Day</option>
          <option className='font-Roboto text-[16px] px-2 py-1 outline-none' value="week">Week</option>
        </select>
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