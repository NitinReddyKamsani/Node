const {MongoClient} = require('mongodb');
const { uri } = require('./uril');

const url = uri
const client = new MongoClient(url);


const dbName = 'Users';

async function main(){

    await client.connect();

    console.log('Connected successfully to server');

    const db = client.db(dbName);

    const collection = db.collection("UsersData");


    const data = {
        "User3" : {
            "Name" : "Meghana",
            "Age" : 27
        }
    }


    const insertResult = await collection.insertOne(data);

    console.log("A document is inserted");
    
    const find = await collection.find({}).toArray();

    console.log(find);

    return "done ..."


}

main().
then(console.log)
.catch(console.error)
.finally(() => client.close());