import ImprovShape from '../Models/ImprovShape';
import { ImprovType } from '../Models/ImprovType';

export const allImprovShapes: ImprovShape[] = [
    {
        name: "Shape 1: Major Triad",
        root: { string: 4, fret: 4 },
        notes: [
            { string: 4, fret: 2, interval: "-7", improvType: ImprovType.AddedChordTone },
            { string: 4, fret: 3, interval: "7", improvType: ImprovType.Ornament },
            { string: 3, fret: 2, interval: "-3", improvType: ImprovType.Ornament },
            { string: 3, fret: 3, interval: "3" },            
            { string: 3, fret: 4, interval: "4", improvType: ImprovType.Ornament },
            { string: 2, fret: 2, interval: "5" },
            { string: 2, fret: 3, interval: "-6", improvType: ImprovType.Ornament },
            { string: 2, fret: 4, interval: "6", improvType: ImprovType.AddedChordTone },
            { string: 2, fret: 5, interval: "-7", improvType: ImprovType.AddedChordTone },
            { string: 1, fret: 2, interval: "R", improvType: ImprovType.AddedRoot },
            { string: 1, fret: 3, interval: "-2", improvType: ImprovType.Ornament },
            { string: 1, fret: 4, interval: "2", improvType: ImprovType.AddedChordTone },
            { string: 1, fret: 5, interval: "-3", improvType: ImprovType.Ornament }
        ]
    }, 
    {
        name: "Shape 2 Major Triad",
        root: { string: 3, fret: 4 },
        notes: [
            { string: 4, fret: 3, interval: "-5", improvType: ImprovType.Ornament },
            { string: 4, fret: 4, interval: "5" },
            { string: 3, fret: 2, interval: "-7", improvType: ImprovType.AddedChordTone },
            { string: 3, fret: 3, interval: "7", improvType: ImprovType.Ornament },     
            { string: 2, fret: 2, interval: "2", improvType: ImprovType.AddedChordTone },
            { string: 2, fret: 3, interval: "-3", improvType: ImprovType.Ornament },
            { string: 2, fret: 4, interval: "3" },
            { string: 2, fret: 5, interval: "4", improvType: ImprovType.Ornament },
            { string: 1, fret: 2, interval: "5" },
            { string: 1, fret: 3, interval: "-6", improvType: ImprovType.Ornament },
            { string: 1, fret: 4, interval: "6", improvType: ImprovType.AddedChordTone },
            { string: 1, fret: 5, interval: "-7", improvType: ImprovType.AddedChordTone }
        ]
    }, 
    {
        name: "Shape 3 Major Triad",
        root: { string: 2, fret: 3 },
        notes: [
            { string: 4, fret: 2, interval: "2", improvType: ImprovType.AddedChordTone },
            { string: 4, fret: 3, interval: "-3", improvType: ImprovType.Ornament },
            { string: 4, fret: 4, interval: "3" },
            { string: 3, fret: 4, interval: "6", improvType: ImprovType.AddedChordTone },
            { string: 3, fret: 2, interval: "5" },
            { string: 2, fret: 2, interval: "7", improvType: ImprovType.Ornament },     
            { string: 2, fret: 5, interval: "2", improvType: ImprovType.AddedChordTone },
            { string: 1, fret: 1, interval: "-3", improvType: ImprovType.Ornament },
            { string: 1, fret: 2, interval: "3" },
            { string: 1, fret: 3, interval: "4", improvType: ImprovType.Ornament },            
            { string: 1, fret: 4, interval: "-5", improvType: ImprovType.Ornament },
            { string: 1, fret: 5, interval: "5" }
        ]
    }
];