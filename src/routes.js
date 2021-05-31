const { 
    addBookHandler, 
    getAllBooksHandler, 
    getBookByIdHandler, 
    editBookByIdHandler, 
    deleteBookById 
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },

    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },

    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },

    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookById,
    },

    {
        method: '*',
        path: '/{any*}',
        handler: () => 'Halaman tidak ditemukan'
    }
]

module.exports = routes;