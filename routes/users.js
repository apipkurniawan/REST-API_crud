import express from 'express';

const router = express.Router();
const users = [
    {
        firstName: "Apip",
        lastName: "kurniawan",
        age: 28
    },
    {
        firstName: "Aah",
        lastName: "Siti Robiah",
        age: 27
    }
];

/* all routes in here are starting with /users */
// GET
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});
// POST


export default router;