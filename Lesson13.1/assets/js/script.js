// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.innerHTML = 'Ку-Ку, а я <b> Жирный <b> !';
// }

// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.innerHTML = '<h3> Ку-Ку, а я h3 ! <h3>';
// }

// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
// }

// function go(){
//     var input1 = +document.getElementById('input1').value;
//     var input2 = +document.getElementById('input2').value;
//     var result = document.getElementById('result');
//     result.innerHTML = input1 + input2;
// }


// function go(){
//     var elements = document.getElementsByTagName('p');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = 'Ку-ку!';
//     }
//
// function go() {
//     let elems = document.getElementsByClassName("www")
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].innerHTML = i + 1
//     }
// }

// function go() {
//     let elems = document.querySelectorAll(".www")
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].innerHTML = i + 1
//     }
// }


// function go(){
//     var test = document.getElementById('test');
//     alert(test.getAttribute('class'));
// }

// function go(){
//     var test = document.getElementById('test');
//     alert(test.getAttribute('class'));
// }
// function del(){
//     var test = document.getElementById('test');
//     test.removeAttribute('class');
//     alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!')
// }
// function go(){
//     var test = document.getElementById('test');
//     alert(test.getAttribute('class'));
// }
// function rem(){
//     var test = document.getElementById('test');
//     test.setAttribute('class', 'newclass');
//     alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
// }


// function go(elem){
//     var text = document.getElementById('text');
//     text.innerHTML = elem.value;
// }

// function go(){
//     var elements = document.getElementsByTagName('a');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = elements[i].innerHTML+' ('+elements[i].getAttribute('href')+')';
//     }
// }

// function go(elem){
//     elem.disabled  =  true;
//     elem.value  =  'О, на меня нельзя больше нажать!';
//     var test = document.getElementById('test');
//     test.innerHTML = 'Привет, мир!';
//     test.style.color  =  'red';
// }

// function go(){
//     var elements = document.getElementsByTagName('p');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = i;
//     }
// }

function go(){
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
    }
}
