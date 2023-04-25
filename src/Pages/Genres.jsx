import React, {useContext} from 'react'
import Context from '../Context/Context'
import GenreDisplay from '../Components/GenreDisplay';

const Genres = () => {
  
  let context = useContext(Context);
  let {theGenres} = context;

  return (
    <div className='w-[1240px] max-w-[98%] mx-auto p-2'>

      {/* Heading & Filter : Types */}
      <div className="w-[100%] flex justify-between gap-[1rem] items-center my-1 py-2">
        <h1 className="font-Roboto text-[32px] font-[900]">Genres</h1>
      </div>

      {/* Genres */}
      <div className="flex w-[100%] flex-wrap gap-[2rem] py-4 justify-start items-center">
        {
          theGenres.map((genre) => {
            return (
              <GenreDisplay key={genre.id} details={genre} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Genres