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

---
### Home Page
![Home Page](<img width="427" height="263" alt="image" src="https://github.com/user-attachments/assets/96c024d3-ca00-4527-ad47-75ef496278e8" />)

### Add New Book
![Create Page](<img width="409" height="256" alt="image" src="https://github.com/user-attachments/assets/5d9199c8-42cb-481f-97df-e4078c9ee520" />
)

### Update Book
![Update Page](<img width="416" height="282" alt="image" src="https://github.com/user-attachments/assets/da9b10a0-89de-47b7-8533-2f0227485ee4" />
)

### Delete Book
![Delete Page](<img width="430" height="286" alt="image" src="https://github.com/user-attachments/assets/9e3330bb-51cc-49c0-bc81-3d3101e52f4a" />
)



