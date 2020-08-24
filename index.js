import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
import { getHomePage } from './controllers/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', getHomePage);

app.listen(PORT, () => { console.log(`server running on port: http://localhost:${PORT}`) });