
var path = require('path')
const httpsLocalhost = require("https-localhost")
const app = httpsLocalhost()

app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static(path.join(__dirname)));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.redirect()

var PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/regform',(req,res)=>{
    res.render('regform');
})

app.listen(PORT,(req,res)=>{
    console.log("app is running at port no : "+ PORT)
})