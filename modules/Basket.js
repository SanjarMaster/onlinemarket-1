const QueryStringUser = require('../querys/querys_show_users');
const QueryString = require('../querys/querys_show_basket');
const QueryStringData = require('../querys/querys_show_data');
const QueryParamsUser = require('../params/params_show_users');
const QueryParams = require('../params/params_show_basket');
const QueryParamsData = require('../params/params_show_data');

const ResultDB = require('../utils/results');
const response = require('../utils/responses');


exports.insert = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.insert);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_search = QueryString.search_product();
                let params_search = QueryParams.search_product(body.insert);
                const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);

                if (typeof resultSearch === "undefined") {
                    let sql_insert = QueryString.insert();
                    let params_insert = QueryParams.insert(body.insert);
                    const result = await ResultDB.InsertParams(sql_insert, params_insert);
                    if (typeof result.insertId != "undefined") {
                        res_id = 200;
                        mess = 'success';
                    }
                } else {
                    let new_count = resultSearch.bas_count + 1;
                    let sql_update = QueryString.update_count();
                    let params_update = QueryParams.update_count(new_count, resultSearch.bas_id);
                    const resultUpdate = await ResultDB.UpdateParams(sql_update, params_update);
                    if (resultUpdate.warningCount === 0) {
                        res_id = 200;
                        mess = 'success';
                    }
                }
                response.status(res_id, mess, userData, res);
            }
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.insert_all = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.insert_all);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                var params = body.insert_all.params;
                if (params.length === 0) {
                    response.status(300, 'error', "Params empty", res);
                    return false;
                } else {
                    let data = {};
                    for (let i = 0; i < params.length; i++) {
                        if (params[i].pro_ident != 0) {
                            data = {
                                id: body.insert_all.id,
                                pro_ident: params[i].pro_ident,
                                count: params[i].count
                            };

                            let sql_search = QueryString.search_product();
                            let params_search = QueryParams.search_product(data);
                            const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);

                            if (typeof resultSearch === "undefined") {
                                let sql_insert = QueryString.insert();
                                let params_insert = QueryParams.insert(data);
                                const result = await ResultDB.InsertParams(sql_insert, params_insert);
                                if (typeof result.insertId != "undefined") {
                                    res_id = 200;
                                    mess = 'success';
                                }
                            } else {
                                let new_count = resultSearch.bas_count + 1;
                                let sql_update = QueryString.update_count();
                                let params_update = QueryParams.update_count(new_count, resultSearch.bas_id);
                                const resultUpdate = await ResultDB.UpdateParams(sql_update, params_update);
                                if (resultUpdate.warningCount === 0) {
                                    res_id = 200;
                                    mess = 'success';
                                }
                            }
                        }
                    }
                }
                response.status(res_id, mess, userData, res);
            }
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.show_list = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let listBasket = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.show_list);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_show = QueryString.show_list();
                let params_show = QueryParams.show_list(body.show_list);
                const resultShow = await ResultDB.ResultParams(sql_show, params_show);
                if (resultShow.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    listBasket = resultShow;
                }

                response.status(res_id, mess, listBasket, res);
            }
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.count_minus = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.count_minus);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_search = QueryString.search_product();
                let params_search = QueryParams.search_product(body.count_minus);
                const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);

                if (typeof resultSearch != "undefined") {
                    let new_count = resultSearch.bas_count - 1;
                    let sql_update = QueryString.update_count();
                    let params_update = QueryParams.update_count(new_count, resultSearch.bas_id);
                    const resultUpdate = await ResultDB.UpdateParams(sql_update, params_update);
                    if (resultUpdate.warningCount === 0) {
                        res_id = 200;
                        mess = 'success';
                    }
                }
                response.status(res_id, mess, userData, res);
            }
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.delete = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.delete);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_update = QueryString.update_status();
                let params_update = QueryParams.update_status(0, body.delete.bas_ident);
                console.log("sql_update: ", sql_update);
                console.log("params_update: ", params_update);
                const resultUpdate = await ResultDB.UpdateParams(sql_update, params_update);
                if (resultUpdate.warningCount === 0) {
                    res_id = 200;
                    mess = 'success';
                }
                response.status(res_id, mess, userData, res);
            }
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.list_withid = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let listBasket = [];

            const params = body.list_withid.params;
            if (params.length > 0) {
                for (let j = 0; j < params.length; j++) {
                    let sql_show = QueryString.list_withid();
                    let params_show = QueryParams.list_withid(params[j].pro_ident);
                    const resultShow = await ResultDB.ResultParamsOne(sql_show, params_show);
                    if (typeof resultShow != "undefined") {
                        res_id = 200;
                        mess = 'success';
                        resultShow.count = params[j].count;

                        let sql_parametrs = QueryStringData.show_product_parametrs();
                        let params_parametrs = QueryParamsData.show_product_parametrs(params[j].pro_ident);
                        let resultParametrs = await ResultDB.ResultParams(sql_parametrs, params_parametrs);

                        resultShow.parametrs = resultParametrs;

                        listBasket.push(resultShow);
                    }
                }
            }
            response.status(res_id, mess, listBasket, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}
