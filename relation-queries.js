const {user, toDoList, toDoItem, tag} = require("./models")

async function listsWithUsers(){
    const lists = await toDoList.findAll({
        include: [user]
    })
    // console.log("lists including user test", lists)
    const plainLists = lists.map((list) => 
         list.get({
            plain: true
    }))
    // console.log("plain list test", plainLists)
}
// listsWithUsers()

async function oneUserAndList(userId){
    try{
        const uniqueUser = await user.findByPk(userId, {
            include: [toDoList]
        })
        // console.log("users test", uniqueUser)
        
        const plainUniqueUser = uniqueUser
                                    ? uniqueUser.get({plain: true})
                                    : "User not found try again"

        // console.log("plain test unique users", plainUniqueUser)

    } catch (error){
        console.log(error.message)
    }
}
// oneUserAndList(1)
async function importantItemsOnList(){
    try{
        const allItems = await toDoItem.findAll({
            include: {
                model: toDoList,
                attribute: ["name"]
            }
        })
        // console.log("Important items test", allItems)
        const importantItemsList = allItems.map((item) => 
            item.get({
                plain: true
            }))
        // console.log("plain important items", importantItemsList)

    } catch(error){
        console.log(error.message)
    }
}
// importantItemsOnList()
async function userNeedsToDo(userId){
    try{
        const specificUserItems = await user.findByPk(userId, {
            include: [
                {
                    model:toDoList,
                    attribute: ["name"],
                    include: {model: toDoItem, attribute:["task"]}
                }]
        })
        // console.log("specific user and list test", specificUserItems)
        
        return specificUserItems.get({plain: true})
        

    } catch(error){
        console.log(error.message)
    }
}
// userNeedsToDo(1).then(user => console.log(user))

async function findTags(){
    try{
        const allTagsWithItems = await toDoItem.findAll({
            include: {
                model: tag,
                attribute: ["title"]
            }
        })
        // console.log("all items test", allTagsWithItems)
        
        const plainAllTagsWithItems = allTagsWithItems.map((tag) =>
        tag.get({plain: true}))
        // console.log("plain test", plainAllTagsWithItems)

    } catch(error){
        console.log(error.message)
    }
} 
// findTags()