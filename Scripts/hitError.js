// Creates a hit error object, showing their offset, which fades over time
function HitError(_offset, _length, _color) {

    hitErrors.push([_offset, chart.Get_Audio_Time_Left(), _color])

    hitError = document.createElement("div"); // Creates the hit object visual
    hitError.classList.add("hitError"); // Adds the class for the CSS
    hitError.style.left = ((_offset * (128 / (hitRange)) + 64) / 9) * (window.innerWidth / 1920) + "rem"; // Sets the position

    hitError.style.backgroundColor = _color;
    hitError.style.opacity = "0.5";

    document.getElementById("HitErrorBar").appendChild(hitError) // Appedns the hit error object to the hit error bar

    // Fade the hit error over time
    let _object = hitError //document.getElementById("HitErrorBar").children[3]
    setTimeout(function() {
        _object.style.opacity = "0.5";
        setTimeout(function() {
            _object.style.opacity = "0.25";
            setTimeout(function() {
                _object.style.opacity = "0.2";
                setTimeout(function() {
                    _object.remove();
                }, _length / 8); // 125ms
            }, _length / 8); // 125ms
        }, _length / 4); // 250ms
    }, _length / 2); // 500ms
}

function Create_Result_Hit_Errors() {
    console.log("Creating Hit errors");
    for (let i = 0; i < hitErrors.length; i++) {
        if (i / 5 == Math.floor(i / 5)) {
            console.log("Progress: " + Math.round((i / Get_TotalNotes(Judgements)) * 100) / 100 + "%");
        }
        const _hitError = hitErrors[i];
        let _hitObject = document.createElement("div"); // Creates the hit object visual
        _hitObject.classList.add("hitError"); // Adds the class for the CSS
        _hitObject.style.top = (_hitError[0] * 18 + 5.66) + "rem"; // Sets the position
        _hitObject.style.left = (-(_hitError[1] * 100 / chart.Get_Audio_Length()) + 100) + "%"; // Sets the position
        _hitObject.style.height = "0.25rem";
        _hitObject.style.width = "0.25rem";
        _hitObject.style.position = "absolute";

        _hitObject.style.backgroundColor = _hitError[2];
        _hitObject.style.opacity = "0.75";

        document.getElementById("ResultErrorContainer").appendChild(_hitObject);
    }
    console.log("Progress: 100%");
}