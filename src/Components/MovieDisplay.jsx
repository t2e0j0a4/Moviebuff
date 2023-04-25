import React from 'react'
import { Link } from 'react-router-dom';
import {BsInfoCircle} from "react-icons/bs";
import {MdClose} from "react-icons/md";

const MovieDisplay = ({details}) => {

  let [movieDetails, setMovieDetails] = React.useState(false);
  let { poster_path, release_date, original_language, original_title, overview, vote_average, id } = details;

  return (
    <div className="bg-slate-800 relative rounded-[4px] shadow-2xl w-[320px] max-w-[100%] h-[500px]">

      <img src={`${poster_path !== null ? `https://image.tmdb.org/t/p/w1280/${poster_path}` : 'https://media.istockphoto.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=0&k=20&c=JN4E5qJgcq3qm89rSc2BIJT6AZ80MvRJie__r3OENY8='}`} alt={original_title} className={`w-[100%] h-[100%] object-fill ${movieDetails ? 'hidden' : 'block'} rounded-[4px]`}/>

      <div className="bg-slate-800 p-1 absolute rounded-[50%] top-[-10px] right-[-10px] z-[1] cursor-pointer" onClick={() => {setMovieDetails(!movieDetails)}}>
        {
          movieDetails ? <MdClose className='text-slate-50 ' fontSize={20} /> : <BsInfoCircle className='text-slate-50 ' fontSize={20} />
        }
      </div>

      <div className={`w-[100%] h-[500px] py-2 pt-6 px-4 absolute rounded-[4px] top-0 left-0 bg-slate-200 opacity-100 ${movieDetails ? 'flex' : 'hidden'} flex-col justify-start items-center gap-[1rem]`}>
        
        <div className="w-[100%] flex justify-between items-start gap-[1rem]">
          <Link onClick={() => {
            window.scrollTo(0);
          }} to={`/movie/${id}`} className='font-NotoSans text-slate-500 hover:text-slate-800 hover:underline transition-all duration-500 text-left text-[21px] font-[900]'>{original_title}</Link>
          <span className='py-[5px] px-[8px] uppercase rounded-[20%] font-NotoSans text-[12px] text-slate-50 flex justify-center items-center text-center bg-slate-800 '>{original_language}</span>
        </div>

        <div className="w-[100%] flex justify-between items-center gap-[1rem]">
          <span className='font-NotoSans text-[18px] font-[500] text-center'>{release_date}</span>
          <span className="py-[4px] px-[8px] rounded-[4px] font-NotoSans text-[12px] text-slate-50 flex justify-center items-center text-center bg-slate-800 ">Vote : {vote_average}</span>
        </div>

        <div className="overflow-y-scroll w-[100%] h-[100%] mt-4 py-2">
          <p className="text-left font-NotoSans text-[18px] font-[400]">{overview}</p>
        </div>

      </div>

    </div>
  );
}

export default MovieDisplay