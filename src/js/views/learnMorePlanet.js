import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/learnMore.css";

export const LearnMorePlanet = () => {

    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getSinglePlanet(params.id);
	  }, []);

    return(
        <div className="container-fluid">
            {store.planetDisplay.map(planet => (
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 p-4">
                        <h1>{planet.result.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="row px-5 informationBox">
                        <div className="col-2 justify-content-center p-2">
                            <h3>Name</h3>
                            <h5>{planet.result.properties.name}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Diameter</h3>
                            <h5>{planet.result.properties.diameter}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Gravity</h3>
                            <h5>{planet.result.properties.gravity}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Population</h3>
                            <h5>{planet.result.properties.population}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Climate</h3>
                            <h5>{planet.result.properties.climate}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Terrain</h3>
                            <h5>{planet.result.properties.terrain}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}