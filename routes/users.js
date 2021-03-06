import express from 'express';
import { getUsers, createUser, getUserById, deleteUserById, updateUserById } from '../controllers/users.js';

const router = express.Router();

/* all routes in here are starting with /users */
// GET
router.get('/', getUsers);
// GET by ID
router.get('/:id', getUserById);
// POST
router.post('/', createUser);
// DELETE
router.delete('/:id', deleteUserById);
// PATCH
router.patch('/:id', updateUserById);


export default router;