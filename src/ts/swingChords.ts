namespace swingChords {

    export class app {
        body: HTMLBodyElement;
        itemTemplate: any;
        gridTemplate: any;
        noteTemplate: any;

        // Construction ------------------------------------------------
        constructor() {
            this.body = document.querySelector("body");
            this.itemTemplate = document.querySelector("#itemTemplate");
            this.gridTemplate = document.querySelector("#gridTemplate");
            this.noteTemplate = document.querySelector("#noteTemplate");

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
        
        private drawNote(box: any, noteObject: Note): void {
            var note: any;
            var dotBox: any;
            var dotText: any;
            
            note = document.importNode(this.noteTemplate.content, true);
            dotBox = note.querySelector(".dotBox");
            dotBox.classList.add("string" + noteObject.string);
            dotBox.classList.add("fret" + noteObject.fret);
            dotText = dotBox.querySelector("text");
            
            if (noteObject.interval == "R") {
                dotBox.classList.add("root");
            }
            dotText.innerHTML = noteObject.interval;
            
            box.querySelector(".gridWrap").appendChild(dotBox);
        }

        private drawChord(chord: Chord, container: HTMLDivElement): void {
            var item: any;
            var gridWrap: any;
            
            item = document.importNode(this.itemTemplate.content, true);
            item.querySelector("h3").innerHTML = chord.name;

            gridWrap = item.querySelector(".gridWrap");
            
            for (var i = 0; i < chord.notes.length; i++) {
                this.drawNote(item, chord.notes[i]);
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