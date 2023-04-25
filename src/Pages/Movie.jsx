import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDisplay from '../Components/MovieDisplay';

const Movie = () => {

    // API KEY
    let API_KEY ="bcc7bf272ffbf01dc4669ba84559ce14";

    let params = useParams();
    let {movieid} = params;

    let [theMovie, setTheMovie] = useState({});
    const getTheMovie = async () => {
        if (movieid) {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}`);
            let data = await response.json();
            setTheMovie(data);
        }
    }

    let {original_title, original_language, poster_path, release_date, adult, vote_average, homepage, genres, status, overview  } = theMovie;

    // Recommdations
    let [recommandations, setRecommandations] = useState([]);
    const getRecomondations = async () => {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/recommendations?api_key=${API_KEY}`);
        let data = await response.json();
        let {results} = data;
        setRecommandations(results);
    }

    useEffect(() => {
      getTheMovie();
      getRecomondations();
      // eslint-disable-next-line
    }, [movieid]);

    return (
      <div className="w-[1240px] max-w-[98%] mx-auto py-2 px-1">
        {/* Movie Description */}

        <div className="max-w-[100%] my-2 bg-slate-800 h-[100%] flex justify-between flex-col md:flex-row gap-[2rem] items-start">
          <div className=" w-[100%] md:w-[600px] flex justify-start items-start bg-red-300 ">
            <img
              src={`${
                poster_path !== null
                  ? `https://image.tmdb.org/t/p/w1280/${poster_path}`
                  : "https://media.istockphoto.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=0&k=20&c=JN4E5qJgcq3qm89rSc2BIJT6AZ80MvRJie__r3OENY8="
              }`}
              alt={original_title}
              className="w-[100%]  object-contain object-center"
            />
          </div>

          <div className="w-[100%] flex flex-col justify-center items-start px-1 pr-3 my-3 gap-[2rem]">
            <div className="w-[100%] flex justify-between p-2 items-center gap-[1rem] flex-wrap">
              <p className="font-NotoSans text-slate-50 text-[21px] font-[580]">
                {original_title}
              </p>
              <p className="bg-slate-50 text-slate-800 px-3 py-1 rounded-[4px]">
                {status} | {release_date} |{" "}
                <span className="uppercase">{original_language}</span>
              </p>
            </div>

            <div className="w-[100%] flex px-2 justify-between gap-[1rem] items-center flex-wrap">
              <p className="bg-slate-50 px-2 py-1 font-NotoSans text-[16px] font-[800] rounded-[4px]">
                {adult ? "Age - 18+" : "Age - All"}
              </p>
              <p className="bg-slate-50 px-2 py-1 font-NotoSans text-[16px] font-[800] rounded-[4px]">
                Vote - {vote_average}
              </p>
              {homepage !== "" ? (
                <a
                  href={homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="font-NotoSans text-[18px] text-slate-500 hover:underline hover:text-slate-50 transition-colors duration-500"
                >
                  Watch Now
                </a>
              ) : (
                ""
              )}
            </div>

            <div className="w-[100%] px-2">
              <p className="font-NotoSans text-slate-50 text-[20px] font-[900]">
                Genre -{" "}
                {genres?.map((gen) => {
                  return (
                    <span key={gen.id} className="mx-1 text-[18px] font-[100]">
                      {gen.name},
                    </span>
                  );
                })}
              </p>
            </div>

            <div className="w-[100%] h-[100%] md:overflow-y-hidden px-2 mb-2">
              <p className="font-NotoSans text-[32px] text-slate-50 font-[800]">
                Overview
              </p>
              <p className="font-NotoSans mt-2 text-[16px] text-slate-50 font-[300] h-[100%] sm:overflow-y-scroll md:text-[14px] md:h-[150px] lg:h-[260px]">
                {overview}
              </p>
            </div>
          </div>
        </div>

        {/* Recomdations */}
        <div className="my-4 flex flex-col">
            <h1 className='font-NotoSans text-[32px] font-[900] text-slate-800'>Recommandations</h1>
            <div className="flex w-[100%] flex-wrap gap-[4rem] py-4 justify-center items-center mt-3">
                {
                    recommandations.map((movie) => {
                        return (
                        <MovieDisplay key={movie.id} details={movie}/>
                        )
                    })
                }
            </div>
        </div>

      </div>
    );
}

export default Movie