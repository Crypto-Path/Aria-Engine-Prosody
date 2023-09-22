function showLetter(letter, font, size, xPos, yPos, lifeTime, fallSpeed, fade = false, fadeSpeed = 0) {
    var element = document.createElement('div');
    element.textContent = letter;
    element.style.position = 'absolute';
    element.style.fontFamily = font;
    element.style.fontSize = size + 'px';
    element.style.left = xPos + 'px';
    element.style.top = yPos + 'px';
    document.body.appendChild(element);

    setTimeout(function() {
        if (fade) {
            element.style.transition = 'opacity ' + fadeSpeed + 'ms, top ' + Math.abs(fallSpeed) + 'ms';
            element.style.opacity = '0';
        }

        element.style.top = (yPos + window.innerHeight) + 'px';
    }, lifeTime);
}