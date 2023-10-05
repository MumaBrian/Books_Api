const express = require('express');
const router = express.Router();

const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

const {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  deleteUser
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.delete('/logout', authenticateUser, logout);
router.delete('/:id', authenticateUser, authorizePermissions('admin') ,deleteUser);
router.post('/verify-email', verifyEmail);
router.post('/reset-password', resetPassword);
router.post('/forgot-password', forgotPassword);

module.exports = router;
