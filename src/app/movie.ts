export class Movie {
    showDescription: boolean;
    playMovie: boolean;
    constructor(public id: number, public original_title: string, public overview: string, public post_path: string) {
        this.showDescription = false;
        this.playMovie = false;
    }
}
