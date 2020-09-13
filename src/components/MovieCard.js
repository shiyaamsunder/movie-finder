import React from 'react'
import "./MovieCard.css"

function MovieCard({ title, des, image, date }) {
    return (
        <div className="moviecard">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="" className="moviecard__image" />

            <div className="moviecard__right">
                <h1 className="moviecard__title">
                    {title}
                </h1>

                <h3>Released Date: {date}</h3>
                <p className="moviecard__description">{des}</p>
            </div>

        </div>
    )
}

export default MovieCard
