import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.jsx";
import "../../styles/single.css";



export const SinglePj = () =>{
    const { store, actions } = useContext(Context)
    const params = useParams()
    let url = `https://www.swapi.tech/api/people/${params.uid}`

    const charStore = store.character.filter(char => char.url == url);
	useEffect(() => actions.charDescription(url), []);

    return(
        <div className="mt-2">
						{/*charStore[0] ? <h1 className="">{charStore[0].name}</h1> : ""*/}
                        <div className="row justify-content-around">
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={"https://starwars-visualguide.com/assets/img/characters/"+ params.uid +".jpg"} className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="description col-6">
                                        {charStore[0] ? <h1 className="">{charStore[0].name}</h1> : ""}
                                        <div>
                                            <h3>{charStore[0].gender}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                        </div>


		</div>
    )
}