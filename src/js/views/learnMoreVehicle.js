import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/learnMore.css";

export const LearnMoreVehicle = () => {

    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getSingleVehicle(params.id);
	  }, []);

    return(
        <div className="container-fluid">
            {store.vehicleDisplay.map(vehicle => (
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 p-4">
                        <h1>{vehicle.result.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="row px-5 informationBox">
                        <div className="col-2 justify-content-center p-2">
                            <h3>Name</h3>
                            <h5>{vehicle.result.properties.name}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Model</h3>
                            <h5>{vehicle.result.properties.model}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Vehicle Class</h3>
                            <h5>{vehicle.result.properties.vehicle_class}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Cost in credits</h3>
                            <h5>{vehicle.result.properties.cost_in_credits}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Length</h3>
                            <h5>{vehicle.result.properties.length}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Crew</h3>
                            <h5>{vehicle.result.properties.crew}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}