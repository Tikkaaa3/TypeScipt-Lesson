interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

class YouTube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string,
    ) {}   
}
