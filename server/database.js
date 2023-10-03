const {Pool} = require("pg")

const pool = new Pool({
    user:"postgres",
    password:"Mehrfatima007",
    host:"localhost",
    port:5432,
    database:"admin"

})
// const tblQuery = `CREATE TABLE adminaccounts (
//     admin_id serial PRIMARY KEY,
//     username VARCHAR (50) NOT NULL,
//     email VARCHAR (50) UNIQUE NOT NULL,
//     number VARCHAR NOT NULL,
//     password VARCHAR (50) NOT NULL);`;


//create table for ip_address
// const tblIpQuery = `CREATE TABLE ip_address (
//     ip_id serial PRIMARY KEY,
//     ipaddress VARCHAR NOT NULL);`;

// pool.query(tblIpQuery)
// .then((res)=>{
//     console.log("table created")
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



module.exports = pool;