import Note from '../Models/Note';
import ISvgGenerator from '../Interfaces/ISvgGenerator';

export default class SvgGenerator implements ISvgGenerator {      
    private svgns: string = "http://www.w3.org/2000/svg";

    // Construction ------------------------------------------------
    constructor() {
    }

    // Public methods ----------------------------------------------
    public gridBox(): Element {
        return this.drawGridBox();
    }

    public note(noteObject: Note, isRoot: boolean): Element {
        return this.drawNote(noteObject, isRoot);
    }

    // Private methods ---------------------------------------------
    private drawSvgWithAttributes(elementType: string, attributes: any[] = null): Element {
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
        const dotBoxClass = "dotBox string" + noteObject.string + " fret" + noteObject.fret;
        const dotBox: Element = this.drawSvgWithAttributes("svg", [
            { "class": (isRoot) ? dotBoxClass + " root" : dotBoxClass }
        ]);

        const note: Element = this.drawSvgWithAttributes("circle", [
            { "class": "dot" },
            { "cx": "50%" },
            { "cy": "50%" },
            { "r": "50%" }
        ]);

        const dotTextClass = (!isRoot && (noteObject.interval.includes("&flat;") || noteObject.interval.includes("&sharp;"))) ? "accidental" : "";
        const dotText: Element = this.drawSvgWithAttributes("text", [
            { "class": dotTextClass },
            { "x": "50%" },
            { "y": "53%" },
            { "text-anchor": "middle" },
            { "dy": ".3em" }
        ]);
        dotText.innerHTML = isRoot ? "R" : noteObject.interval;

        dotBox.appendChild(note);
        dotBox.appendChild(dotText);

        return dotBox;
    }

    private drawGridBox(): Element {
        const gridBox: Element = this.drawSvgWithAttributes("svg", [
            { "class": "gridBox" },
            { "width": "100%" },
            { "height": "100%" }
        ]);
        
        const grid: Element = this.drawSvgWithAttributes("grid", [
            { "x": "0" },
            { "y": "0" }
        ]);

        gridBox.appendChild(grid);

        for (var x = 0; x < 100; x = x + 20) {
            this.drawGridLines(gridBox, x);
        }

        return gridBox;
    }

    private drawGridLines(gridBox: Element, counter: number): void {
        const xValue: string = (counter > 0) ? counter.toString() + "%" : counter.toString();

        const gridOutline: Element = this.drawSvgWithAttributes("rect", [
            { "class": "gridOutline" },
            { "x": "0" },
            { "y": "0" }
        ]);

        gridBox.appendChild(gridOutline);

        for (var y = 0; y < 100; y = y + 20) {
            const yValue: string = (y > 0) ? y.toString() + "%" : y.toString();

            const gridLine: Element = this.drawSvgWithAttributes("rect", [
                { "class": "gridLine" },
                { "x": xValue },
                { "y": yValue }
            ]);

            gridBox.appendChild(gridLine);
        }
    }
}