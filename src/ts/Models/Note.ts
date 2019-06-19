import { ImprovType } from "./ImprovType";

export default class Note {
    string: number;
    fret: number;
    interval?: string;
    improvType?: ImprovType;
}