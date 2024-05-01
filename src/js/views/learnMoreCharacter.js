import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/learnMoreCharacter.css";

export const LearnMoreCharacter = () => {

    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getSingleCharacter(params.id);
	  }, []);

    return(
        <div className="container-fluid">
            {store.characterDisplay.map(character => (
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 p-4">
                        <h1>{character.result.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="row px-5 informationBox">
                        <div className="col-2 justify-content-center p-2">
                            <h3>Name</h3>
                            <h5>{character.result.properties.name}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Birth Year</h3>
                            <h5>{character.result.properties.birth_year}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Gender</h3>
                            <h5>{character.result.properties.gender}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Height</h3>
                            <h5>{character.result.properties.height}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Skin Color</h3>
                            <h5>{character.result.properties.skin_color}</h5>
                        </div>
                        <div className="col-2 justify-content-center p-2">
                            <h3>Eye Color</h3>
                            <h5>{character.result.properties.eye_color}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}