class Note {
    string: number;
    fret: number;
    interval: string;
}

class Chord { 
    name: string;
    notes: Note[]
}

class ChordGroup {
    name: string;
    chords: Chord[];
}

var chords5thString: ChordGroup = {
    name: "Lowest Note On the Fifth String",
    chords: [
        {
            name: "maj6", 
            notes: [
                { string: 5, fret: 3, interval: "R" },
                { string: 4, fret: 2, interval: "3" },
                { string: 3, fret: 2, interval: "6" }
            ]
        }
    ]
}

var chords6thString: ChordGroup = {
    name: "Lowest Note On the Sixth String",
    chords: [
       
        { 
            name: "min/3",
            notes: [
                { string: 6, fret: 3, interval: "&flat;3" },
                { string: 4, fret: 2, interval: "R" },
                { string: 3, fret: 4, interval: "5" }
            ]
        },
        {
            name: "maj/3", 
            notes: [
                { string: 6, fret: 4, interval: "3" },
                { string: 4, fret: 2, interval: "R" },
                { string: 3, fret: 4, interval: "5" }
            ]
        },
        {
            name: "aug", 
            notes: [
                { string: 6, fret: 4, interval: "R" },
                { string: 5, fret: 3, interval: "3" },
                { string: 4, fret: 2, interval: "&sharp;5" }
            ]
        },
        {
            name: "maj6", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 2, interval: "6" },
                { string: 3, fret: 4, interval: "3" }
            ]
        },
        {
            name: "maj6/5", 
            notes: [
                { string: 6, fret: 3, interval: "5" },
                { string: 4, fret: 2, interval: "3" },
                { string: 3, fret: 2, interval: "6" }
            ]
        },
        {
            name: "min6", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 2, interval: "6" },
                { string: 3, fret: 3, interval: "&flat;3" }
            ]
        },
        {
            name: "dim7", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 2, interval: "&flat;7" },
                { string: 3, fret: 3, interval: "&flat;3" }
            ]
        },
        {
            name: "min7&flat;5", 
            notes: [
                { string: 6, fret: 2, interval: "R" },
                { string: 5, fret: 3, interval: "&flat;5" },
                { string: 4, fret: 2, interval: "&flat;7" }
            ]
        },
        {
            name: "min7&flat;5", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 3, interval: "&flat;7" },
                { string: 3, fret: 3, interval: "&flat;3" }
            ]
        },
        {
            name: "min7", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 3, interval: "&flat;7" },
                { string: 3, fret: 3, interval: "&flat;3" }
            ]
        },
        {
            name: "7", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 3, interval: "&flat;7" },
                { string: 3, fret: 4, interval: "3" }
            ]
        },
        {
            name: "7/5", 
            notes: [
                { string: 6, fret: 3, interval: "5" },
                { string: 4, fret: 2, interval: "3" },
                { string: 3, fret: 3, interval: "&flat;7" }
            ]
        },
        {
            name: "maj7", 
            notes: [
                { string: 6, fret: 3, interval: "R" },
                { string: 4, fret: 4, interval: "7" },
                { string: 3, fret: 4, interval: "3" }
            ]
        }
    ]
}