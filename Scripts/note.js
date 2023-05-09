class Note {
    /**
     * Description:
     * The most basic element, a note. Provides its location and data, and its availibilty for those to be change.
     * @param {*} x 
     * @param {*} y 
     * @param {*} id 
     */
    constructor(x, y, id, type = 0, length = 1) {
        this.start_x = x;
        this.start_y = y;
        this.x = this.start_x;
        this.y = this.start_y;
        this.id = id;
        this.type = type; // 0 - Standard || 1 - Hold
        this.length = length;
    }

    Get_Start_Pos() {
        return [this.start_x, this.start_y];
    }

    Set_Start_Pos(pos) {
        this.start_x = pos[0];
        this.start_y = pos[1];
    }

    Get_Pos() {
        return [this.x, this.y];
    }

    Set_Pos(pos) {
        this.x = pos[0];
        this.y = pos[1];
    }

    Change_Pos(change) {
        this.x += change[0];
        this.y += change[1];
    }

    Get_Id() {
        return this.id;
    }
    
    Get_Type() {
        return this.type;
    }
    
    Get_Length() {
        return this.length;
    }
}
