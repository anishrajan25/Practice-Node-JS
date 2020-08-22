const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);

    return coll.insert(document);
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);

    return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);

    //deletes the first match
    return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);

    // 1st param - document to be updated
    // 2nd -> fields to be updated (here it passes the update parameter we received above)
    // 3rd -> 
    return coll.updateOne(document, { $set: update }, null);
};