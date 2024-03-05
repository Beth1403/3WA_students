import express from 'express'
const booksRouter = express.Router()

const books = [
    {id : 1, title : 'The Stand' , genre : 'science-fiction', author : "Stephen King"},
    {id : 2, title : 'Harry Potter', genre : 'fantastique', author : "J.K Rowling"},
    {id : 3, title :  'Lord of the Rings', genre : 'fantasy', author : "J.R.R Tolkien"},
    {id : 4, title : 'The Pillars of the Earth', genre : 'historique', author : "Ken Follett"},
]

booksRouter.get('/books', (req, res) => {
    res.render('books', {books})
})

booksRouter.get('/books/:id', (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id))
    res.json(book)
})

booksRouter.get('/addbook', (req, res) => {
    res.render('addbook')
})


booksRouter.post('/books', (req, res) => {
    console.log(req.body)
    const book = {
        id : books.length + 1,
        title : req.body.title,
        genre : req.body.genre
    }
    books.push(book)
    res.render('books', {books})
})


booksRouter.put('/books/:id', (req, res) => {
    let {id} = req.params
    const book = books.find(book => book.id === parseInt(id))
    book.title = req.body.title
    book.genre = req.body.genre
    res.json(book)
})

booksRouter.delete('/books/:id', (req, res) => {
    let {id} = req.params
    const book = books.find(book => book.id === parseInt(id))
    const bookId = books.indexOf(book)
    books.splice(bookId, 1)
    res.json('book has been deleted')
})

booksRouter.get('/bookDetail/:id', (req, res) => {
    const bookId = parseInt(req.params.id); 
    const book = books.find(book => book.id === bookId); 
  
    if (book) {
        res.render('bookDetail', { book });
    } else {       
        res.status(404).send('Book not found');
    }
});


export default booksRouter