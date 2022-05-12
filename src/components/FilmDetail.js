import React from "react";

const FilmDetail = ({selectedFilm}) =>{
    return(
        <>
            <p><img id="movie-image" src ={selectedFilm.movie_banner} alt='movie-banner'/></p>
        </>
    )
}

export default FilmDetail