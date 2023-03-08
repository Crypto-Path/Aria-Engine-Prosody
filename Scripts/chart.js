class Chart {
    /**
     * Description
     * @param {*} map 
     * @param {*} rows 
     * @param {*} xOffset 
     * @param {*} yOffset 
     * @param {*} xVel 
     * @param {*} yVel 
     * @param {*} progress 
     */
    constructor(map, rows, xOffset = 0, yOffset = 0, xVel = 0, yVel = 0, progress = 0, rate = 1) {
        this.map = map;
        this.rows = rows;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.xVel = xVel;
        this.yVel = yVel;
        this.progress = progress;
        this.rate = rate;

        this.row = []
        /*Sets each row to an empty array for some purpose idk*/
        for (let i = 0; i < rows; i++) {
            this.row[i] = [];
        }

        this.Load_Map()
    }

    Load_Map() {
        const mapChart = this.map["4Rows"]["Difficulty1"];
        for (let i in mapChart) {
            for (let j in i) {
                try {
                    console.log(j)
                    const notes = this.map["4Rows"]["Difficulty1"][i][j];
                    console.log(notes);
                    for (let x = 0; x < notes.length; x++) {
                        const element = notes[x];
                        console.log(element)
                        this.tempNote = new Note(j*100,19737*(-element/(parseFloat(this.map["BPM"])*4))/this.rate,this.row[j].length) // Creates note object
                        try { // A previous note doesn't always exist
                            this.tempNote.Set_Start_Pos([this.tempNote.Get_Pos()[0], this.tempNote.Get_Pos()[1] + (this.row[j][this.row[j].length-1].Get_Pos()[1])]); // Sets note y offset of previous note ([10,10] -> [10,20]) to avoid overlap and reduce map size
                            this.tempNote.Set_Pos(this.tempNote.Get_Start_Pos());
                        } catch (error) { }
                        this.Append(this.tempNote,j) // Appends note to row array which holds all notes
                    }
                } catch (error) {
                    return
                }
            }
        }
    }

    /**
     * Returns map data (Map Name, Map Create, Etc.)
     */
    Get_MetaData() {
        return [this.map["Name"],this.map["Creator"],this.map["BPM"]]
    }

    /**
     * Adds note to chart
     * @param note The note object itself
     * @param row The row the note is appended to || Default: 0
     */
    Append(note, row = 0) {
        this.row[row].push(note); // Adds Note object to an array inside the rows array (EX: rows = [[note,note,note],[note,note]])
    }

    Remove(row) {
        this.row[row].shift();
    }

    UpdateNotes(row = 0) {
        for (let i = 0; i < this.row[row].length; i++) {
            const note = this.row[row][i];
            note.Set_Pos([note.Get_Pos()[0], note.Get_Start_Pos()[1] + this.yVel * this.progress]);
        }
    }
    //Update

    Get_Next(row) {

    }

    Get_Rows() {
        return this.rows;
    }

    Get_Poss(row) {
        return this.row[row];
    }

    Get_Progress() {
        return this.progress;
    }

    Set_Progess(progress) {
        this.progress = progress
    }

    ChangeProgress(change) {
        this.progress += change;
    }

    Get_Xs(row) {

    }

    Get_Ys(row) {

    }

    Set_X_Offet(xOffset) {

    }

    Set_Y_Offet(yOffset) {
        
    }

    Set_X_Vel(xVel) {
        
    }

    Set_Y_Vel(yVel) {
        
    }
}
