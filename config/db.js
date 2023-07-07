require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// let query = "select * from posts;";
// // console.log("resp");
// pool.execute(query, function(err, result) {
//     if(err) throw err;
//     console.log("resp");
//     // let temp = JSON.parse(result);
//     console.log(result);
//     for(let i = result.length; i > 0; i--) {
//         console.log('r', result[i-1].id );
//     }

//     result.forEach((resp) => {
//         // console.log("resp");
//         console.log(resp);
//     });
// });

module.exports = pool.promise();
