import React from "react";

const Film = ({film, onFilmClick, saveFavourite}) =>{
    
const handleClick = function(){
    onFilmClick(film)
}

const handleButton = function(){
    saveFavourite(film)
}

    return(
        <>
            <li onClick={handleClick}>{film.title}</li>
            <button onClick={handleButton} id={film.key} filmTitle ={film.title}>Add to Favourites</button>
        </>
    )
}

export default Film