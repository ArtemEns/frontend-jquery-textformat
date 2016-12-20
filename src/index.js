'use strict';

var message = $('.message-field');
var formatted = $('.message-formatted');

function reFormed()
 {
    var reformedText = message.val()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\n+/g, " ");
    formatted.text(reformedText);
}

message.on('input', reFormed);