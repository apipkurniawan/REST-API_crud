import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const users = [
    // {
    //     firstName: "Apip",
    //     lastName: "kurniawan",
    //     age: 28
    // },
    // {
    //     firstName: "Aah",
    //     lastName: "Siti Robiah",
    //     age: 27
    // }
];

/* all routes in here are starting with /users */
// GET
router.get('/', (req, res) => {
    res.send(users);
});
// POST
router.post('/', (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuidv4() }; // menambahkan object(key&value) baru pada json dengan spread separator(bukan array)
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the Database!`);
});
// GET by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = users.find((user) => user.id === id);
    res.send(result);
});


export default router;