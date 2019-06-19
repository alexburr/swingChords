import SvgGenerator from './SvgGenerator';
import Chord from '../Models/Chord';
import ChordGroup from '../Models/ChordGroup';
import { allChords } from '../Data/allChords';
import { allImprovShapes } from '../Data/allImprovShapes';
import ISwingChordsApp from '../Interfaces/ISwingChordsApp';
import ImprovShape from '../Models/ImprovShape';

// NOTE: This cannot be 'export default' while we are using requirejs
export class SwingChordsApp implements ISwingChordsApp {    
    body: HTMLBodyElement = document.querySelector("body");
    itemTemplate: any = document.querySelector("#itemTemplate");
    svgGenerator: SvgGenerator = new SvgGenerator(this);
    chordGroups: ChordGroup[] = allChords;
    improvShapes: ImprovShape[] = allImprovShapes;

    // Construction ------------------------------------------------
    constructor() {
        this.drawChordGroups();
        this.drawImprovShapes();
        window["SwingChordsApp"] = this;
    }

    // Public methods ----------------------------------------------
    public drawChordGroups(): void {
        this.chordGroups.forEach((chordGroup) => {
            this.drawChordGroup(chordGroup);
        });
    }

    public drawImprovShapes(): void {
        this.drawHeader("Improv Shapes", "improvShapes");        
        const container: HTMLDivElement = document.createElement("div");
        container.classList.add("contentWrap");
        this.improvShapes.forEach((improvShape) => {
            this.drawImprovShape(improvShape, container);
        });        
        this.body.appendChild(container);
    }

    // Private methods ---------------------------------------------
    private drawHeader(text: string, id?: string): void {
        const header: HTMLHeadingElement = document.createElement("h2");
        const headerText: Text = document.createTextNode(text); 
        
        header.appendChild(headerText);

        if (id != null) {
            header.id = id;
        }
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

    private drawImprovShape(improvShape: ImprovShape, container: HTMLDivElement): void {
        const gridBox = this.svgGenerator.gridBox();
        const item: Element = document.importNode(this.itemTemplate.content, true);
        const gridWrap: Element = item.querySelector(".gridWrap");
        
        item.querySelector("h4").innerHTML = improvShape.name;
        gridWrap.appendChild(gridBox);

        if (improvShape.root !== null) {
            const root: Element = this.svgGenerator.note(improvShape.root, true);
            gridWrap.appendChild(root);
        }        

        improvShape.notes.forEach((note) => {
            const noteSvg = this.svgGenerator.note(note, false);
            gridWrap.appendChild(noteSvg);
        });
        
        container.appendChild(item);
    }
}