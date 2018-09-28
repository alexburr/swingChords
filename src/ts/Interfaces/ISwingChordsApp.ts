import ChordGroup from './../Models/ChordGroup';

export default interface ISwingChordsApp {
    drawChordGroups(chordGroups: ChordGroup[]): void;
}