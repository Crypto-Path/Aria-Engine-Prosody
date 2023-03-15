function Get_TotalNotes(_judgements) {
    let _totalNotes = 0
    for (let i = 0; i < _judgements.length; i++) { _totalNotes += _judgements[i]; } // Gets total notes
    return _totalNotes;
}

// Returns accuracy of play
function Get_Acc(_judgements, _judgementsWeights) {
    let _weight = 0; // The weight of all the notes combined to calculate the accuracy
    let _acc = 0; // The accuracy
    for (let i = 0; i < _judgementsWeights.length; i++) { _weight += _judgements[i] * _judgementsWeights[i]; } // Gets weight of play
    _acc = Get_TotalNotes(_judgements) / _weight; // Calculates accuracy
    return _acc; // Returns accuracy
}

//Gets
function Get_Score(_judgements, _judgementsWeights, _combosHighest) {
    let _totalNotes = Get_TotalNotes(_judgements);
    let _hitNotes = 0;
    for (let i = 0; i < Judgements.length-1; i++) { _hitNotes += Judgements[i]; }
    let _HighestPP = _combosHighest[0] / _totalNotes;
    let _HighestP = _combosHighest[1] / _totalNotes;
    let _HighestC = _combosHighest[2] / _totalNotes;

    let _score = Math.sqrt(
        Math.sqrt(
            Math.sqrt(
                Math.sqrt(
                    Math.sqrt(
                        _HighestPP
                    )
                ) * Math.sqrt(
                    _HighestP
                ) * _HighestC
            )
        ) *  Get_Acc(_judgements, _judgementsWeights) * (
            _hitNotes / _totalNotes
        )
    ) * (
        1000000 - _totalNotes
    ) + Judgements[0]; // Score calculation...

    return _score;
}