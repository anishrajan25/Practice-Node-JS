const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);

    coll.insert(document, (err, result) => {
        assert.equal(err, null);

        console.log("\nInserted " + result.result.n + 
            " documents into the collection " + collection);
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);

    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);

        callback(docs);
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);

    //deletes the first match
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null);

        console.log("\nRemoved the document ", document);
        callback(result);
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);

    // 1st param - document to be updated
    // 2nd -> fields to be updated (here it passes the update parameter we received above)
    // 3rd -> 
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.equal(err, null);

        console.log("\nUpdated the document with ", update);
        callback(result);
    })
};