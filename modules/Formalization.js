const QueryStringUser = require('../querys/querys_show_users');
const QueryString = require('../querys/querys_show_formalization');
const QueryParamsUser = require('../params/params_show_users');
const QueryParams = require('../params/params_show_formalization');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');
const datetime = require('node-datetime');



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
                var dt = datetime.create();
                var order_number = body.insert.id + dt.format('YmdHMS');

                let sql_insert = QueryString.insert();
                let params_insert = QueryParams.insert(body.insert, order_number);
                const result = await ResultDB.InsertParamsID(sql_insert, params_insert);
                if (typeof result != "undefined") {
                    res_id = 200;
                    mess = 'success';
                    const products = body.insert.products;
                    if (products.length > 0) {
                        for (let i = 0; i < products.length; i++) {
                            let sql_insert_list = QueryString.insert_list();
                            let params_insert_list = QueryParams.insert_list(result, products[i].pro_ident, products[i].count);
                            const resultList = await ResultDB.InsertParamsID(sql_insert_list, params_insert_list);
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
            let showList = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.show_list);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {

                let sql_show = QueryString.show_list();
                let params_show = QueryParams.show_list(body.show_list);
                const resultList = await ResultDB.ResultParams(sql_show, params_show);
                if (resultList.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    for (let i = 0; i < resultList.length; i++) {
                        let order_id = resultList[i].ident;

                        let sql_show_list = QueryString.show_list_list();
                        let params_show_list = QueryParams.show_list_list(order_id);
                        const resultListList = await ResultDB.ResultParams(sql_show_list, params_show_list);
                        resultList[i].products = resultListList;
                    }
                    showList = resultList;

                }
                response.status(res_id, mess, showList, res);
            }
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.pay_click = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.pay_click);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {

                let sql_insert = QueryString.insert_click();
                let params_insert = QueryParams.insert_click(body.pay_click);
                const result = await ResultDB.InsertParamsID(sql_insert, params_insert);
                if (typeof result != "undefined") {
                    res_id = 200;
                    mess = 'success';


                    let sql_update = QueryString.update_order();
                    let params_update = QueryParams.update_order(body.pay_click);
                    const resultUp = await ResultDB.UpdateParams(sql_update, params_update);


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

exports.cancel = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.cancel);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {

                let sql_search = QueryString.order_search();
                let params_search = QueryParams.order_search(body.cancel.order_ident);
                const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                if (typeof resultSearch === "undefined") {
                    response.status(401, "Bad request: not action", {}, res);
                    return false;
                }
                if (resultSearch.orders_status === 2) {
                    response.status(401, "Bad request: not action", {}, res);
                    return false;
                }
                let sql_update = QueryString.update_order();
                let params_update = QueryParams.update_order(body.cancel);
                const resultUp = await ResultDB.UpdateParams(sql_update, params_update);
                if (typeof result != "undefined") {
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
