import React, { useContext } from "react";
import "../../styles/home.css";
import { PlanetCard } from "../component/planetsCard.jsx";
import { PjCard } from "../component/pjCard.jsx";
import { Context } from "../store/appContext.jsx";
import Carousel from 'react-multi-carousel';

export const Home = () => {
	const { store, actions } = useContext(Context)
	const responsive = {
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 4,
		  slidesToSlide: 4 // optional, default to 1.
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
		<div className="text-center mt-5">
		<Carousel responsive={responsive}>
			{store.planets.map((elem, index)=>(
					<PlanetCard key={index} id={++index} planet={elem} />
					))}
		</Carousel>
		<Carousel responsive={responsive}>
			{store.people.map((elem, index)=>(
					<PjCard key={index} id={++index} character={elem} />
					))}
		</Carousel>
		</div>
	)
};
