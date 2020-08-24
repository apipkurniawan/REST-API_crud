import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [
    // {
    //     firstName: "Apip",
    //     lastName: "kurniawan",
    //     age: 28
    // }
];

/* all routes in here are starting with /users */
// GET
router.get('/', (req, res) => {
    res.send(users);
});
// GET by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = users.find((user) => user.id === id);
    res.send(result);
});
// POST
router.post('/', (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuidv4() }; // menambahkan object(key&value) baru pada json dengan spread separator(bukan array)
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the Database!`);
});
// DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the Id ${id} deleted from the Database!`);
});
// PATCH
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the Id ${id} has been updated!`);
});


export default router;