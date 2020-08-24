import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUser = (req, res) => {
    res.send(users);
}

export const getUserById = (req, res) => {
    const { id } = req.params;
    const result = users.find((user) => user.id === id);
    res.send(result);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuidv4() }; // menambahkan object(key&value) baru pada json dengan spread separator(bukan array)
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the Database!`);
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the Id ${id} deleted from the Database!`);
};

export const updateUserById = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the Id ${id} has been updated!`);
};