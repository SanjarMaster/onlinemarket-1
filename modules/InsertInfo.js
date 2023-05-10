const QueryString = require('../querys/querys_insert_info');
const QueryParams = require('../params/params_insert_info');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');

exports.main_catalog = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_catalog();
            let params= QueryParams.main_catalog(body.main_catalog);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();



}

exports.sub_catalog = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.sub_catalog();
            let params= QueryParams.sub_catalog(body.sub_catalog);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.price_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.price_list();
            let params= QueryParams.price_list(body.price_list);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.main_parameterslist = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_parameterslist();
            let params= QueryParams.main_parameterslist(body.main_parameterslist);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.parameters_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.parameters_list();
            let params= QueryParams.parameters_list(body.parameters_list);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.color_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.color_list();
            let params= QueryParams.color_list(body.color_list);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.filtr_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.filtr_list();
            let params= QueryParams.filtr_list(body.filtr_list);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error, res);
        }
    }
    runFunc();
}

exports.country_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.country_list();
            let params= QueryParams.country_list(body.country_list);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error, res);
        }
    }
    runFunc();
}

exports.region_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.region_list();
            let params= QueryParams.region_list(body.region_list);
            await ResultDB.InsertParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error, res);
        }
    }
    runFunc();
}
