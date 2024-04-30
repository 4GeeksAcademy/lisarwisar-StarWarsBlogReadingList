import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

export const LearnMoreCharacter = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        
        GetCharacter()

	  }, []);

    let params = useParams()
    let characterID = []

    async function GetCharacter () {
        
        await actions.getPeople();


        for (let i = 0; i < store.people.length; i++){
            if (store.people[i].result.uid == params.id){
                characterID = i;
                break;
            }
        }
        return ("ok");
    }


    return(
        <div className="container">
            hola!
        </div>
    )
}