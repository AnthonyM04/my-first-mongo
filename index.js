// lets connect to mongodb and do some cool stuffs

// import our library (just the tools we need)
import { MongoClient } from "mongodb"

// import our credentials to connect
import {uri} from "./secrets.js"

// connect to our mongo server
const client = new MongoClient(uri)

//create a reference to our database
const db = client.db('mongo0')

// lets add a domcument to our collection...

// lets create a piece of furniture

const stool = {
    name: 'Ergo Stool',
    brand: 'Autonomous',
    color: 'Evergreen',
    price: 169,
    warranty: '2 years',
}

const chair = {
    name: 'Ergo Stool',
    brand: 'Autonomous',
    color: 'Gray',
    price: 269,
    warranty: '70 years',
}

async function addOneItem(item) {
    await db.collection('items').insertOne(stool)
        .then()
        .catch()
}

addOneItem(stool)
addOneItem(chair)