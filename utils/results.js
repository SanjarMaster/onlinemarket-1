const db = require('../DB/db');


function ResultDb(sql, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function ResultDbOne(sql, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results.rows[0]);
        });
    });
}

function InsertDb(sql, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results.rows);
        });
    });
}

function UpdateDb(sql, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results.rows);
        });
    });
}


function InsertParams(sql, params, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function UpdateParams(sql,params, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql,params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function ResultParamsOne(sql,params, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql,params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results[0]);
        });
    });
}

function ResultParams(sql,params, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql,params ,(error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function InsertParamsID(sql, params, callback) {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results.insertId);
        });
    });
}

module.exports.ResultDb = ResultDb;
module.exports.ResultDbOne = ResultDbOne;
module.exports.InsertDb = InsertDb;
module.exports.UpdateDb = UpdateDb;
module.exports.InsertParams = InsertParams;
module.exports.UpdateParams = UpdateParams;
module.exports.ResultParamsOne = ResultParamsOne;
module.exports.ResultParams = ResultParams;
module.exports.InsertParamsID=InsertParamsID;