import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

export const LearnMoreCharacter = () => {

    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getSingleCharacter(params.id);
	  }, []);

    return(
        <div>
            {store.characterDisplay.map(character => (
                <div>
                    {character.result.properties.name}
                </div>
            ))}
        </div>
    )
}