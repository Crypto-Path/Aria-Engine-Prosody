// Checks the judgement position of the next note of each row and if the user has pressed the dedicated key
function HitCheck() {
    if (playing) { // Checks if the map is playing to avoid being able to hit notes before the game is started
        notesLeft = 0;
        for (let i = 0; i < notes.length; i++) { // Checks each row
            notesLeft += CheckRow(i)
        }
    }
}

function CheckRow(i) {
    for (let j = 0; j < notes[i].length; j++) { // Checks each note
        NoteID = chart.Get_Poss(i)[0].Get_Id()
        note = chart.Get_Poss(i)[0]
        PosY = note.Get_Pos()[1];
        returnValue = notes[i].length;
        if (auto) {
            if (PosY >= -(hitRange / 120)) { // Aut0 hit range
                if (PosY <= (hitRange)) {
                    hitters[i].src = "Sprites/Notes/Hitter_Lit_1.png";
                    HitNote(PosY, HitErrorTime / 4, i, "rgb(135,206,235)");
                    IncreaseCombo(0)
                    setTimeout(function() {
                        hitters[i].src = "Sprites/Notes/Hitter_Unlit_1.png";
                    }, 16000 / (chart.map["BPM"] * rate));
                }
                return returnValue;
            }
        }
        if (NoteID == releasedIdProgress[i]) { // Uses releasedIdProgress so the id doesn't change until the hitter has been released
            if (PosY >= -(hitRange / 1.5)) {
                ABSY = Math.abs(PosY);
                if (ABSY <= (hitRange / JudgementRanges[0])) { // Perfect Plus hit range
                    if (keys[i]) {
                        HitNote(PosY, HitErrorTime, i, "rgb(135,206,235)");
                        IncreaseCombo(0)
                        return returnValue;
                    }
                }

                if (ABSY <= (hitRange / JudgementRanges[1])) { // Perfect hit range
                    if (keys[i]) {
                        HitNote(PosY, HitErrorTime, i, "rgb(155,206,215)");
                        IncreaseCombo(1)
                        return returnValue;
                    }
                }

                if (ABSY <= (hitRange / JudgementRanges[2])) { // Good hit range
                    if (keys[i]) {
                        HitNote(PosY, HitErrorTime, i, "rgb(175,206,195)");
                        IncreaseCombo(2)
                        return returnValue;
                    }
                }


                if (ABSY <= (hitRange / JudgementRanges[3])) { // Good hit range
                    if (keys[i]) { // Bad hit range
                        HitNote(PosY, HitErrorTime, i, "rgb(195,206,175)");
                        IncreaseCombo(3);
                        return returnValue;
                    }
                }

                if (keys[i]) { // Miss hit range
                    HitNote(PosY, HitErrorTime, i);
                    IncreaseCombo(4)
                    return returnValue;
                }
            }
        }
        if (PosY > (hitRange / 2)) { // If no notes are hit in any of the hit ranges the note misses
            HitNote(PosY, HitErrorTime, i);
            releasedIdProgress[i] = idProgress[i];
            IncreaseCombo(4)
            return returnValue;
        }
    }
}

// Creates hit error and removes a note
function HitNote(_PosY, _ErrorTime, _row, _color = "rgb(255,95,127)") {
    HitError(_PosY, _ErrorTime, _color); // Creates hit error
    RemoveNote(_row); // Removes note by row
}

// For score calculation
function IncreaseCombo(_id) {
    Judgements[_id]++; // For acc calculation
    switch (_id) {
        case 0:
            Combos[0]++;
            Combos[1]++;
            Combos[2]++;
            break;

        case 1:
            Combos[0] = 0;
            Combos[1]++;
            Combos[2]++;
            break;

        case 2:
            Combos[0] = 0;
            Combos[1] = 0;
            Combos[2]++;
            break;

        default:
            Combos[0] = 0;
            Combos[1] = 0;
            Combos[2] = 0;
            break;
    }
    for (let i = 0; i < Combos.length; i++) {
        const _combo = Combos[i];
        if (_combo > HighestCombos[i]) {
            HighestCombos[i] = _combo;
        }
    }
    document.getElementById("ComboText").innerText = "x" + Combos[2];
    document.getElementById("AccText").innerHTML = `${Math.round(Get_Acc(Judgements, JudgementWeights).toFixed(5) * 100000) / 1000}%`; // Shows user their accuracy
}