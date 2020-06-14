const BASE_URL = 'https://rickandmortyapi.com/api';

export function fetchCharacters() {
    return fetch(`${BASE_URL}/character`).then(response => response.json());
    // return fetch(``).then(response => new Promise(resolve => {
    //     resolve({
    //             results: [{
    //                 id: 1,
    //                 name: 'Rick'
    //             }]
    //         }
    //     );
    // }));
}

export function fetchCharacter(id) {
    return fetch(`${BASE_URL}/character/${id}`).then(response => response.json());
}
