import React from 'react'
import { Link } from 'react-router-dom'

const GenreDisplay = ({details}) => {

    let {id, name} = details;

    return (
        <div className=''>
            <Link to={`/genre?q=${name}&genreid=${id}`} className='font-NotoSans text-slate-600 hover:text-slate-800 hover:underline transition-all duration-500 text-left text-[18px] font-[100]'>{name}</Link>
        </div>
    )
}

export default GenreDisplay