declare namespace swingChords {

    export class Note {
        string: number;
        fret: number;
        interval: string;
    }
    
    export class Chord { 
        name: string;
        notes: Note[]
    }
    
    export class ChordGroup {
        name: string;
        chords: Chord[];
    }
    
}