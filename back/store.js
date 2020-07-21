const { ObjectId } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const options =  { useUnifiedTopology: true }
const url = "mongodb://localhost:27017/"
const DB_NAME = "mydb"
const USERS_COLLECTION = "users"


var mongoConnect = (callback) => {
    MongoClient.connect(url, options, function(err, db) {
        if (err) throw err
        var dbo = db.db(DB_NAME)
        callback(dbo, () => db.close())
    });
}

function allUsers (callback) {
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).find({}).toArray(function(err, result) {
            if (err) throw err
            close()
            callback(result)
        })
    })
}

// Parameters of the user to insert
function insertUser (username, password, callback) {
    if (username === undefined || password === undefined) 
        throw "Wrong user format"

    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).insertOne({username, password, friends: []}, function(err, res) {
            if (err) throw err
            console.log('user inserted: ' + username)
            close()
            if (callback) callback()
        });
    })
}

// Query to find the user
function getUser (user, callback) {
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).findOne(user, function(err, result) {
            if (err) throw err
            close()
            callback(result)
        })
    })
}

// Check if the current username is in use
function userNameExists (username, callback) {
    mongoConnect((db, close) => {
        db.collection({username}).findOne(user, function(err, result) {
            if (err) throw err
            close()
            callback(result !== null)
        })
    })
}

// User is the query to find the user to delete
function deleteUser (user, callback) {
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).deleteOne(user, function(err, obj) {
            if (err) throw err
            close()
            if (callback) callback(obj)
        })
    })
} 

// User is the query to find the user to update with the new values
function updateUser (user, newValues, callback) {
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).updateOne(user, {$set: newValues}, function(err, res) {
            if (err) throw err
            if (callback) callback(res)
            close()
        })
    })
}

// User1 and user2 are userIds. User1 adds user2 as a friend
function addFriend (user1, user2, callback) {
    getUser({'_id':  ObjectId(user2)}, (res) => {
        // Check user2 exists
        if (res === null) throw "The specified userId " + user2 + " does not exist"
        
        // Get current friends and update them
        getUser({'_id':  ObjectId(user1)}, (user) => {
            let friends = user.friends
            friends.push(user2)
            updateUser({'_id': ObjectId(user1)}, {friends}, callback)
        })
    })
}

// User1 and user2 are userIds. Friend user2 is beeing removed from user1's frinedlist
function removeFriend (user1, user2, callback) {
    getUser({'_id':  ObjectId(user2)}, (res) => {
        // Check user2 exists
        if (res === null) throw "The specified userId " + user2 + " does not exist"
        
        // Get current friends and update them
        getUser({'_id':  ObjectId(user1)}, (user) => {
            let friends = user.friends.filter((aux) => aux != user2)
            console.log(friends, user2)
            updateUser({'_id': ObjectId(user1)}, {friends}, callback)
        })
    })
}

function printUsers () {
    allUsers((res) => console.log(res))
} 

module.exports = {
    insertUser,
    deleteUser,
    userNameExists,
    getUser,
    allUsers,
    updateUser,
    addFriend,
    removeFriend
}



