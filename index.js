
const express=require('express');
const moment = require('moment');
const mysql = require('mysql');
const cors=require('cors');

const app=express();
const PORT=3000|process.env.PORT;



app.use(express.json()); 
app.use(cors());
// create the connection to database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password:"ROHIT"
});

conn.connect((err)=>{
          if(err)console.log(err);
        }
);
/*
conn.query(
  'create table todo(id int auto_increment, task varchar(255), date datetime, primary key(id))',
  (err, results, fields) =>{
    if(err)console.log(err);
  }
);*/


app.post("/add",(req,res)=>{
  const time=moment().format("MMMM Do, h:mm:ss a");
  const addtodo={ 
    task:req.body.task,
    date:time
  };

  conn.query(
  'insert into todo set ?',addtodo,
  (err, results)=>{
    if(err)res.send("error: "+err);
    res.send("added");
  });
  

});

app.delete("/delete",(req,res)=>{
  const task_=req.body.task;
  conn.query(
  'delete from todo where task= ?',task_,
  (err, results)=>err?res.send("error: "+err):res.send("deleted"));
});


app.get('/',(req,res)=>{
     conn.query(
       'SELECT * FROM todo',
     (err, results)=>err?res.send("error: "+err):res.send(results));
});


app.listen(PORT,()=>console.log("running"));
