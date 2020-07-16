const express = require("express")
const User = require("./models").user

const app = express()
const port = 4000

app.use(express.json())

app.post(
    "/users",
    async (req, res, next) => {
        try{
            const user = await User.create(req.body)
            res.json(user)

        }catch(error){
            next(error)
        }
    }
)

app.get(
    "/users/:userId",
    async (req, res, next) => {
        try{
            const urlId = req.params.userId
            // console.log("id test", urlId)
            
            const userSearch = await User.findByPk(urlId)
            // console.log("specific user test", userSearch)
            const plainUser = userSearch
                                ? userSearch.get({plain: true})
                                : "User not found, enter valid ID"

            // console.log("plain user test", plainUser)
            res.status(404).json(plainUser)


        } catch(error){
            next(error)
        }
    }
)

function onListen(){
    console.log(`Listening on port: ${port}`)
}

app.listen(
    port,
    onListen()
)
