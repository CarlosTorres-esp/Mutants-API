import express from 'express';

const app = express();

//Routes
import IndexRoutes from '../src/routes/index.routes.js';
import TaskRoutes from '../src/routes/task.routes.js';

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());

//Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

//Call the mutant controller
const mutantController = require('./mutant/controllers/mutantController');
router.post('/mutant', mutantController.isMutant);
router.get('/stats', mutantController.stats);


export default app;