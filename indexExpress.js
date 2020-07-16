const express = require("express")
const User = require("./models").user
const ToDoList = require("./models").toDoList
const cors = require("cors")

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

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

app.post(
    "/users/:userId/todolist",
    async (req, res, next) => {
        try{
            const userId = req.params.userId
            const user = await User.findByPk(userId)
            // console.log("user test", user)
            if(!user){
                res.status(404).send("User not found, enter valid ID")
            } else {
                const list = await ToDoList.create({userId, ...req.body})
                // console.log("new list test", list)
                res.send(list)
            }
                
            

        } catch(error){
            next(error)
        }
    }
)

app.delete(
    "/users/:userId/todolist/:todolistId",
    async (req, res, next) => {
        try{
            const listId = req.params.todolistId
            // console.log("list's ID test", listId)
            const listToDelete = await ToDoList.findByPk(listId)
            // console.log("what to delete test", listToDelete)
            if(!listToDelete){
                res.status(404).send("No lists matching")
            } else {
                const deletedList = await listToDelete.destroy()
                // console.log("destroying test", deletedList)
                res.status(204).send("list deleted")
            }

        } catch (error) {
            next(error)
        }
    }
)
app.put(
    "/users/:userId/todolist/:todolistId",
    async (req, res, next) => {
        try{
            const listId = req.params.todolistId
            // console.log("list ID test", listId)
            const updateList = await ToDoList.findByPk(listId)
            console.log("lists with id", updateList)
            if(!updateList){
                res.status(404).send("List not found")
            } else {
                const updatedList = await updateList.update(req.body)
                console.log("update test", updatedList)
                res.send(updatedList)
            }

        } catch(error){
            next(error)
        }
    }
)

app.get(
    "/users/:userId/todolists",
    async (req, res, next) => {
        try{
            const userId = req.params.userId
            const allToDo = await ToDoList.findByPk(userId, {
                include: [User]
            })
            // console.log("to do list test", allToDo)
            if(!allToDo){
                res.status(404).send("User's list(s) arent found, try entering valind ID's")
            } else {
                const plainAllToDo = allToDo.get({plain: true})
                // console.log("plain test before response", plainAllToDo)
                res.send(plainAllToDo)
            }
            
        } catch(error){
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
