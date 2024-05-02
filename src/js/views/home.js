import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	useEffect(async () => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
	  }, []);

	return(
		<div>
			<div className="container-fluid overflow-scroll mx-5">
				<h2 className="sectionTitle">Characters</h2>
				<div className="row flex-nowrap">
					{store.people.map(character => (
						<div className="card col-4 mx-3">
							<div className="card-body">
								<h5 className="card-title">{character.result.properties.name}</h5>
								<p className="card-text">Gender: {character.result.properties.gender}</p>
								<p className="card-text">Hair-color: {character.result.properties.hair_color}</p>
								<p className="card-text">Eye color: {character.result.properties.eye_color}</p>
							</div>
							<div className="card-body d-flex justify-content-between align-items-end mb-2">
								<button className="btn btn-outline-primary" onClick={() => {
									navigate(`/characters/${character.result.uid}`);
									location.reload();
								}}>Learn more!</button>
								<button className="btn btn-outline-warning">
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container-fluid overflow-scroll mx-5">
				<h2 className="sectionTitle">Planets</h2>
				<div className="row flex-nowrap">
					{store.planets.map(planet => (
						<div className="card col-4 mx-3">
							<div className="card-body">
								<h5 className="card-title">{planet.result.properties.name}</h5>
								<p className="card-text">Population: {planet.result.properties.population}</p>
								<p className="card-text">{planet.result.properties.terrain}</p>
							</div>
							<div className="card-body d-flex justify-content-between align-items-end mb-2">
								<button className="btn btn-outline-primary" onClick={() =>{
									navigate(`/planets/${planet.result.uid}`);
									location.reload();
								}}>Learn more!</button>
								<button className="btn btn-outline-warning">
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container-fluid overflow-scroll mx-5">
				<h2 className="sectionTitle">Vehicles</h2>
				<div className="row flex-nowrap">
					{store.vehicles.map(vehicle => (
						<div className="card col-4 mx-3">
							<div className="card-body">
								<h5 className="card-title">{vehicle.result.properties.name}</h5>
								<p className="card-text">Passengers: {vehicle.result.properties.passengers}</p>
								<p className="card-text">Vehicle class: {vehicle.result.properties.vehicle_class}</p>
							</div>
							<div className="card-body d-flex justify-content-between align-items-end mb-2">
								<button href="#" className="btn btn-outline-primary" onClick={() => {
									navigate(`/vehicles/${vehicle.result.uid}`);
									location.reload();
								}}>Learn more!</button>
								<button className="btn btn-outline-warning ml-5">
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
