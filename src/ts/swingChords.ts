namespace swingChords {

    export class app {
        body: HTMLBodyElement;
        itemTemplate: any;
        noteTemplate: any;

        constructor() {
            this.body = document.querySelector("body");
            this.itemTemplate = document.querySelector("#itemTemplate");
            this.noteTemplate = document.querySelector("#noteTemplate");
        }

        public drawHeader(text: string) {
            var header: HTMLHeadingElement = document.createElement("h1");
            var headerText: Text = document.createTextNode(text); 
            header.appendChild(headerText);
            this.body.appendChild(header);
        }
        
        public drawNote(box: any, noteObject: Note) {
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

        public drawChord(chord: Chord) {
            var item: any;
            var grid: any;
            
            item = document.importNode(this.itemTemplate.content, true);
            item.querySelector("h2").innerHTML = chord.name;
            
            grid = item.querySelector(".gridWrap");
            
            for (var i = 0; i < chord.notes.length; i++) {
                this.drawNote(item, chord.notes[i]);
            }
            
            this.body.appendChild(item);
        }

        public drawChords(chordsArray: Chord[]) {
            for (var i = 0; i < chordsArray.length; i++) {
                this.drawChord(chordsArray[i]);
            }
        }

        public drawChordGroup(chordGroup: ChordGroup) {
            this.drawHeader(chordGroup.name);
            this.drawChords(chordGroup.chords);
        }
    }
}