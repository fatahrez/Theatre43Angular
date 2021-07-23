import { Movie } from "./movie.model";

export interface MovieWrapper {
    name: string,
    results: Movie[]
}