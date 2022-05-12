import React from "react";
import Film from "./Film";

const FilmList = ({films, onFilmClick, saveFavourite})=>{
    
    const filmArray = films.map((film, index)=>{
        return <Film film={film} id={index} key={index} onFilmClick={onFilmClick} saveFavourite={saveFavourite}/>
    })
    
    return(
        <div>
        <ul>
            {filmArray}
        </ul>
        </div>
    )
}

export default FilmList