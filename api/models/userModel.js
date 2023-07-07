const db = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// require("dotenv").config(); // just in case

class Users {
  constructor() {}

  getCurrentDate() {
    const date = new Date();

    const currentDay = String(date.getDate()).padStart(2, "0");

    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    const currentYear = date.getFullYear();

    const tempcurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    return tempcurrentDate;
  }

  async createNewUser(firstname, lastname, email, imgurl, password) {
    const currentDate = this.getCurrentDate();

    const query1 = `SELECT email FROM tbl_users WHERE email= '${email}' ;`;
    const [tempdata1, _] = await db.execute(query1);

    if (tempdata1.length === 0) {
      // hasing starts....
      //   bcrypt.hash(password, 7, async (err, hash) => {
      //     if (err) {
      //       return res.status(500).json({
      //         message: "Error Occured while hashing",
      //       });
      //     } else {
      //       const query = `INSERT INTO tbl_users(first_name, last_name, email, password, creation_time, created_by )
      //         VALUES('${firstname}','${lastname}', '${email}' , '${hash}', '${currentDate}' , '${0}' )`;

      //       const [data1, _] = await db.execute(query);
      //       return data1;
      //     }
      //   });

      const query = `INSERT INTO tbl_users(first_name, last_name, email, password, creation_time, created_by )
         VALUES('${firstname}','${lastname}', '${email}' , '${password}', '${currentDate}' , '${0}' )`;

      const [data, _] = await db.execute(query);
      return data;
    } else {
      let err = {
        message: "email already exists",
      };
      return err;
    }
  }

  async login(email, pass) {
    const query1 = `SELECT * FROM tbl_users WHERE email= '${email}' ;`;
    const [userdata, _] = await db.execute(query1);

    if (userdata.length === 0) {
      let err = {
        message: "email Doesnot exists, please sign up first",
      };
      return err;
    } else {
      const passwordAuth = await bcrypt.compare(pass, userdata[0].password);

      if (passwordAuth) {
        const token = jwt.sign(
          {
            email: userdata[0].email,
            userID: userdata[0].id,
          },
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: "1h" }
        );

        // console.log("KEY - ", process.env.JWT_PRIVATE_KEY);
        return { message: "Auth success", token: token };
      } else {
        return { message: "Incorrect Password, Auth Failed!" };
      }
      // return abc;
    }
  }
}

module.exports = Users;
