import {useEffect, useState} from 'react';
import './App.css';
import searchBar from './search.svg';
// 7d1d6854

import MovieCard from './MovieCard'; 

const API_URL = 'http://www.omdbapi.com/?apikey=7d1d6854&';

// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[])

    return(
        <div className='app'>
            <h1>MovieHuB</h1>
            <div className="search">
                <input placeholder='Search for a movie' 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                type="text" name="" id="" />
                <img src={searchBar} alt="Search Bar" 
                onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 
                ? (
                    <div className="container">{
                        movies.map((movie) =>(
                            <MovieCard movie1={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;