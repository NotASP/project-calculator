document.getElementById('result').addEventListener('click', function () {
    document.getElementById('inputField').value = eval(document.getElementById('inputField').value)
});

document.getElementById('1').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '1'
});

document.getElementById('2').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '2'
});

document.getElementById('3').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '3'
});

document.getElementById('4').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '4'
});

document.getElementById('5').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '5'
});

document.getElementById('6').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '6'
});

document.getElementById('7').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '7'
});

document.getElementById('8').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '8'
});

document.getElementById('9').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '9'
});

document.getElementById('0').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '0'
});

document.getElementById('+').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '+'
});

document.getElementById('-').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '-'
});

document.getElementById('*').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '*'
});

document.getElementById('/').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '/'
});

document.getElementById('.').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value + '.'
});

document.getElementById('delButton').addEventListener('click', function () {
    document.getElementById('inputField').value = ''
});

document.getElementById('backspaceButton').addEventListener('click', function () {
    document.getElementById('inputField').value = document.getElementById('inputField').value.substring(0, document.getElementById('inputField').value.length - 1)
});
