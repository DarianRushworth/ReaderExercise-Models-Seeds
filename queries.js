const Users = require("./models").user
// console.log("users test", Users)
const ToDoItems = require("./models").toDoItem
// console.log("items test", ToDoItems)

async function FindUsers(){
    try{
        const allUsers = await Users.findAll()
        // console.log("all users test", allUsers)
        
        const PlainAllUsers = allUsers.map(user =>
            user.get({plain: true}))
            // console.log("Plain user test", PlainAllUsers)
    
        } catch(error) {
        console.log(error.message)
    }
}
// FindUsers()

async function findItems(){
    try{
        const AllToDoItems = await ToDoItems.findAll()
        // console.log("all items test", AllToDoItems)
        
        const PlainToDoItems = AllToDoItems.map(item => 
           item.get({plain: true}))
        // console.log("all items test", PlainToDoItems)
    
    } catch(error){
        console.log(error.message)
    }
}
// findItems()

async function PkFinder(userId){
    try{
        const firstUser = await Users.findByPk(userId)
        // console.log("pk test", firstUser)
        const PlainFirstUser = firstUser
                                ? firstUser.get({plain: true})
                                : "Not found, please try viable ID"
        // console.log("plain PK test", PlainFirstUser)


    } catch(error){
        console.log(error.message)
    }
}
// PkFinder(18)  

// async function CreateUser(){
//     try{
//         const newUser = await Users.create({
//             name: "Jack Matthews",
//             email: "jackAttack@gmail.com",
//             phone: 87542
//         })

//     } catch(error){
//         console.log(error.message)
//     }
// }
// CreateUser()

async function ImportantItemsToDo(){
    try{
        const importantItems = await ToDoItems.findAll({
            where:{
                important: true
            }
        })
        console.log("are these important?", importantItems)
        const PlainImportantItems = importantItems.map(item =>
            item.get({plain: true}))
            console.log("PLain item test", PlainImportantItems)
    } catch(error){
        console.log(error.message)
    }
}
ImportantItemsToDo()