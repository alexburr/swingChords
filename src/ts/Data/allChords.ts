import ChordGroup from '../Models/ChordGroup';

export const allChords: ChordGroup[] = [
    {
        name: "Lowest Note On the Fifth String",
        chords: [
            {
                name: "maj6", 
                root: { string: 5, fret: 3 },
                notes: [
                    { string: 4, fret: 2, interval: "3" },
                    { string: 3, fret: 2, interval: "6" }
                ]
            },
            {
                name: "aug", 
                root: { string: 5, fret: 4 },
                notes: [
                    { string: 4, fret: 3, interval: "3" },
                    { string: 3, fret: 2, interval: "+5" }
                ]
            },
            {
                name: "min6", 
                root: { string: 5, fret: 4 },
                notes: [
                    { string: 4, fret: 2, interval: "-3" },
                    { string: 3, fret: 3, interval: "6" }
                ]
            },
            {
                name: "dim7", 
                root: { string: 5, fret: 4 },
                notes: [                    
                    { string: 4, fret: 2, interval: "-3" },
                    { string: 3, fret: 3, interval: "--7" }
                ]
            },
            {
                name: "min7(&flat;5)", 
                root: { string: 5, fret: 3 }, 
                notes: [
                    { string: 4, fret: 4, interval: "-5" },
                    { string: 3, fret: 3, interval: "-7" }
                ]
            },
            {
                name: "min7(&flat;5)", 
                root: { string: 5, fret: 4 },
                notes: [                    
                    { string: 4, fret: 2, interval: "-3" },
                    { string: 3, fret: 4, interval: "-7" }
                ]
            },
            {
                name: "min7", 
                root: { string: 5, fret: 4 },
                notes: [
                    { string: 4, fret: 2, interval: "-3" },
                    { string: 3, fret: 4, interval: "-7" }
                ]
            },
            {
                name: "7", 
                root: { string: 5, fret: 3 },
                notes: [
                    { string: 4, fret: 2, interval: "3" },
                    { string: 3, fret: 3, interval: "-7" }
                ]
            },
            {
                name: "maj7", 
                root: { string: 5, fret: 3 },
                notes: [
                    { string: 4, fret: 2, interval: "3" },
                    { string: 3, fret: 4, interval: "7" }
                ]
            }
        ]
    }, 
    {
        name: "Lowest Note On the Sixth String",
        chords: [
            { 
                name: "min/5",
                root: { string: 4, fret: 4 },
                notes: [
                    { string: 6, fret: 2, interval: "5" },
                    { string: 3, fret: 2, interval: "-3" }
                ]
            },
            { 
                name: "min/3",
               
                root:  { string: 4, fret: 2 },
                notes: [
                    { string: 6, fret: 3, interval: "-3" },
                    { string: 3, fret: 4, interval: "5" }
                ]
            },
            {
                name: "maj", 
                root: { string: 6, fret: 2 },
                notes: [
                    { string: 4, fret: 4, interval: "5" },
                    { string: 3, fret: 3, interval: "3" }
                ]
            },
            {
                name: "maj/3", 
                root: { string: 4, fret: 2 },
                notes: [
                    { string: 6, fret: 4, interval: "3" },                    
                    { string: 3, fret: 4, interval: "5" }
                ]
            },{
                name: "maj/5", 
                root: { string: 3, fret: 5 },
                notes: [
                    { string: 6, fret: 3, interval: "5" },
                    { string: 4, fret: 2, interval: "3" },
                ]
            },
            {
                name: "aug", 
                root: { string: 6, fret: 4 },
                notes: [
                    { string: 5, fret: 3, interval: "3" },
                    { string: 4, fret: 2, interval: "+5" }
                ]
            },
            {
                name: "maj6", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 2, interval: "6" },
                    { string: 3, fret: 4, interval: "3" }
                ]
            },
            {
                name: "maj6/5", 
                root: null,
                notes: [
                    { string: 6, fret: 3, interval: "5" },
                    { string: 4, fret: 2, interval: "3" },
                    { string: 3, fret: 2, interval: "6" }
                ]
            },
            {
                name: "min6", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 2, interval: "6" },
                    { string: 3, fret: 3, interval: "-3" }
                ]
            },
            {
                name: "dim7", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 2, interval: "--7" },
                    { string: 3, fret: 3, interval: "-3" }
                ]
            },
            {
                name: "min7(&flat;5)", 
                root: { string: 6, fret: 2 },
                notes: [
                    { string: 5, fret: 3, interval: "-5" },
                    { string: 4, fret: 2, interval: "-7" }
                ]
            },
            {
                name: "min7(&flat;5)", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 3, interval: "-7" },
                    { string: 3, fret: 3, interval: "-3" }
                ]
            },
            {
                name: "min7", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 3, interval: "-7" },
                    { string: 3, fret: 3, interval: "-3" }
                ]
            },
            {
                name: "7", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 3, interval: "-7" },
                    { string: 3, fret: 4, interval: "3" }
                ]
            },
            {
                name: "7/5", 
                root: null,
                notes: [
                    { string: 6, fret: 3, interval: "5" },
                    { string: 4, fret: 2, interval: "3" },
                    { string: 3, fret: 3, interval: "-7" }
                ]
            },
            {
                name: "maj7", 
                root: { string: 6, fret: 3 },
                notes: [
                    { string: 4, fret: 4, interval: "7" },
                    { string: 3, fret: 4, interval: "3" }
                ]
            },
            {
                name: "maj7/5", 
                root: null,
                notes: [
                    { string: 6, fret: 3, interval: "5" },
                    { string: 4, fret: 2, interval: "3" },
                    { string: 3, fret: 4, interval: "7" }
                ]
            }
        ]
    }
];