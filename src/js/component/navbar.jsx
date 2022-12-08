import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const [links, setLinks] = useState([
		{text: "Home", href: "/"},
		{text: "Planets", href: "/planets"},
		{text: "Films", href: "/films"},
		{text: "Species", href: "/species"},
		{text: "Characters", href: "/characters"}
	]);


	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand logo" href="#"><img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" alt="" /></a>
				
				{/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						{/*links.map((link) => (
							<li className="nav-item">
								<Link className="nav-link" to={link.href}>{link.text}</Link>
							</li>
							))
						*/}
						
						<div className="dropdown">

							<button className="btn dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites <span className="drp counter">{store.favorites.length}</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								
									{store.favorites ? (
										store.favorites.map((elem, i) => (
											<li className="d-flex justify-content-between"><a className="dropdown-item" key={i} id={++i} title={elem.item}>
												{elem.item}
												</a>
												<button className="badge bg-danger rounded-pill me-1" id={i} onClick={() => actions.removeFav(i)}>
													X
												</button></li>
										))
										) : (
											<span>(empty)</span>
											)}
							</ul>
						</div>
						
					
				</div>
			
		</nav>
	);
};
