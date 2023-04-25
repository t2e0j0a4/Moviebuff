import React from 'react'
import { Link } from 'react-router-dom'

const GenreDisplay = ({details}) => {

    let {id, name} = details;

    return (
        <div className='px-3 py-2 bg-slate-800 rounded-[6px]'>
            <Link to={`/genre?q=${name}&genreid=${id}`} className='font-NotoSans text-slate-500 hover:text-slate-50 hover:underline transition-all duration-500 text-left text-[18px] font-[100]'>{name}</Link>
        </div>
    )
}

export default GenreDisplay