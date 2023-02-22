const express = require("express")
const bodyParser = require("body-parser")
// const request = require("request") --> This might be needed in the future.
const https = require("https")

// The WebDeb Course that I'm following is a bit old and this is why I'm not sure that everything will be needed

const app = express()

app.use(express.static(__dirname));
// app.use(express.static("public")); --> This might be needed at some point.
// This is how Angela has done, but I had to change it to __dirname to make it work properly.

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function (req, res) {

    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    const data = {
        members: [
            {
                email_address: email, 
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)

    const url = 

    https.request(url, option, function(response) {

    })


})

app.listen(3000, function() {
    console.log("Server Running on port 3000")
})

// API KEY
// c5bfe0949a6d7b618022b8658d3e9c46-us17