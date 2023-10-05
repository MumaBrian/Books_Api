const {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
} = require('../controllers/bookController')
const express = require('express')
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')

const router = express.Router()
router
    .route('/')
    .post([authenticateUser], createBook)
    .get([authenticateUser, authorizePermissions('admin')],getAllBooks);
    
router
    .route('/:id')
    .get(getSingleBook)
    .patch([authenticateUser], updateBook)
    .delete([authenticateUser], deleteBook);


module.exports = router