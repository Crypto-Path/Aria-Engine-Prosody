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
    _acc = (Get_TotalNotes(_judgements) - _judgements[4]) / _weight; // Calculates accuracy
    return _acc; // Returns accuracy
}

//Gets
function Get_Score(_judgements, _judgementsWeights, _combosHighest, _diffiiculty) {
    let _totalNotes = Get_TotalNotes(_judgements);
    let _hitNotes = 0;
    for (let i = 0; i < Judgements.length - 1; i++) { _hitNotes += Judgements[i]; }
    let _HighestPP = _combosHighest[0];
    let _HighestP = _combosHighest[1];
    let _HighestC = _combosHighest[2];

    let _PPScore = ((_HighestPP + Judgements[0]) / 1) * _diffiiculty;
    let _PScore = ((_HighestP + Judgements[1]) / 10) * _diffiiculty;
    let _CScore = ((_HighestC + Judgements[2]) / 100) * _diffiiculty;
    let _HScore = ((_hitNotes + Judgements[3]) / 1000) * _diffiiculty;
    console.log(_diffiiculty)
    console.log(_PPScore);
    console.log(_PScore);
    console.log(_CScore);
    console.log(_HScore);

    let _score = (_PPScore + _PScore + _CScore + _HScore); // Score calculation...

    return _score;
}

function Get_Value(_judgements, _judgementsWeights, _combosHighest, _chart, _diff, _rate) {
    Acc = Get_Acc(_judgements, _judgementsWeights) * 100;
    console.log(_chart)
    ChartDiff = calculateDifficulty(_chart, _diff, _rate);
    Value = ChartDiff * Math.pow(Acc / 95, 3);
    return Value;
}