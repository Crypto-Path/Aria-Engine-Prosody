function InitNotes(_chart, _notes) {
    _notes.length = _chart.Get_Rows(); // Gets the length of rows (How many rows exist in chart)
    for (let i = 0; i < _chart.Get_Rows(); i++) { // Checks for each row
        _notes[i] = [] // Inits var
        _notes[i].length = _chart.Get_Poss(i).length; // Sets length of each array in notes
        for (let j = 0; j < _chart.Get_Poss(i).length; j++) { // Gets each note in row
            CreateNote(_chart, i, j, 0); // Creates note
        }
    }
    nots = Math.max(_chart.Get_Poss(0).length, _chart.Get_Poss(1).length, _chart.Get_Poss(2).length, _chart.Get_Poss(3).length);
    UpdateNotes(_chart, nots)
    return _notes;
}

function UpdateNotes(_chart, _npr = 8) {
    const maxNotesToUpdate = _npr; // Limit the number of notes to update
    for (let i = 0; i < notes.length; i++) {
        for (let j = 0; j < Math.min(notes[i].length, maxNotesToUpdate); j++) {
            if (notes[i][j]) {
                const note = _chart.Get_Poss(i)[j];
                const noteObject = notes[i][j].style;
                noteObject.left = (note.Get_Pos()[0] - StartPos[0]) / 16.66 * window.innerWidth / 1920 + "rem"; // Sets the X location
                let getOffset = false;
                try {
                    getOffset = (chart.Get_Audio_Time() == 0);
                } catch (error) {}
                const offset = (getOffset ? (Date.now() - StartTime) / 1000 - 3 : 0);
                noteObject.top = ((note.Get_Pos()[1] + offset) * (scrollSpeed * window.innerWidth / 1920 * 40) - StartPos[1]) / 16 + "rem"; // Sets the Y location
                noteObject.width = 8 * window.innerWidth / 1920 + "rem";
                noteObject.height = noteObject.width;
            }
        }
    }
}

function CreateNote(_chart, _row, _index, _noteType = 0) {
    switch (_noteType) {
        case 0: // Creates a regular note
            noteImage = document.createElement("img"); // Creates image object
            notes[_row][_index] = noteImage; // Set visual notes array to image object
            noteImage.src = "Sprites/Notes/Note_Hit_" + (_row + 1) + ".png"; // Sets the image's image
            noteImage.classList.add('note'); // Sets the class for the look of the object
            note = _chart.Get_Poss(_row)[_index] // Gets note information
            noteImage.style.left = (note.x - StartPos[0]) / 18 + "rem"; // Sets the X location
            noteImage.style.top = (note.y * (scrollSpeed / 4) - StartPos[1]) / 16 + "rem"; // Sets the Y location
            noteImage.id = tempNoteId; // Debug Purposes
            tempNoteId++; // Debug Purposes

            //Sizing
            noteImage.style.left = (6 * _row) * window.innerWidth / 1920 + "rem"
            noteImage.style.width = 8 * window.innerWidth / 1920 + "rem"
            noteImage.style.height = noteImage.style.width

            document.getElementById("NoteContainer").appendChild(noteImage); // Appends the object to DOM
            break;
        case 1: // Creates a long note

            noteImage = document.createElement("img"); // Creates image object


            noteImage = document.createElement("img"); // Creates image object
            notes[_row][_index] = noteImage; // Set visual notes array to image object
            noteImage.src = "Sprites/Notes/Note_Hold_Start_" + (_row + 1) + ".png"; // Sets the image's image
            noteImage.classList.add('note'); // Sets the class for the look of the object
            note = _chart.Get_Poss(_row)[_index] // Gets note information
            noteImage.style.left = (note.x - StartPos[0]) / 18 + "rem"; // Sets the X location
            noteImage.style.top = (note.y * (scrollSpeed / 4) - StartPos[1]) / 16 + "rem"; // Sets the Y location
            noteImage.id = tempNoteId; // Debug Purposes
            tempNoteId++; // Debug Purposes
            noteImage.style.left = (6 * _row) * window.innerWidth / 1920 + "rem"
            noteImage.style.width = 8 * window.innerWidth / 1920 + "rem"
            noteImage.style.height = noteImage.style.width

            document.getElementById("NoteContainer").appendChild(noteImage); // Appends the object to DOM
            break;
        case 2: // Creates an adlib note
            noteImage = document.createElement("img"); // Creates image object
            notes[_row][_index] = noteImage; // Set visual notes array to image object
            noteImage.src = "Sprites/Notes/Note_Hit_" + (_row + 1) + ".png"; // Sets the image's image
            noteImage.classList.add('note'); // Sets the class for the look of the object
            note = _chart.Get_Poss(_row)[_index] // Gets note information

            noteImage.style.opacity = "0"; // Turns it invisible

            noteImage.style.left = (note.x - StartPos[0]) / 18 + "rem"; // Sets the X location
            noteImage.style.top = (note.y * (scrollSpeed / 4) - StartPos[1]) / 16 + "rem"; // Sets the Y location
            noteImage.id = tempNoteId; // Debug Purposes
            tempNoteId++; // Debug Purposes

            //Sizing
            noteImage.style.left = (6 * _row) * window.innerWidth / 1920 + "rem"
            noteImage.style.width = 8 * window.innerWidth / 1920 + "rem"
            noteImage.style.height = noteImage.style.width

            document.getElementById("NoteContainer").appendChild(noteImage); // Appends the object to DOM
            break;
        case 2: // Creates an mine note
            noteImage = document.createElement("img"); // Creates image object
            notes[_row][_index] = noteImage; // Set visual notes array to image object

            noteImage.src = "Sprites/Notes/Note_Hit_" + (_row + 1) + ".png"; // Sets the image's image

            noteImage.classList.add('note'); // Sets the class for the look of the object
            note = _chart.Get_Poss(_row)[_index] // Gets note information
            noteImage.style.opacity = "rem"; // Sets the X location
            noteImage.style.left = (note.x - StartPos[0]) / 18 + "rem"; // Sets the X location
            noteImage.style.top = (note.y * (scrollSpeed / 4) - StartPos[1]) / 16 + "rem"; // Sets the Y location
            noteImage.id = tempNoteId; // Debug Purposes
            tempNoteId++; // Debug Purposes

            //Sizing
            noteImage.style.left = (6 * _row) * window.innerWidth / 1920 + "rem"
            noteImage.style.width = 8 * window.innerWidth / 1920 + "rem"
            noteImage.style.height = noteImage.style.width

            document.getElementById("NoteContainer").appendChild(noteImage); // Appends the object to DOM
            break;
        default:
            break;
    }
}