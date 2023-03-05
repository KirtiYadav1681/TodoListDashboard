const express =  require('express');
const app = express();

const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

require("./db_connect");
const todo = require("./routes/todo");

app.use(express.json({ extended: false }));

app.use("/api/todo", todo)
  
app.listen(8000, ()=>{
    console.log('Server running at http://localhost:8000/');
});