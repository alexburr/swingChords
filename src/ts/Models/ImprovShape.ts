import Note from './Note';
import Chord from './Chord';

export default class ImprovShape extends Chord { 
    name: string;
    caption?: string;
    root: Note;
    notes: Note[];
}