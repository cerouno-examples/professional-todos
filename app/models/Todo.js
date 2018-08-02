import Sequelize from 'sequelize';
import db from 'db';

const Todo = db.define('todos', {
  name: { type: Sequelize.STRING },
  done: { type: Sequelize.BOOLEAN }
});

Todo.sync();

export default Todo;
