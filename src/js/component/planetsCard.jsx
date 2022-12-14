import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const PlanetCard = (props) =>{
    const { store, actions } = useContext(Context)
	const planetStore = store.planet.filter(plt => plt.name == props.planet.name)
	useEffect(() => actions.planetDescription(props.planet.url), [])

	function imgError(e){
		console.log("Error: " + e.target.src)
		e.target.src = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
	}


    return(
        <div className="card" >
					<img src={"https://starwars-visualguide.com/assets/img/planets/"+ props.id +".jpg"} className="card-img-top" alt="..." onError={(e)=>imgError(e)}/>
			<div className="card-body">
					  <h5 className="card-title">{props.planet.name}</h5>
                      {planetStore[0] ? ( <div><p>Population: {planetStore[0].population}</p><p>Terrain: {planetStore[0].terrain}</p></div>) : (	""	)}
					  
					  <Link to={"/singlePlanet/" + props.planet.uid} data={planetStore}>
                        <button href="#" className="btn btn-primary">Learn more</button>
					</Link>
					  <button variant="outline-warning" className="btn btn-warning ms-2" onClick={() => actions.handleFav({name: props.planet.name, link: `/${props.type}/${props.id}`})}><i className="bi bi-heart-fill">Fav</i></button>
			</div>
		</div>
    )
}
