namespace swingChords {

    export class app {
        body: HTMLBodyElement;
        itemTemplate: any;
        svgns: string = "http://www.w3.org/2000/svg";

        // Construction ------------------------------------------------
        constructor() {
            this.body = document.querySelector("body");
            this.itemTemplate = document.querySelector("#itemTemplate");

            this.drawChordGroups(allChords);
        }

        // Public methods ----------------------------------------------
        public drawChordGroups(allChordGroups: ChordGroup[]): void {
            for (var i = 0; i < allChordGroups.length; i++) {
                this.drawChordGroup(allChordGroups[i]);
            }
        }

        // Private methods ---------------------------------------------
        private drawHeader(text: string): void {
            var header: HTMLHeadingElement = document.createElement("h2");
            var headerText: Text = document.createTextNode(text); 
            header.appendChild(headerText);
            this.body.appendChild(header);
        }

        private gridLine(classValue: string, xValue: string, yValue: string): Element {

            var gridLine: Element = document.createElementNS(this.svgns, "rect");
            gridLine.setAttributeNS(null, "class", classValue);
            gridLine.setAttributeNS(null, "x", xValue);
            gridLine.setAttributeNS(null, "y", yValue);
            return gridLine;
        }

        private drawGridLines(gridBox: Element, counter: number): void {
            
            var xValue: string = (counter > 0) ? counter.toString() + "%" : counter.toString();

            gridBox.appendChild(this.gridLine("grid", "0", "0"));
            gridBox.appendChild(this.gridLine("gridLine", xValue, "0"));
            gridBox.appendChild(this.gridLine("gridLine", xValue, "20%"));
            gridBox.appendChild(this.gridLine("gridLine", xValue, "40%"));
            gridBox.appendChild(this.gridLine("gridLine", xValue, "60%"));
            gridBox.appendChild(this.gridLine("gridLine", xValue, "80%"));
        }
        
        private gridBox(): Element {
            var gridBox = document.createElementNS(this.svgns, "svg");     
            gridBox.setAttributeNS(null, "class", "gridBox");            
            gridBox.setAttributeNS(null, "width", "100%");            
            gridBox.setAttributeNS(null, "height", "100%");

            var grid: Element = document.createElementNS(this.svgns, "grid");
            grid.setAttributeNS(null, "x", "0");
            grid.setAttributeNS(null, "y", "0");

            gridBox.appendChild(grid);

            for (var x = 0; x < 100; x = x + 20) {
                this.drawGridLines(gridBox, x);
            }
            
            return gridBox;
        }

        private drawNote(box: any, noteObject: Note): void {
            var note: Element;
            var dotBox: any;
            var dotText: any;
            
            dotBox = document.createElementNS(this.svgns, "svg");
            dotBox.setAttributeNS(null, "class", "dotBox");

            note = document.createElementNS(this.svgns, "circle");
            note.setAttributeNS(null, "class", "dot");
            note.setAttributeNS(null, "cx", "50%");
            note.setAttributeNS(null, "cy", "50%");
            note.setAttributeNS(null, "r", "50%");

            dotText = document.createElementNS(this.svgns, "text");
            dotText.setAttributeNS(null, "x", "50%");
            dotText.setAttributeNS(null, "y", "52%");
            dotText.setAttributeNS(null, "text-anchor", "middle");
            dotText.setAttributeNS(null, "dy", ".3em");

            dotBox.appendChild(note);
            dotBox.appendChild(dotText);            

            dotBox.classList.add("string" + noteObject.string);
            dotBox.classList.add("fret" + noteObject.fret);
            
            if (noteObject.interval == "R") {
                dotBox.classList.add("root");
            }
            dotText.innerHTML = noteObject.interval;
            
            box.appendChild(dotBox);
        }

        private drawChord(chord: Chord, container: HTMLDivElement): void {
            var item: any;
            var gridWrap: any;
            
            item = document.importNode(this.itemTemplate.content, true);
            item.querySelector("h3").innerHTML = chord.name;

            gridWrap = item.querySelector(".gridWrap");
            var gridBox = this.gridBox();
            gridWrap.appendChild(gridBox);
            
            for (var i = 0; i < chord.notes.length; i++) {
                this.drawNote(gridWrap, chord.notes[i]);
            }
            
            container.appendChild(item);
        }

        private drawChords(chordsArray: Chord[], container: HTMLDivElement): void {
            for (var i = 0; i < chordsArray.length; i++) {
                this.drawChord(chordsArray[i], container);
            }
        }
        
        private drawChordGroup(chordGroup: ChordGroup): void {
            this.drawHeader(chordGroup.name);
            var container = document.createElement("div");
            container.classList.add("contentWrap");
            this.body.appendChild(container);
            this.drawChords(chordGroup.chords, container);
        }
    }
}