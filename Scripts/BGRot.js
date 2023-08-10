function Set_BG_Rotation(_index, _set = true) {
    if (_set) {
        let v = 0
        switch (_index) {
            case 0:
                v = -document.getElementById("OptionRIL").value;
                break;
            case 1:
                v = -document.getElementById("OptionRIS").value;
                break;
            case 2:
                v = document.getElementById("OptionRIS").value;
                break;
            case 3:
                v = document.getElementById("OptionRIL").value;
                break;
            default:
                break;
        }
        rotation[_index] = v;
        return;
    }
    rotation[_index] = 0;
}

function BG_Rotate() {
    let _r = 0 // Rotation
    for (let i = 0; i < rotation.length; i++) {
        _r += rotation[i] / 4;
    } // Finds average rotation amount
    if (Math.round(rotateProgress) != Math.round(_r)) { // To avoid wiggling
        if (rotateProgress < _r) { // If rotation is smaller
            rotateProgress += 0.1;
        } else { // If rotation is larger
            rotateProgress -= 0.1;
        }
    }
    document.getElementById("BGPattern").style.transform = "rotate(" + rotateProgress + "deg)";
    document.getElementById("BGCenter").style.transform = "rotate(" + rotateProgress * 3 + "deg)";
}