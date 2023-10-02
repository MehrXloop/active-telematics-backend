const {Pool} = require("pg")

const pool = new Pool({
    user:"mehr",
    password:"Mehrfatima007",
    host:"localhost",
    port:5432,
    database:"userdb"

})
// const tblQuery = `CREATE TABLE adminaccounts (
//     admin_id serial PRIMARY KEY,
//     username VARCHAR (50) NOT NULL,
//     email VARCHAR (50) UNIQUE NOT NULL,
//     number INT NOT NULL,
//     password VARCHAR (50) NOT NULL);`;


// pool.query(tblQuery)
// .then((res)=>{
//     console.log("table created")
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


module.exports = pool;