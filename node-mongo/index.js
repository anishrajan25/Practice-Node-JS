const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log("Connected correctly to sever");

    const db = client.db(dbname); // to connect to the database
    
    dboper.insertDocument(db, { name: "Vandonut", description: "Test" }, 'dishes', (result) => {
        console.log("\nInsert document: \n", result.ops);

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log("\nFound documents: \n", docs);

            dboper.updateDocument(db, { name: 'Vandonut' }, { description: 'Updated Test'}, 'dishes', (result) => {
                console.log("\nUpdated document: \n", result.result);

                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log("\nFound updated documents: \n", docs);

                    db.dropCollection('dishes', (result) => {
                        console.log("\nDropped Collection: \n", result);

                        client.close();
                    })
                });
            });
        });
    });
});