function InitNotes(_chart, _notes) {
    _notes.length = _chart.Get_Rows(); // Gets the length of rows (How many rows exist in chart)
    for (let i = 0; i < _chart.Get_Rows(); i++) { // Checks for each row
        _notes[i] = [] // Inits var
        _notes[i].length = _chart.Get_Poss(i).length; // Sets length of each array in notes
        for (let j = 0; j < _chart.Get_Poss(i).length; j++) { // Gets each note in row
            CreateNote(_chart, i, j); // Creates note
        }
    }
    return _notes;
}

function UpdateNotes(_chart) {
    for (let i = 0; i < notes.length; i++) {
        for (let j = 0; j < notes[i].length; j++) {
            note = _chart.Get_Poss(i)[j] // Gets note information
            noteObject = notes[i][j].style;
            noteObject.left = (note.Get_Pos()[0] - StartPos[0])/16 + "rem"; // Sets the X location
            noteObject.top = (note.Get_Pos()[1] * scrollSpeed * 80 - StartPos[1])/16 + "rem"; // Sets the Y location
        }
    }  
}

function CreateNote(_chart, row, index) {
    noteImage = document.createElement("img"); // Creates image object
    notes[row][index] = noteImage; // Set visual notes array to image object
    noteImage.src = "Sprites/Notes/Note_Hit_"+(row+1)+".png"; // Sets the image's image
    noteImage.classList.add('note'); // Sets the class for the look of the object
    note = _chart.Get_Poss(row)[index] // Gets note information
    noteImage.style.left = (note.x - StartPos[0])/16 + "rem"; // Sets the X location
    noteImage.style.top = (note.y * scrollSpeed  - StartPos[1])/16 + "rem"; // Sets the Y location
    noteImage.id = tempNoteId; // Debug Purposes
    tempNoteId++; // Debug Purposes
    document.getElementById("NoteContainer").appendChild(noteImage); // Appends the object to DOM
}