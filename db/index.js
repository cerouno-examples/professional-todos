import Sequelize from 'sequelize';

const db = new Sequelize('null', 'null', 'null', {
  dialect: 'sqlite',
  storage: './db/db.sqlite'
});

export default db;
