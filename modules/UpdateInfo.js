const QueryString = require('../querys/querys_update_info');
const QueryParams = require('../params/params_update_info');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');

exports.main_catalog = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_catalog();
            let params= QueryParams.main_catalog(body.main_catalog);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.main_catalog_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_catalog_status();
            let params= QueryParams.main_catalog_status(body.main_catalog);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.sub_catalog_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.sub_catalog_status();
            let params= QueryParams.sub_catalog_status(body.sub_catalog_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.price_list_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.price_list_status();
            let params= QueryParams.price_list_status(body.price_list_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.main_parameterslist_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_parameterslist_status();
            let params= QueryParams.main_parameterslist_status(body.main_parameterslist_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.parameters_list_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.parameters_list_status();
            let params= QueryParams.parameters_list_status(body.parameters_list_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.color_list_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.color_list_status();
            let params= QueryParams.color_list_status(body.color_list_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.main_parameterslist_forfiltr = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_parameterslist_forfiltr();
            let params= QueryParams.main_parameterslist_forfiltr(body.main_parameterslist_forfiltr);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.parameters_list_forfiltr = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.parameters_list_forfiltr();
            let params= QueryParams.parameters_list_forfiltr(body.parameters_list_forfiltr);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.filtr_list_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.filtr_list_status();
            let params= QueryParams.filtr_list_status(body.filtr_list_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.country_list_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.country_list_status();
            let params= QueryParams.country_list_status(body.country_list_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
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
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.region_list_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.region_list_status();
            let params= QueryParams.region_list_status(body.region_list_status);
            await ResultDB.UpdateParams(sql,params);
            response.status(200, 'success', {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}
