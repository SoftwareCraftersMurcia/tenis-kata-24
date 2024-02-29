export class Player {
    private readonly name: string;
    private points: number = 0;
    
    constructor(name: string, points: number) {
        this.name = name;
        this.points = points;
    }

    public getName():string{
        return this.name;
    }

    public getPoints():number{
        return this.points;
    }

    public addOnePoint():void{
        this.points+=1;
    }

}