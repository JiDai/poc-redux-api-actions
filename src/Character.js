import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {characterThunk} from "./features/characters/charactersSlice";


export default function Character() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {data: character, isError, isPending} = useSelector(
        (state) => state.character.character
    );

    useEffect(function () {
        dispatch(characterThunk(id));
    }, [dispatch, id]);

    if (isPending) {
        return 'Attends...';
    }

    if (isError) {
        return 'Oups...';
    }
    return (
        <div>
            <h1>{character.name}</h1>
            <ul>
                <li>species: {character.species}</li>
                <li>gender: {character.gender}</li>
                <li>origin: {character.origin.name}</li>
            </ul>
        </div>
    );
}
