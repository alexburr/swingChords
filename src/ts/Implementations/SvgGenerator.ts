import Note from '../Models/Note';
import ISvgGenerator from '../Interfaces/ISvgGenerator';
import ISwingChordsApp from '../Interfaces/ISwingChordsApp';
import { ImprovType } from '../Models/ImprovType';

export default class SvgGenerator implements ISvgGenerator {      
    private svgns: string = "http://www.w3.org/2000/svg";
    //private parentApp: ISwingChordsApp;

    // Construction ------------------------------------------------
    constructor(parentApp: ISwingChordsApp) {
        //this.parentApp = parentApp;
    }

    // Public methods ----------------------------------------------
    public gridBox(): Element {
        return this.drawGridBox();
    }

    public note(noteObject: Note, isRoot: boolean): Element {
        return this.drawNote(noteObject, isRoot);
    }

    // Private methods ---------------------------------------------
    private createSvgWithAttributes(elementType: string, attributes: any[] = null): Element {
        const svgElement: Element = document.createElementNS(this.svgns, elementType);

        if (attributes !== null) {
            attributes.forEach((attribute) => {
                var attributeName: string = Object.keys(attribute)[0];
                var attributeValue: string = attribute[attributeName];
                svgElement.setAttributeNS(null, attributeName, attributeValue);
            });
        }

        return svgElement;
    }

    private drawNote(noteObject: Note, isRoot: boolean): Element {
        
        const isAccidental = !isRoot ? noteObject.interval.includes("-") || noteObject.interval.includes("+") : false;
        const isAddedRoot = (noteObject.improvType != null && noteObject.improvType == ImprovType.AddedRoot);
        const isAddedChordTone = (noteObject.improvType != null && noteObject.improvType == ImprovType.AddedChordTone);
        const isOrnament = (noteObject.improvType != null && noteObject.improvType == ImprovType.Ornament);

        const dotBoxClass = "dotBox string" + noteObject.string + " fret" + noteObject.fret;
        const dotBox: Element = this.createSvgWithAttributes("svg", [
            { "class": isRoot || isAddedRoot ? dotBoxClass + " root" : dotBoxClass }
        ]);

        const dotBaseClass: string = (isAddedChordTone || isOrnament) ? "smallDot" : "dot";
        const note: Element = this.createSvgWithAttributes("circle", [
            { "class": isOrnament ? dotBaseClass + " empty" : dotBaseClass },
            { "cx": "50%" },
            { "cy": "50%" },
            { "r": "50%" }
        ]);

        const dotTextBaseClass = (isAddedChordTone || isOrnament) ? "smallText" : " ";
        let dotTextClass = isAccidental ? dotTextBaseClass + " accidental" : dotTextBaseClass;
        if (isOrnament) {
            dotTextClass += " inverse";
        }
        const dotText: Element = this.createSvgWithAttributes("text", [
            { "class": dotTextClass },
            { "x": "50%" },
            { "y": "53%" },
            { "text-anchor": "middle" },
            { "dy": ".3em" }
        ]);

        if (isAccidental) {
            noteObject.interval = noteObject.interval.replace(/-/gi,"&flat;");
            noteObject.interval = noteObject.interval.replace(/\+/gi,"&sharp;");
        }

        dotText.innerHTML = isRoot ? "R" : noteObject.interval;

        dotBox.appendChild(note);
        dotBox.appendChild(dotText);

        return dotBox;
    }

    private drawGridBox(): Element {
        const gridBox: Element = this.createSvgWithAttributes("svg", [
            { "class": "gridBox" },
            { "width": "100%" },
            { "height": "100%" }
        ]);

        const gridOutline: Element = this.createSvgWithAttributes("rect", [
            { "class": "gridOutline" },
            { "x": "0%" },
            { "y": "0%" }
        ]);

        gridBox.appendChild(gridOutline);

        for (var x = 0; x < 100; x = x + 20) {
            this.drawGridLines(gridBox, x);
        }

        return gridBox;
    }

    private drawGridLines(gridBox: Element, counter: number): void {
        const xValue: string = counter.toString() + "%";

        for (var y = 0; y < 100; y = y + 20) {
            const yValue: string = y.toString() + "%";

            const gridLine: Element = this.createSvgWithAttributes("rect", [
                { "class": "gridLine" },
                { "x": xValue },
                { "y": yValue }
            ]);

            gridBox.appendChild(gridLine);
        }
    }
}