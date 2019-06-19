import Note from './Note';
import Chord from './Chord';

export default class ImprovShape extends Chord { 
    name: string;
    root: Note;
    notes: Note[];
}