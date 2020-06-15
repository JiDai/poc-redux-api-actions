import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {charactersThunk, dummyThunk} from "./features/characters/charactersSlice";


export default function Characters() {
    const dispatch = useDispatch();
    const {data: characters, isError, isPending} = useSelector(
        (state) => state.character.characters
    );

    useEffect(function () {
        dispatch(charactersThunk());
    }, [dispatch]);

    if (isPending) {
        return 'Attends...';
    }

    if (isError) {
        return 'Oups...';
    }

    return (
        <div>
            <h1>Characters</h1>
            {
                !characters
                    ? 'Attends...'
                    : <div>
                        <button onClick={() => dispatch(dummyThunk())}>Click to nowhere</button>
                        <ul>
                            {characters.map(character =>
                                <li key={`Character${character.id}`}><Link
                                    to={`/character/${character.id}`}>{character.name}</Link></li>
                            )}
                        </ul>
                    </div>
            }
        </div>
    );
}
