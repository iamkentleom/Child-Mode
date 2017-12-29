var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/shit|fuck|damn|bitch|crap|piss|dick|darn|cock|pussy|fag|asshole|bastard|slut|douche|faggot|cunt|arsehole|bollocks|ass|wth|wtf|bloody/gi, '****');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}