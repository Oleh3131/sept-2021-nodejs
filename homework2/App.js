const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const {urlencoded} = require("express");

//     ДЗ

// декілька ендпоінтів зробити

// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName,
//     email(унікальне поле), password, age, city
//     просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в
//     масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий
//     імейл не існує, якщо існує то редірект на еррор пейдж

// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам
//     їх фільтрувати по age і city

// 3. /user/:id сторінка з інфою про одного юзера

// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект


    // Необхідно розширити ваше ДЗ:
    //
    // - додайте ендпоінт /signIn який буде приймати email і password і
    // якщо все вірно то редірект на сторінку цього юзера
    //
    // * хто хоче складніше реалізуйте видалення користувача.
    // Кнопка повинна знаходитись на сторінці з інфою про одного юзера.
    // Після видалення редірект на "/users"


const users = [
    {
        firstname: 'Keelie',
        lastname: 'Best',
        email: 'jimyrem@mailinator.com',
        password: '4e5rer5ge4gr',
        age: '25',
        city: 'New York'
    },
    {
        firstname: 'Sheila',
        lastname: 'Woodard',
        email: 'boceb@mailinator.com',
        password: 'we4eewrbgf6r',
        age: '44',
        city: 'Madrid'
    },
    {
        firstname: 'India',
        lastname: 'Jacobs',
        email: 'muxiwy@mailinator.com',
        password: 'dwew4778wger',
        age: '25',
        city: 'Kyiv'
    }
]

const userIdMain = users.map((item, index) => {
    item.id = index + 1;
    return item;
});

console.log(userIdMain);

const app = express();

app.use(express.json());
// Потрібен щоб nodejs міг приймати файли з розширенням json

app.use(express.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


app.get('/login', (req, res) => {
    res.render('login');
})

app.get(`/signIn`,(req,res)=>{
    res.render('signIn');
})


app.get('/userExist', (req, res) => {
    res.render('userExist');
})

app.get('/notExist', (req, res) => {
    res.render('notExist');
})


app.get('/users', (req, res) => {

    if (req.query.city) {
        let userFilter = users.filter(user => user.city === req.query.city);
        return res.render('users', {users: userFilter});

    }
    if (req.query.age) {
        let userFilter = users.filter(user => user.age === req.query.age);
        return res.render('users', {users: userFilter});

    }

    res.render('users', {users});
    // Передаємо другим компонентом наш масив users ----> ({users})

})

app.get('/users/:userId', (req, res) => {

    const filter = users.filter(user => user.id === +req.params.userId);

    res.json({filter});

});

app.post("/signIn",(req,res)=>{

    const signInUser = users.filter(user => user.email === req.body.email && user.password === req.body.password);

    if (signInUser){

        return res.render('users', {users: signInUser});

    }

    res.redirect('/notExist');

})


app.post('/login', (req, res) => {

    const findUser = users.find(user => user.email === req.body.email);

    if (findUser) {

        res.redirect('/userExist')

        return;
    }

    users.push(req.body)
    // Всі дані які заносимо у форму будемо пушити у наш масив

    res.redirect('/users');
    // При відправці форми вона нас перенаправляє на сторінку /users котра відмальовує наш масив
    // і запушує в себе те, що ми тільки що передали у формі.

})

app.use((req, res) => {
    res.render('notFound')
});

app.listen(5800, () => {
    console.log('Server has started');
})