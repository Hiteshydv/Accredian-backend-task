import mysql from "mysql2"

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "hitesh123",
    database: "mydb"
  });
  
