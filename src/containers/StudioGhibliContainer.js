import React, {useState, useEffect} from "react";
import FilmDetail from "../components/FilmDetail";
import FilmList from "../components/FilmList";

const StudioGhibliContainer = ()=>{
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [favourites, setFavourite] = useState([]);

    useEffect(()=>{
        getFilms()
    },[])



    const getFilms = function(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(films => setFilms(films))
    }

    const onFilmClick = function(film){
        setSelectedFilm(film)
    }

    const saveNewFavourite =((film)=>{
        const copyFavourite = [... favourites]
        if(copyFavourite.indexOf(film) === -1){
        copyFavourite.push(film)}
        setFavourite(copyFavourite)
    })

    const favouritesArray = favourites.map((film)=>{
        return(
            <>
            <li>{film.title}</li>
            </>
        )
    })


    return(
        <>
            <FilmList films={films} onFilmClick={onFilmClick} saveFavourite={saveNewFavourite}/>
            <h2>Favourites</h2>
            <ul>{favouritesArray}</ul>
            {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/> : null}
        </>
    )
}

export default StudioGhibliContainer