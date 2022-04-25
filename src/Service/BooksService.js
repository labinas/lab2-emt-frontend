import axios from '../axios'

const BooksService = {
    fetchAllBooks: () =>{
        return axios.get("/book/all")
    },

    fetchBook: (id) =>{
        return axios.get(`/book/${id}`)
    },

    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/book", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        })
    },

    updateBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/book/${id}`, {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        })
    },

    deleteBook: (id) => {
        return axios.delete(`/book/${id}`)
    },

    fetchCategories: () => {
        return axios.get("/book/categories")
    }

}

export default BooksService;