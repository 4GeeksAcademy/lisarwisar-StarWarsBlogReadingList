import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
	  }, []);

	let planets = [];
	for (let i = 0; i < 10; i++){
		planets.push(i);
	}

	let vehicles = [];
	for (let i = 0; i < 10; i++){
		vehicles.push(i);
	}
	
	return(
		<div>
			<div className="container overflow-scroll">
				<h2>Characters</h2>
				<div className="row flex-nowrap">
					{store.people.map(character => (
						<div className="card col-4 mx-3">
							<img src="..." className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Name: {character.result.properties.name}</h5>
								<p className="card-text">Gender</p>
								<p className="card-text">Hair-color</p>
								<p className="card-text">Eye color</p>
								<a href="#" className="btn btn-primary">Learn more!</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container overflow-scroll">
				<h2>Planets</h2>
				<div className="row flex-nowrap">
					{planets.map(planet => (
						<div className="card col-4 mx-3">
							<img src="..." className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Name {planet}</h5>
								<p className="card-text">Gender</p>
								<p className="card-text">Hair-color</p>
								<p className="card-text">Eye color</p>
								<a href="#" className="btn btn-primary">Learn more!</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container overflow-scroll">
				<h2>Vehicles</h2>
				<div className="row flex-nowrap">
					{vehicles.map(vehicle => (
						<div className="card col-4 mx-3">
							<img src="..." className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Name {vehicle}</h5>
								<p className="card-text">Gender</p>
								<p className="card-text">Hair-color</p>
								<p className="card-text">Eye color</p>
								<a href="#" className="btn btn-primary">Learn more!</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
