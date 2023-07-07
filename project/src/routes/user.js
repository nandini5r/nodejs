import  express  from 'express';
import Controller from '../controllers/userController.js'

const app =express.Router();
app.get('/users', Controller.getAllUsers);

// GET request to retrieve a specific user
app.get('/users/:userId', Controller.getUsersById);

// POST request to create a new user
app.post('/users',Controller.createUser);

// PUT request to update a user
app.put('/users/:userId', Controller.updateUser);

// DELETE request to delete a user
app.delete('/users/:userId',Controller.deleteUser);


export default app;