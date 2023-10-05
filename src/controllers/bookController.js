const Book = require('../models/Book')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createBook = async (req, res) => {
    req.body.user = req.user.userId
    const book = await Book.create(req.body)
    console.log("ok:", req.body)
    console.log("okay:", req.user)

    res.status(StatusCodes.CREATED).json({ book })
}

const getAllBooks = async (req, res) => {
    const book = await Book.find({})
    res.status(StatusCodes.OK).json({ book })
}

const getSingleBook = async (req, res) => {
    const { id: bookId } = req.params
    const book = await Book.findOne({ _id: bookId })
     
    if (!book) {
        throw new CustomError.NotFoundError(`No book with id ${bookId}`)
    }
    res.status(StatusCodes.OK).json({ book })

}

const updateBook = async (req, res) => {
    const { id: bookId } = req.params
    const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
        new: true, runValidators: true
    })
    if (!book) {
        throw new CustomError.NotFoundError(`No book with id ${bookId}`)
    }
    res.status(StatusCodes.OK).json({ book })
}

const deleteBook = async (req, res) => {
    const { id: bookId } = req.params
    const book = await Book.findOne({ _id: bookId })
    console.log("book:",book)
    if (!book) {
        throw new CustomError.NotFoundError(`No book with id ${bookId}`)
    }
    await book.deleteOne()
    res.status(StatusCodes.OK).json({ msg: 'Book removed successfully' })

}



module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
}