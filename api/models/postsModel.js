const db = require("../../config/db");

class Posts {
  constructor() {}

  async save(title, body) {
    // Date object
    const date = new Date();

    const currentDay = String(date.getDate()).padStart(2, "0");

    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    const currentYear = date.getFullYear();

    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    // eslint-disable-next-line max-len
    const sql9 = `INSERT INTO posts(title, body, created_at ) VALUES('${title}' , '${body}' ,'${currentDate}')`;

    // eslint-disable-next-line no-unused-vars
    const [data, _] = await db.execute(sql9);
    return data;
  }

  async getall() {
    const query = "select * from posts;";
    // this db.execute also returns buffer value
    const [data, _] = await db.execute(query);
    return data;

    // return db.execute(query);
  }

  async getById(id) {
    // const query = 'select * from posts where id = '+ id + ' ;';
    const query2 = `select * from posts where id = ${id} ;`;
    const [data, _] = await db.execute(query2);
    return data;
  }

  async createNewWithImg(title, body, path) {
    const date = new Date();

    const currentDay = String(date.getDate()).padStart(2, "0");

    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    const currentYear = date.getFullYear();

    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const path2 = path.toString();

    // eslint-disable-next-line max-len
    const query2 = `INSERT INTO posts(title, body, created_at , imgurl ) VALUES('${title}' , '${body}' ,'${currentDate}', '${path2}')`;

    // const query2 = `select * from posts where id = ${id} ;`;
    const [data, _] = await db.execute(query2);
    return data;
  }
}

module.exports = Posts;
