

'use strict';

var message=document.getElementByName('message');

function format()
{
    $.message.toLowerCase;      //нижний регистр
    $.trim(message);               // пробелы вначале и конце
    $.message.replace(/\s+/g," ");  //все множественные пробелы замена на 1 пробел
    $.message.replace(/\n+/g," ");   //перенос строки > в пробел
    
}

var input = $.message-field;
$.input.output = function
 {document.getElementByName('message').innerHTML=input.value};    //взял с интернета, "как сделать так чтоб текст сразу выводился"
  

$.message(format);                   //применить функцию format  к полю в которое вводим текст
$.output(input.message);                 // вывел в output поле отформатированный текст

console.log($.output)





//   var spacing = new spacing(/^\s+/g);  //какаято хрень из интернета которую я не понимаю
