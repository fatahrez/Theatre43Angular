export class Movie {
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public director: string, public stars: string[], public image: string,public viewDate: Date) {
        this.showDescription = false;
    }
}
