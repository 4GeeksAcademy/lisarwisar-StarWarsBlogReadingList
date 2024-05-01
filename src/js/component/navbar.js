import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import starwarsLogo from "../images/starwars_logo.png"
import "../../styles/navbar.css";

export const Navbar = () => {
	const navigate = useNavigate()
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<button className="SWLogoButton" onClick={() => navigate("/")}>
				<img className="SWLogo" src={starwarsLogo}></img>
			</button>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
