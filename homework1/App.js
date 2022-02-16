const fs = require('fs');
const path = require('path');




// ДЗ:
//
//     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online,
// друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
//     але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)






fs.mkdir(path.join(__dirname, 'main'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
})

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
})

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
})

const onlineUsers = [
    {username: 'Roman', age: 26, city: 'Rivne'},
    {username: 'Igor', age: 30, city: 'Lviv'},
    {username: 'Sergio', age: 55, city: 'Mykolaiv'}
];

const inPersonUsers = [
    {username: 'Jon', age: 45, city: 'Ottawa'},
    {username: 'Boris', age: 12, city: 'London'},
    {username: 'Karl', age: 24, city: 'Paris'}
];


for (let onlineUser of onlineUsers) {
    for (let key in onlineUser) {
        fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'),
            `\n${key}:${onlineUser[key]}`,
            {flag: 'a'},
            (err) => {
                if (err) {
                    console.log(err);
                    throw err
                }
            });
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
            `\n${key}:${onlineUser[key]}`,
            {flag: 'a'},
            (err) => {
                if (err) {
                    console.log(err);
                    throw err
                }
            });
    }
}


for (let inPersonUser of inPersonUsers) {
    for (let key in inPersonUser) {
        fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
            `\n${key}:${inPersonUser[key]}`,
            {flag: 'a'},
            (err) => {
                if (err) {
                    console.log(err);
                    throw err
                }
            });
        fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'),
            `\n${key}:${inPersonUser[key]}`,
            {flag: 'a'},
            (err) => {
                if (err) {
                    console.log(err);
                    throw err
                }
            });
    }
}




