const express = require('express')
const path = require("path");
const app = express();

console.log(__dirname);

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.post("/api/v1/quiz",(req,res)=>{
  const answer = req.body.answer;
  if (answer === "2") {
    // res.send("正解です!!")
    res.redirect("/correct.html")
  } else {
    // res.send("不正解です！！");
    res.redirect("/wrong.html")
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("I'm running")
})