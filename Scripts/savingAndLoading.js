function SaveOptions() {
    scrollSpeed = Math.abs(document.getElementById("OptionScrollSpeed").value) * (document.getElementById("OptionUpscroll").checked ? -1 : 1);
    document.getElementById("EverythingContainer").style.left = document.getElementById("OptionPlayfieldXOffset").value + "rem";

    localStorage['Upscroll'] = document.getElementById("OptionUpscroll").checked;
    localStorage['ScrollSpeed'] = scrollSpeed;
    localStorage['MapXOffset'] = document.getElementById("OptionPlayfieldXOffset").value;

    localStorage['KeyBinding1'] = document.getElementById("KeyCheck1").value;
    localStorage['KeyBinding2'] = document.getElementById("KeyCheck2").value;
    localStorage['KeyBinding3'] = document.getElementById("KeyCheck3").value;
    localStorage['KeyBinding4'] = document.getElementById("KeyCheck4").value;

    document.getElementById("OptionScrollSpeed").value = Math.abs(localStorage['ScrollSpeed']);
    document.getElementById("OptionPlayfieldXOffset").value = localStorage['MapXOffset'];
    UpdateScrollDirection();
}

// Loads settings from localStorage
function LoadSettings() {
    if (localStorage["ScrollSpeed"] != null) // Makes sure scroll speed was saved
        document.getElementById("OptionScrollSpeed").value = localStorage["ScrollSpeed"];
        
    if (localStorage["MapXOffset"] != null) // Makes sure map x offset was saved
        document.getElementById("OptionPlayfieldXOffset").value = localStorage["MapXOffset"];

    if (localStorage["Upscroll"] == 'true') // Makes sure upscroll was saved
        document.getElementById("OptionUpscroll").checked = true;

    if (!isNaN(localStorage['KeyBinding1'])) // Makes sure key binding 1 was saved
        document.getElementById("KeyCheck1").value = localStorage['KeyBinding1'];
        
    if (!isNaN(localStorage['KeyBinding2'])) // Makes sure key binding 2 was saved
        document.getElementById("KeyCheck2").value = localStorage['KeyBinding2'];
        
    if (!isNaN(localStorage['KeyBinding3'])) // Makes sure key binding 3 was saved
        document.getElementById("KeyCheck3").value = localStorage['KeyBinding3'];
        
    if (!isNaN(localStorage['KeyBinding4'])) // Makes sure key binding 4 was saved
        document.getElementById("KeyCheck4").value = localStorage['KeyBinding4'];
        
    // Assigns keybindings to what was saved
    hitKeys = [ 
        parseInt(document.getElementById("KeyCheck1").value),
        parseInt(document.getElementById("KeyCheck2").value),
        parseInt(document.getElementById("KeyCheck3").value),
        parseInt(document.getElementById("KeyCheck4").value)
    ];
}