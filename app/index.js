import express from 'express';
import bodyParser from 'body-parser';
import Todo from 'app/models/Todo';

const app = express();

app.get('/todos.json', (req, res) => {
  Todo.findAll().then(todos => {
    res.send(todos);
  });
});

app.get('/todos/:id.json', (req, res) => {
  Todo.find({ where: { id: req.params.id} }).then(todo => {
    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.post('/todos.json', (req, res) => {
   Todo.create({
     name: req.body.name
   }).then(todo => res.send(todo));
});

app.put('/todos/:id.json', (req, res) => {
   Todo.find({
     where: {
       id: req.params.id,
     }
   }).then(todo => {
     if (todo) {
       return todo.update(...body);
     } else{
       res.status(404).send('Not Found');
     }
   }).then(todo => res.send(todo));
});

app.listen(3000, () => console.log('[Corriendo Servidor] http://localhost:3000'));
