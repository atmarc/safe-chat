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
            if (callback) callback(res.ops[0])
        })
    })
}

// Query to find the user
function queryUser (user, callback) {
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).findOne(user, function(err, result) {
            if (err) throw err
            close()
            callback(result)
        })
    })
}

function getUser (userId, callback) {
    if (typeof(userId) !== "string") return 
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).findOne({'_id': ObjectId(userId)}, {projection: {password: 0}}, function(err, result) {
            if (err) throw err
            close()
            callback(result)
        })
    })
}

function getUserPromise (userId) {
    if (typeof(userId) !== "string") return 
    return new Promise((resolve, reject) => {
        mongoConnect((db, close) => {
            db.collection(USERS_COLLECTION).findOne({'_id': ObjectId(userId)}, {projection: {password: 0}}, function(err, result) {
                if (err) throw err
                close()
                resolve(result)
            })
        })
    })
}

// Check if the current username is in use
function userNameExists (username, callback) {
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).findOne({username}, function(err, result) {
            if (err) throw err
            close()
            callback(result !== null)
        })
    })
}

// User is the query to find the user to delete
function deleteUser (userId, callback) {
    if (typeof(userId) !== "string") return 
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).deleteOne({'_id': ObjectId(userId)}, function(err, obj) {
            if (err) throw err
            close()
            if (callback) callback(obj)
        })
    })
} 

// User is the query to find the user to update with the new values
function updateUser (userId, newValues, callback) {
    if (typeof(userId) !== "string") return 
    mongoConnect((db, close) => {
        db.collection(USERS_COLLECTION).updateOne({'_id': ObjectId(userId)}, {$set: newValues}, function(err, res) {
            if (err) throw err
            close()
            if (callback) callback(res)
        })
    })
}

// User1 and user2 are userIds. User1 adds user2 as a friend
function addFriend (user1, user2, callback) {
    getUser(user2, (res) => {
        // Check user2 exists
        if (res === null) throw "The specified userId " + user2 + " does not exist"
        
        // Get current friends and update them
        getUser(user1, (user) => {
            let friends = user.friends
            friends.push(user2)
            updateUser(user1, {friends}, callback)
        })
    })
}

// User1 and user2 are userIds. Friend user2 is beeing removed from user1's frinedlist
function removeFriend (user1, user2, callback) {
    getUser(user2, (res) => {
        // Check user2 exists
        if (res === null) throw "The specified userId " + user2 + " does not exist"
        
        // Get current friends and update them
        getUser(user1, (user) => {
            let friends = user.friends.filter((aux) => aux != user2)
            updateUser(user1, {friends}, callback)
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
    queryUser,
    getUser,
    getUserPromise,
    allUsers,
    updateUser,
    addFriend,
    removeFriend,
    allUsers
}



