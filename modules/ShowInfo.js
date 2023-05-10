const QueryString = require('../querys/querys_show_info');
const QueryParams = require('../params/params_show_info');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');

exports.main_catalog = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_catalog();
            let params = QueryParams.main_catalog(body.main_catalog);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.main_catalog_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_catalog_one();
            let params = QueryParams.main_catalog_one(body.main_catalog);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.sub_catalog(body.main_catalog);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.sub_catalog_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.sub_catalog_one();
            let params = QueryParams.sub_catalog_one(body.sub_catalog_one);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.sub_catalog_withmain = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.sub_catalog_withmain();
            let params = QueryParams.sub_catalog_withmain(body.sub_catalog_withmain);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.sub_catalog_one_withmain = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.sub_catalog_one_withmain();
            let params = QueryParams.sub_catalog_one_withmain(body.sub_catalog_one_withmain);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.sub_catalog_bymain = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.sub_catalog_bymain();
            let params = QueryParams.sub_catalog_bymain(body.sub_catalog_bymain);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.price_list(body.price_list);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.price_list_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.price_list_one();
            let params = QueryParams.price_list_one(body.price_list_one);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.main_parameterslist(body.main_parameterslist);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.main_parameterslist_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.main_parameterslist_one();
            let params = QueryParams.main_parameterslist_one(body.main_parameterslist_one);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.parameters_list(body.parameters_list);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.parameters_list_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.parameters_list_one();
            let params = QueryParams.parameters_list_one(body.parameters_list_one);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.color_list(body.color_list);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.color_list_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.color_list_one();
            let params = QueryParams.color_list_one(body.color_list_one);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.filtr_list(body.filtr_list);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            let params = QueryParams.country_list(body.country_list);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.country_list_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.country_list_one();
            let params = QueryParams.country_list_one(body.country_list_one);
            const resultSer = await ResultDB.ResultParamsOne(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (typeof resultSer === "undefined") {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
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
            console.log(sql);
            let params = QueryParams.region_list(body.region_list);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.region_list_one = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.region_list_one();
            let params = QueryParams.region_list_one(body.region_list_one);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.region_list_bycid = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.region_list_bycid();
            let params = QueryParams.region_list_bycid(body.region_list_bycid);
            const resultSer = await ResultDB.ResultParams(sql, params);
            let res_id = 200;
            let mess = 'success';
            if (resultSer.length === 0) {
                res_id = 404;
                mess = 'not found data';
            }
            response.status(res_id, mess, resultSer, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}
