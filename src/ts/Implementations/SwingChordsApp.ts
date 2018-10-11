import SvgGenerator from './SvgGenerator';
import Chord from '../Models/Chord';
import ChordGroup from '../Models/ChordGroup';
import { allChords } from '../Data/allChords';
import ISwingChordsApp from '../Interfaces/ISwingChordsApp';

// NOTE: This cannot be 'export default' while we are using requirejs
export class SwingChordsApp implements ISwingChordsApp {    
    body: HTMLBodyElement = document.querySelector("body");
    itemTemplate: any = document.querySelector("#itemTemplate");
    svgGenerator: SvgGenerator = new SvgGenerator(this);
    chordGroups: ChordGroup[] = allChords;

    // Construction ------------------------------------------------
    constructor() {
        this.drawChordGroups();
        window["SwingChordsApp"] = this;
    }

    // Public methods ----------------------------------------------
    public drawChordGroups(): void {
        this.chordGroups.forEach((chordGroup) => {
            this.drawChordGroup(chordGroup);
        });
    }

    // Private methods ---------------------------------------------
    private drawHeader(text: string): void {
        const header: HTMLHeadingElement = document.createElement("h2");
        const headerText: Text = document.createTextNode(text); 
        
        header.appendChild(headerText);
        this.body.appendChild(header);
    }

    private drawChord(chord: Chord, container: HTMLDivElement): void {
        const gridBox = this.svgGenerator.gridBox();
        const item: Element = document.importNode(this.itemTemplate.content, true);
        const gridWrap: Element = item.querySelector(".gridWrap");
        
        item.querySelector("h3").innerHTML = chord.name;
        gridWrap.appendChild(gridBox);
        
        if (chord.root !== null) {
            const root: Element = this.svgGenerator.note(chord.root, true);
            gridWrap.appendChild(root);
        }        

        chord.notes.forEach((note) => {
            const noteSvg = this.svgGenerator.note(note, false);
            gridWrap.appendChild(noteSvg);
        });
        
        container.appendChild(item);
    }

    private drawChords(chordsArray: Chord[], container: HTMLDivElement): void {
        chordsArray.forEach((chord) => {
            this.drawChord(chord, container);
        });
    }
    
    private drawChordGroup(chordGroup: ChordGroup): void {
        const container: HTMLDivElement = document.createElement("div");    
        container.classList.add("contentWrap");
        
        this.drawHeader(chordGroup.name);
        this.body.appendChild(container);
        this.drawChords(chordGroup.chords, container);
    }
}