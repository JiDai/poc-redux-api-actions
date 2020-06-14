import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {charactersFailed, charactersReceived, charactersRequest, getCharacters} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <button
                className={styles.button}
                aria-label="Call"
                onClick={() => dispatch(getCharacters())}
            >
                Call
            </button>
        </div>
    );
}
