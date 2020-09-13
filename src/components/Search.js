import React, { useState } from 'react'
import MovieCard from './MovieCard'
import "./Search.css"

function Search() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=03e5b36c5bedbb64f6b475d66b14d856&language=en-US&query=${query}&include_adult=false`

        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        console.log(data);


    }
    return (
        <div className="search">


            <h1>Movie Search App </h1>
            <h4> Made using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React JS </a>
                   and <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMdB</a></h4>

            <form className="search__form" onSubmit={handleSubmit}>
                <label>Enter Movie Name: </label>
                <input value={query} type="text" placeholder="ie. Avengers" onChange={e => setQuery(e.target.value)} />
                <button>Search</button>

            </form>

            <div className="search__results">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard title={movie.title} des={movie.overview} date={movie.release_date} image={movie.poster_path} />
                ))}
            </div>
        </div>


    )
}

export default Search
