export class Movie {
    showDescription: boolean;
    constructor(public id: number, public original_title: string, public overview: string, public post_path: string) {
        this.showDescription = false;
    }
}
