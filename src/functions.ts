function assignGlobals() { 
    body = document.querySelector("body");
    boxTemplate = document.querySelector("#boxTemplate");
    noteTemplate = document.querySelector("#noteTemplate");
}

function drawNote(box, noteObject) {
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

function drawChord(chord) {
    var box, grid;
    
    box = document.importNode(boxTemplate.content, true);
    box.querySelector("h2").innerHTML = chord.name;
    
    grid = box.querySelector(".gridWrap");
    
    for (var i = 0; i < chord.notes.length; i++) {
        drawNote(box, chord.notes[i]);
    }
    
    var boxElement = body.appendChild(box);
}

function drawBreak() {
    body.appendChild(document.createElement("hr"));
}

function drawChords(chordsArray) {
    for (var i = 0; i < chordsArray.length; i++) {
        drawChord(chordsArray[i]);
    }
}