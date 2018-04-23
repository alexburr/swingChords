function assignGlobals() { 
    body = document.querySelector("body");
    itemTemplate = document.querySelector("#itemTemplate");
    noteTemplate = document.querySelector("#noteTemplate");
}

function drawHeader(text: string) {
    var header: HTMLHeadingElement = document.createElement("h1");
    var headerText: Text = document.createTextNode(text); 
    header.appendChild(headerText);
    body.appendChild(header);
}

function drawNote(box: any, noteObject: Note) {
    var note, dotBox, dotText;
    
    note = document.importNode(noteTemplate.content, true);
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

function drawChord(chord: Chord) {
    var item, grid;
    
    item = document.importNode(itemTemplate.content, true);
    item.querySelector("h2").innerHTML = chord.name;
    
    grid = item.querySelector(".gridWrap");
    
    for (var i = 0; i < chord.notes.length; i++) {
        drawNote(item, chord.notes[i]);
    }
    
    body.appendChild(item);
}

function drawChords(chordsArray: Chord[]) {
    for (var i = 0; i < chordsArray.length; i++) {
        drawChord(chordsArray[i]);
    }
}

function drawChordGroup(chordGroup: ChordGroup) {
    drawHeader(chordGroup.name);
    drawChords(chordGroup.chords);
}