const QueryString = require('../querys/querys_show_users');
const QueryParams = require('../params/params_show_users');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');
const axios = require('axios')

exports.phone_search = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            if (body.phone_search.phone.length != 12) {
                response.status(400, "Bad request: Phone format incorrect", {}, res);
                return false;
            }

            let sql_ = QueryString.phone_search();
            let params_ = QueryParams.phone_search(body.phone_search);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                let sql_interid = QueryString.user_interid();
                let params_interid = QueryParams.user_interid(body.phone_search);
                const resultInterID = await ResultDB.InsertParamsID(sql_interid, params_interid);

                let sql_insert = QueryString.phone_insert();
                let params_insert = QueryParams.phone_insert(body.phone_search, resultInterID);
                const resultInsert = await ResultDB.InsertParams(sql_insert, params_insert);

                res_id = 200;
                mess = 'success';
                userData = {
                    "phone": body.phone_search.phone,
                    "ism": "",
                    "fam": "",
                    "adress": "",
                    "id": resultInterID.toString(),
                    "new_user":1
                }

                
            } else {
                res_id = 200;
                mess = 'success';
                userData = result
            }
            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.phoneandpassword_search = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            if (body.phoneandpassword_search.phone.length != 12) {
                response.status(400, "Bad request: Phone format incorrect", {}, res);
                return false;
            }

            let sql_ = QueryString.phoneandpassword_search();
            let params_ = QueryParams.phoneandpassword_search(body.phoneandpassword_search);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result != "undefined") {
                res_id = 200;
                mess = 'success';
                userData = result
            }  
            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.sms_confirm = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryString.sms_confirm();
            let params_ = QueryParams.sms_confirm(body.sms_confirm);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            
            if (typeof result != "undefined") {
                
                res_id = 200;
                mess = 'success';
                 
            } else {
                res_id = 200;
                mess = 'success';
                userData = result
            }
            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.edit_data = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            if (body.edit_data.phone.length != 12) {
                response.status(400, "Bad request: Phone format incorrect", {}, res);
                return false;
            }

            let sql_ = QueryString.phone_search_id();
            let params_ = QueryParams.phone_search_id(body.edit_data);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result != "undefined") {
                response.status(401, "Bad request: The phone number already exists", {}, res);
                return false;
            } else {
                let sql_update = QueryString.edit_data();
                let params_update = QueryParams.edit_data(body.edit_data);
                const result = await ResultDB.UpdateParams(sql_update, params_update);
                res_id = 200;
                mess = 'success';
            }

            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.edit_password = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.edit_password);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_update = QueryString.edit_password();
                let params_update = QueryParams.edit_password(body.edit_password);
                const result = await ResultDB.UpdateParams(sql_update, params_update);
                res_id = 200;
                mess = 'success';
            }

            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.insert_adress = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.insert_adress);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_insert = QueryString.insert_adress();
                let params_insert = QueryParams.insert_adress(body.insert_adress);
                await ResultDB.InsertParams(sql_insert, params_insert);
                res_id = 200;
                mess = 'success';
            }

            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.edit_adress = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 300;
            let mess = 'error';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.edit_adress);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_update = QueryString.edit_adress();
                let params_update = QueryParams.edit_adress(body.edit_adress);
                const resultUpdate = await ResultDB.UpdateParams(sql_update, params_update);
                res_id = 200;
                mess = 'success';
            }

            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.edit_adress_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 300;
            let mess = 'error';
            let userData = {};

            let sql_update = QueryString.edit_adress_status();
            let params_update = QueryParams.edit_adress_status(body.edit_adress_status);
            const resultUpdate = await ResultDB.UpdateParams(sql_update, params_update);
            res_id = 200;
            mess = 'success';
            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.show_adress = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 300;
            let mess = 'error';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.show_adress);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_show = QueryString.show_adress();
                console.log(sql_show);
                let params_show = QueryParams.show_adress(body.show_adress);
                const resultAdress = await ResultDB.ResultParams(sql_show, params_show);
                console.log(resultAdress);
                if (resultAdress.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    userData = resultAdress;
                }

            }

            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.favourites_insert = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 300;
            let mess = 'error';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.insert);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {

                let sql_search = QueryString.favourites_insert_search();
                let params_search = QueryParams.favourites_insert_search(body.insert);
                const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                if (typeof resultSearch === "undefined") {
                    let sql_insert = QueryString.favourites_insert();
                    let params_insert = QueryParams.favourites_insert(body.insert);
                    await ResultDB.InsertParams(sql_insert, params_insert);
                    res_id = 200;
                    mess = 'success';
                } else {
                    res_id = 401;
                    mess = 'Bad request: The product already exists';
                }
            }
            response.status(res_id, mess, {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.favourites_show = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 300;
            let mess = 'error';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.show);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_show = QueryString.show_product_favourites();
                let params_show = QueryParams.show_product_favourites(body.show);
                let resultShow = await ResultDB.ResultParams(sql_show, params_show);
                if (resultShow.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    userData = resultShow;
                }
            }

            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.favourites_status = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 300;
            let mess = 'error';
            let userData = {};
            let sql_ = QueryString.user_search_id();
            let params_ = QueryParams.user_search_id(body.status);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {
                let sql_status = QueryString.status_product_favourites();
                let params_status = QueryParams.status_product_favourites(body.status);
                let resultstatus = await ResultDB.ResultParams(sql_status, params_status);
                    res_id = 200;
                    mess = 'success';
            }

            response.status(res_id, mess, {}, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.admin_enter = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
             

            let sql_ = QueryString.admin_enter();
            let params_ = QueryParams.admin_enter(body.admin_enter);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result != "undefined") {
                res_id = 200;
                mess = 'success';
                userData = result
            }  
            response.status(res_id, mess, userData, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

