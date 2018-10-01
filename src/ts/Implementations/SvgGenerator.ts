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
    private drawNote(noteObject: Note, isRoot: boolean): Element {
        var note: Element;
        var dotBox: Element;
        var dotText: Element;
        
        dotBox = document.createElementNS(this.svgns, "svg");
        dotBox.setAttributeNS(null, "class", "dotBox");
        dotBox.classList.add("string" + noteObject.string);
        dotBox.classList.add("fret" + noteObject.fret);

        note = document.createElementNS(this.svgns, "circle");
        note.setAttributeNS(null, "class", "dot");
        note.setAttributeNS(null, "cx", "50%");
        note.setAttributeNS(null, "cy", "50%");
        note.setAttributeNS(null, "r", "50%");

        dotText = document.createElementNS(this.svgns, "text");
        dotText.setAttributeNS(null, "x", "50%");
        dotText.setAttributeNS(null, "y", "53%");
        dotText.setAttributeNS(null, "text-anchor", "middle");
        dotText.setAttributeNS(null, "dy", ".3em");
        dotText.innerHTML = isRoot ? "R" : noteObject.interval;
        
        if (!isRoot) {
            if (noteObject.interval.includes("&flat;") || noteObject.interval.includes("&sharp;")) {
                dotText.setAttributeNS(null, "class", "accidental");
            }
        }

        dotBox.appendChild(note);
        dotBox.appendChild(dotText);
        
        if (isRoot) {
            dotBox.classList.add("root");
        }

        return dotBox;
    }

    private drawGridBox(): Element {
        var gridBox: Element;
        var grid: Element;

        gridBox = document.createElementNS(this.svgns, "svg");     
        gridBox.setAttributeNS(null, "class", "gridBox");            
        gridBox.setAttributeNS(null, "width", "100%");            
        gridBox.setAttributeNS(null, "height", "100%");
        
        grid = document.createElementNS(this.svgns, "grid");
        grid.setAttributeNS(null, "x", "0");
        grid.setAttributeNS(null, "y", "0");

        gridBox.appendChild(grid);

        for (var x = 0; x < 100; x = x + 20) {
            this.drawGridLines(gridBox, x);
        }

        return gridBox;
    }

    private drawGridLine(classValue: string, xValue: string, yValue: string): Element {
        var gridLine: Element; 
        
        gridLine = document.createElementNS(this.svgns, "rect");
        gridLine.setAttributeNS(null, "class", classValue);
        gridLine.setAttributeNS(null, "x", xValue);
        gridLine.setAttributeNS(null, "y", yValue);
        return gridLine;
    }

    private drawGridLines(gridBox: Element, counter: number): void {
        var xValue: string = (counter > 0) ? counter.toString() + "%" : counter.toString();

        gridBox.appendChild(this.drawGridLine("grid", "0", "0"));

        for (var y = 0; y < 100; y = y + 20) {
            var yValue: string = (y > 0) ? y.toString() + "%" : y.toString();
            var gridLine: Element = this.drawGridLine("gridLine", xValue, yValue);
            gridBox.appendChild(gridLine);
        }
    }
}