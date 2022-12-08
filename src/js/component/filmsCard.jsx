import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";

export const FilmCard = (props) =>{
    const { store, actions } = useContext(Context)
	const filmStore = store.character.filter(char => char.name == props.character.name)
	useEffect(() => actions.charDescription(props.character.url), [])


    return(
        <div className="card" >
					<img src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} className="card-img-top" alt="..."/>
			<div className="card-body">
					  <h5 className="card-title">{props.character.name}</h5>
                      {pjStore[0] ? ( <div><p>Gender: {pjStore[0].gender}</p></div>) : (	""	)}

					  <button href="#" className="btn btn-primary">Learn more!</button>
					  <button href="#" className="btn btn-warning ms-2"><i className="bi bi-heart-fill">Fav</i></button>
			</div>
		</div>
    )
}