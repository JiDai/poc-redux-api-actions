const BASE_URL = 'https://rickandmortyapi.com/api';

export function fetchCharacters() {
    return fetch(`${BASE_URL}/character`).then(response => response.json());
}

export function fetchCharacter(id) {
    return fetch(`${BASE_URL}/character/${id}`).then(response => response.json());
}

export function fetchUnknown() {
    return fetch(`404`).then(response => response.json());
}

export class HTTPError extends Error {
    name = 'HTTPError';
    statusCode = '0';
    message = '';

    constructor(message: string, statusCode: number = 500) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export class UserError extends Error {
    name = 'UserError';
    message = '';

    constructor(message: string) {
        super();
        this.message = message;
    }
}
