import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export const Planets = () => {
	const {store, actions} = useContext(Context)
	const responsive = {
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3,
		  slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2,
		  slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1,
		  slidesToSlide: 1 // optional, default to 1.
		}
	  }

	return (
		<div className="container">
			<div className="my-4">
				<h1>Planets!</h1>
				<button onClick={()=>actions.getPlanets()}>Cargar planetas</button>
			</div>
		<Carousel responsive={responsive}>
			{store.planets.map((planet)=>(
					<div className="card" style={{ width: '18rem' }}>
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
					  <h5 className="card-title">{planet.name}</h5>
					  <p className="card-text">Population: </p>
					  <p className="card-text">Terrain: </p>
					  <button href="#" className="btn btn-primary">Learn more!</button>
					  <button href="#" className="btn btn-warning ms-2"><i className="bi bi-heart-fill">Fav</i></button>
					</div>
				  	</div>
					))}
		</Carousel>
		</div>
	);
};
