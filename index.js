import express from 'express'
const app = express()
const port = 3003
import path from 'node:path'
import booksRouter from './route/books.js'
import bodyParser from 'body-parser'


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views')); 

app.get('/', (req, res) => {
    res.render('home');
});


app.get('/', (req, res) => {
    res.render('home')
})

app.use('/', booksRouter)

app.listen(port, () => {
    console.log('Welcome to our first API using express')
})