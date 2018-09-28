import Note from './../Models/Note';

export default interface ISvgGenerator {
    gridBox(): Element;
    note(noteObject: Note, isRoot: boolean): Element; 
}