#  Book Library (CRUD App)

A full-stack web application demonstrating **CRUD operations** (Create, Read, Update, Delete) using **Node.js**, **Express**, and **EJS**.  
 

# **Why this project matters:**  
This project showcases my ability to build a complete web application from scratch, covering both **frontend (HTML, CSS, EJS templates)** and **backend (Express routes, HTTP GET/POST requests)**. It highlights skills in server-side rendering, routing, form handling, and responsive UI design all core skills for full-stack or backend engineering roles.

---

##  Features
- **Home Page**: Displays all books in a responsive grid.  
- **Add Book**: Form to add a new book (title + author) and refresh Home.  
- **Update Book**: Update a book’s title/author by selecting its ID.  
- **Delete Book**: Delete the book with the highest ID after confirmation.  
- **Styling**: Consistent pastel theme, clean typography, responsive cards, and smooth animations.  

---

##  Installation & Setup



1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open in your browser:

   ```
   http://localhost:3000
   ```

---

##  Routes Overview

* `GET /` → Home page (list of all books)
* `GET /create` → Show Add Book form
* `POST /create` → Add book and redirect Home
* `GET /update` → Show Update form + current books
* `POST /update` → Update selected book and redirect Home
* `GET /delete` → Confirm deletion of highest ID book
* `POST /delete-highest-id` → Delete and redirect Home

---

##  Technologies

* **Backend**: Node.js, Express, HTTP
* **Frontend**: Html, CSS
* **Other**: Responsive design, form handling, server-side rendering

```

---



