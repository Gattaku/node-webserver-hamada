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

// app.get('/', function (req, res) {
//   res.send('<h1>トップページ</h1>')
// })

// app.get('/about', function (req, res) {
//   res.send('Aboutページ')
// })

// app.get('/api/v1/users', function (req, res) {
//   res.send({
//     name:"Mike",
//     age:30,
//     hobby:"baseball"
//   })
// })
app.listen(3000,()=>{
  console.log("I'm running")
})