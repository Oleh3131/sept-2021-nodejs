import express, { Request, Response } from 'express';
import { users } from './users';

const app = express();

app.get('/', (req:Request, res:Response) => {
    console.log(users);
    res.end(2);
});

app.listen(5800, () => {
    console.log('Server has started !');
});
