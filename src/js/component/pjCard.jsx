import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const PjCard = (props) =>{
    const { store, actions } = useContext(Context)
	const pjStore = store.character.filter(char => char.name == props.character.name)
	useEffect(() => actions.charDescription(props.character.url), [])


    return(
        <div className="card ms-1 my-2" >
					<img src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} className="card-img-top" alt="..."/>
			<div className="card-body">
					  <h5 className="card-title">{props.character.name}</h5>
                      {pjStore[0] ? ( <div><div><p>Gender: {pjStore[0].gender}</p></div><div><p>Eyes color: {pjStore[0].gender}</p></div><div><p>Hair color: {pjStore[0].gender}</p></div></div>) : (	""	)}

					  <Link to={"/singlePj/" + props.character.uid} data={pjStore}>
                        <button href="#" className="btn btn-primary">Learn more</button>
					</Link>
					  <button variant="outline-warning" className="btn btn-warning ms-2" onClick={() => actions.addFav(props.character.name)}><i className="bi bi-heart-fill">Fav</i></button>
			</div>
		</div>
    )
}