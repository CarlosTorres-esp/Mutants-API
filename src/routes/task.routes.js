import { Router } from 'express';

const router = Router();

//Database connection
import { connect } from '../database.js'

router.get('/', async(req, res) => {
    console.log('Entre')
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result)
    res.send('Tasks')
});

router.post('/', async(req, res) => {
    const db = await connect();
    console.log(req.body);
    res.send('Task created');
});


export default router;