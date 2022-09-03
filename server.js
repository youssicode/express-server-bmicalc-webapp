// importing Express Package
const express = require("express")
// Declaring a variable that represent the 'body-parser' package
const bodyParser = require("body-parser")

// Declaring app variable as Express method (best practice)
const app = express()

// allow the server to read static file like the css file (without this bmiCalcStyle.css can not be read)
app.use(express.static(__dirname))

// "body-parser" package will parses the http request into: text (app.use(bodyParser.text) or json (app.use(bodyParser.json) or ...
app.use(bodyParser.urlencoded({ extended: true })) // extended: true = accept nested object

// Define a port to our server
app.listen(3000, function() {
    console.log("server activated on port 3000.")
})

// Determin the response to the homepage route (/) request(here file to send to the client after its request http://localhost:3000/ for expl)
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html") // __dirname = return the directory/folder that contain the actual file
})

// Determin the response to the '/bmiCalculator.html' route request(here file to send to the client after its request http://localhost:3000/bmiCalculator.html for expl)
app.get("/bmiCalculator.html", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html") 
})

// Determin the response to the /bmiCalculator.html page's form submit (here a result of the calculation)
app.post("/", function(req, res) {
    let reqData = req.body
    let bmiResult = Number(reqData['weight-name']) + Number(Math.pow(reqData['height-name'],2))
     res.send("Your BMI is: " + bmiResult)
})