import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";

export const PlanetCard = (props) =>{
    const { store, actions } = useContext(Context)
	const planetStore = store.planet.filter(plt => plt.name == props.planet.name)
	useEffect(() => actions.planetDescription(props.planet.url), [])


    return(
        <div className="card" >
					<img src={"https://starwars-visualguide.com/assets/img/planets/"+ props.id +".jpg"} className="card-img-top" alt="..."/>
			<div className="card-body">
					  <h5 className="card-title">{props.planet.name}</h5>
                      {planetStore[0] ? ( <div><p>Population: {planetStore[0].population}</p><p>Terrain: {planetStore[0].terrain}</p></div>) : (	""	)}

					  <button href="#" className="btn btn-primary">Learn more!</button>
					  <button href="#" className="btn btn-warning ms-2"><i className="bi bi-heart-fill">Fav</i></button>
			</div>
		</div>
    )
}
