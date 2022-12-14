import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/single.css";

function imgError(e){
    console.log("Error: " + e.target.src)
    e.target.src = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
}

export const SinglePlanet = () =>{
    const { store, actions } = useContext(Context)
    const params = useParams()
    let url = `https://www.swapi.tech/api/planets/${params.uid}`

    const planetStore = store.planet.filter(plt => plt.url == url);
	useEffect(() => actions.planetDescription(url), []);

    return(
        <div className="mt-2 d-flex justify-content-center">
						{/*charStore[0] ? <h1 className="">{charStore[0].name}</h1> : ""*/}
                        <div className="tinfo d-flex justify-content-center">
                            <div className="p-8">
                                <div className="d-flex photoinfo ">
                                    <div className="photopj">
                                        <img src={"https://starwars-visualguide.com/assets/img/planets/"+ params.uid +".jpg"} className="" alt="..." onError={(e)=>imgError(e)}/>
                                    </div>
                                    <div className="description d-flex flex-column justify-content-center p-4">
                                        {planetStore[0] ? <h1 className="p-2 text-center">{planetStore[0].name}</h1> : ""}
                                            <p className="text-center p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <Link to={-1} className="btn btn-danger btn-lg">Back</Link>     
                                    </div>
                                </div>
                                <div className="d-flex propert mt-2">
                                    <div className="dato p-2 text-center">
                                        <h3>Diameter</h3>
                                        <p>{planetStore[0].diameter}</p>
                                    </div>
                                    <div className="dato p-2 text-center">
                                        <h3>Climate</h3>
                                        <p>{planetStore[0].climate}</p>
                                    </div>
                                    <div className="dato p-2 text-center">
                                        <h3>Terrain</h3>
                                        <p>{planetStore[0].terrain}</p>
                                    </div>
                                    <div className="dato p-2 text-center">
                                        <h3>Population</h3>
                                        <p>{planetStore[0].population}</p>
                                    </div>
                                    <div className="dato p-2 text-center">
                                        <h3>Rotation</h3>
                                        <p>{planetStore[0].rotation_period}</p>
                                    </div>
                                    <div className="dato p-2 text-center">
                                        <h3>Orbital</h3>
                                        <p>{planetStore[0].orbital_period}</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>


		</div>
    )
}