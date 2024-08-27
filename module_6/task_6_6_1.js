const palindrom = prompt('Введите слово или словосочетание');
let unPalindrom = '';

for (let i = palindrom.length - 1; i >= 0; i -- ) {
    unPalindrom += palindrom[i];
}

if (palindrom.trim().toLowerCase() === unPalindrom.trim().toLowerCase()) {
    alert(`Слово ${palindrom.trim()} является палиндромом`);
} else {
    alert(`Слово ${palindrom.trim()} не является палиндромом`);
}