const QueryString = require('../querys/querys_update_data');
const QueryParams = require('../params/params_update_data');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');

exports.product_top = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.product_top();
            let params = QueryParams.product_top(body.product_top);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.applications_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.applications_status();
            let params = QueryParams.applications_status(body.applications_status);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.links_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.links_status();
            let params = QueryParams.links_status(body.links_status);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.news_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.news_status();
            let params = QueryParams.news_status(body.news_status);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.question_answer_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.question_answer_status();
            let params = QueryParams.question_answer_status(body.question_answer_status);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.info_add_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.info_add_status();
            let params = QueryParams.info_add_status(body.info_add_status);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.product_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.product_status();
            let params = QueryParams.product_status(body.product_status);
            await ResultDB.UpdateParams(sql, params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}



