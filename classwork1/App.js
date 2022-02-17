const fs = require('fs');
const path = require('path');

// Завдання на практику

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
//     дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
//     як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку
// та файл в ній, старий файл видаліть після того як все завершиться.
//     Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані
// які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки,
//     вам потрібно їх перейменувати і додати до назви префікс _new


fs.mkdir(path.join(__dirname, 'ThirdTask'), (err) => {
    if (err) {
        console.log(err);
    }
    fs.mkdir(path.join(__dirname, 'ThirdTask', 'ThirdTaskNext'), (err) => {
        if (err) {
            console.log(err);
        }
        fs.writeFile(path.join(__dirname, 'ThirdTask', 'thirdTask.txt'), `\nTHIRD TASK INFO`, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    })
});


function directory() {

    fs.readdir(path.join(__dirname, 'ThirdTask'), (err, data) => {
        if (err) {
            console.log(err);
        } else if (data.isFile()) {
            fs.appendFile(path.join(__dirname, 'ThirdTask', `${data}`), '', (err) => {
                if (err) {
                    console.log(err);
                    throw err
                }
            })
        } else if (data.isDirectory()) {
            fs.rename(path.join(__dirname, 'ThirdTask', `${data}`), path.join(__dirname, 'ThirdTask', `New_${data}`), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }

    })


}


directory();

// stats.isFile()
// stats.isDirectory()
// stats.isBlockDevice()
// stats.isCharacterDevice()
// stats.isSymbolicLink() // (only valid with fs.lstat())
// stats.isFIFO()
// stats.isSocket()