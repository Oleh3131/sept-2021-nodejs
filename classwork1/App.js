const path = require('path');
const fs = require('fs');

// Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
//     дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell,
//     пізніше я вам покажуяк можна це обійти, але поки зробіть так


const firstTask=()=>{

    fs.writeFile(path.join(__dirname,'firstTask.txt'),'\nSOME DATA',(err)=>{
        if (err){
            console.log(err);
            throw err;
        }
    });
    fs.readFile(path.join(__dirname,'firstTask.txt'),'utf-8',(err,data)=>{
        if (err){
            console.log(err);
            throw err;
        }
        console.log(data);
    })
}

firstTask();






// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
//     старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли
// тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати
// і додати до назви префікс _new

