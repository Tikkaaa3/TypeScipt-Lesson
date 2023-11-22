abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void // make compulsory to use this method #?!
    getReelTime(): number {
        // complex calc
        return 13
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter)
    }
    getSepia():void {
        console.log("bla bla")
    }
}

const tikka = new Instagram("test","test", 3)
tikka.getReelTime()
