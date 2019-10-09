export default function printMe() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'from', 'print.js'], ' ');
    console.log('I get called from print.js!');
    document.body.appendChild(element);
}