const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory book storage (in real app, use database)
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

let nextId = 4;

// Routes

// Home route - Display all books
app.get('/', (req, res) => {
    console.log('=== CURRENT BOOKS IN DATABASE ===');
    console.log('Total books:', books.length);
    books.forEach(book => {
        console.log(`ID: ${book.id}, Title: "${book.title}", Author: "${book.author}"`);
    });
    console.log('=====================================');
    res.render('home', { books: books });
});

// Show create form
app.get('/create', (req, res) => {
    console.log(' CREATE FORM - User accessing create new book form');
    res.render('create');
});

// Add new book (POST)
app.post('/create', (req, res) => {
    const { title, author } = req.body;
    
    console.log(' CREATE BOOK REQUEST RECEIVED');
    console.log('Form data received - Title:', title, 'Author:', author);
    
    if (title && author) {
        const newBook = {
            id: nextId++,
            title: title.trim(),
            author: author.trim()
        };
        books.push(newBook);
        console.log(' SUCCESS: Book added to database!');
        console.log('New book details:', newBook);
        console.log('Total books now:', books.length);
    } else {
        console.log(' ERROR: Missing title or author data');
    }
    
    console.log(' Redirecting to home page...\n');
    res.redirect('/');
});

// Show update form
app.get('/update', (req, res) => {
    console.log(' UPDATE - User accessing update form');
    console.log('Available books for update:', books.map(b => `ID: ${b.id} - ${b.title}`));
    res.render('update', { books: books, book: null });
});

// Update book (POST)
app.post('/update', (req, res) => {
    const { bookId, title, author } = req.body;
    const id = parseInt(bookId);
    
    console.log(` UPDATE BOOK REQUEST RECEIVED for ID: ${id}`);
    console.log('Form data received - Book ID:', id, 'New Title:', title, 'New Author:', author);
    
    if (!id || isNaN(id)) {
        console.log(' ERROR: Invalid or missing ID');
        return res.redirect('/update');
    }
    
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        const oldBook = { ...books[bookIndex] };
        books[bookIndex].title = title.trim() || books[bookIndex].title;
        books[bookIndex].author = author.trim() || books[bookIndex].author;
        
        console.log(' SUCCESS: Book updated!');
        console.log('Old details:', oldBook);
        console.log('New details:', books[bookIndex]);
    } else {
        console.log(` ERROR: Book with ID ${id} not found`);
    }
    
    console.log(' Redirecting to home page...\n');
    res.redirect('/');
});

// Show delete confirmation
app.get('/delete/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    console.log(` DELETE FORM - User accessing delete confirmation for book ID: ${bookId}`);
    const bookToDelete = books.find(book => book.id === bookId);
    if (bookToDelete) {
        console.log('Book found for deletion:', bookToDelete);
    } else {
        console.log(' Book not found with ID:', bookId);
    }
    res.render('delete', { book: bookToDelete });
});

// Alternative delete route (for highest ID)
app.get('/delete', (req, res) => {
    console.log(' DELETE FORM - User accessing delete confirmation for highest ID book');
    if (books.length > 0) {
        const highestId = Math.max(...books.map(book => book.id));
        const bookToDelete = books.find(book => book.id === highestId);
        console.log(`Highest ID found: ${highestId}`);
        console.log('Book to delete:', bookToDelete);
        res.render('delete', { book: bookToDelete });
    } else {
        console.log(' No books available to delete');
        res.render('delete', { book: null });
    }
});

// Delete book with highest ID (POST) - matching your terminal route
app.post('/delete-highest-id', (req, res) => {
    console.log(' DELETE HIGHEST ID BOOK REQUEST RECEIVED');
    
    if (books.length > 0) {
        const highestId = Math.max(...books.map(book => book.id));
        const bookIndex = books.findIndex(book => book.id === highestId);
        
        if (bookIndex !== -1) {
            const deletedBook = books.splice(bookIndex, 1)[0];
            console.log('SUCCESS: Book deleted!');
            console.log('Deleted book details:', deletedBook);
            console.log('Remaining books:', books.length);
        } else {
            console.log(' ERROR: Could not find book to delete');
        }
    } else {
        console.log(' ERROR: No books available to delete');
    }
    
    console.log(' Redirecting to home page...\n');
    res.redirect('/');
});

// Delete specific book (POST)
app.post('/delete/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    console.log(` DELETE BOOK REQUEST RECEIVED for ID: ${bookId}`);
    
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1)[0];
        console.log(' SUCCESS: Book deleted!');
        console.log('Deleted book details:', deletedBook);
        console.log('Remaining books:', books.length);
    } else {
        console.log(` ERROR: Book with ID ${bookId} not found`);
    }
    
    console.log(' Redirecting to home page...\n');
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});