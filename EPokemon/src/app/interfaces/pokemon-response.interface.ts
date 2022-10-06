declare module namespace {

    export interface Pokemon {
        name: string;
        url: string;
    }

    export interface PokemonResponse {
        count: number;
        next: string;
        previous: string;
        results: Pokemon[];
    }

}
