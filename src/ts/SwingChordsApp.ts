import SvgGenerator from './SvgGenerator';
import Chord from './Models/Chord';
import ChordGroup from './Models/ChordGroup';
import { allChordData } from './allChordData';

export class SwingChordsApp {
    body: HTMLBodyElement = document.querySelector("body");;
    itemTemplate: any = document.querySelector("#itemTemplate");;
    svgGenerator: SvgGenerator = new SvgGenerator();

    // Construction ------------------------------------------------
    constructor() {
        this.drawChordGroups(allChordData);
    }

    // Public methods ----------------------------------------------
    public drawChordGroups(chordGroups: ChordGroup[]): void {
        for (var i = 0; i < chordGroups.length; i++) {
            this.drawChordGroup(chordGroups[i]);
        }
    }

    // Private methods ---------------------------------------------
    private drawHeader(text: string): void {
        var header: HTMLHeadingElement = document.createElement("h2");
        var headerText: Text = document.createTextNode(text); 
        
        header.appendChild(headerText);
        this.body.appendChild(header);
    }

    private drawChord(chord: Chord, container: HTMLDivElement): void {
        var item: any;
        var gridWrap: any;            
        var gridBox = this.svgGenerator.gridBox();
        
        item = document.importNode(this.itemTemplate.content, true);
        item.querySelector("h3").innerHTML = chord.name;

        gridWrap = item.querySelector(".gridWrap");
        gridWrap.appendChild(gridBox);
        
        for (var i = 0; i < chord.notes.length; i++) {
            var note = this.svgGenerator.note(chord.notes[i]);
            gridWrap.appendChild(note);
        }
        
        container.appendChild(item);
    }

    private drawChords(chordsArray: Chord[], container: HTMLDivElement): void {
        for (var i = 0; i < chordsArray.length; i++) {
            this.drawChord(chordsArray[i], container);
        }
    }
    
    private drawChordGroup(chordGroup: ChordGroup): void {
        var container: HTMLDivElement = document.createElement("div");
        
        this.drawHeader(chordGroup.name);            
        container.classList.add("contentWrap");
        this.body.appendChild(container);
        this.drawChords(chordGroup.chords, container);
    }
}
