const QueryString = require('../querys/querys_insert_data');
const QueryStringUser = require('../querys/querys_show_users');
const QueryStringShow = require('../querys/querys_show_data');
const QueryParams = require('../params/params_insert_data');
const QueryParamsUser = require('../params/params_show_users');
const QueryParamsShow = require('../params/params_show_data');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');

exports.product_insert = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.product_insert();
            let params = QueryParams.product_insert(body.product_insert);
            const productID = await ResultDB.InsertParamsID(sql, params);
            console.log(productID);
            //parametrlarni qo`shish
            let sql_params = "";
            let params_params = [];
            const pro_params = body.product_insert.params;
            console.log(pro_params);
            if (pro_params.length > 0) {
                for (let i_par = 0; i_par < pro_params.length; i_par++) {
                    sql_params = QueryString.product_insert_params();
                    params_params = QueryParams.product_insert_params(productID, pro_params[i_par].params_ident, pro_params[i_par].params_value);
                    console.log(params_params);
                    await ResultDB.InsertParams(sql_params, params_params);
                }
            }


            //narxlarni qo`shish
            let sql_price = "";
            let params_price = [];
            const prices = body.product_insert.prices;
            if (prices.length > 0) {
                for (let i_pr = 0; i_pr < prices.length; i_pr++) {
                    sql_price = QueryString.product_insert_price();
                    params_price = QueryParams.product_insert_price(productID, prices[i_pr].price_ident, prices[i_pr].price_value);
                    await ResultDB.InsertParams(sql_price, params_price);
                }
            }


            // ranglarni qo`shish
            let sql_color = "";
            let params_color = [];
            const colors = body.product_insert.colors;
            if (colors.length > 0) {
                for (let i_c = 0; i_c < colors.length; i_c++) {
                    sql_color = QueryString.product_insert_colors();
                    params_color = QueryParams.product_insert_colors(productID, colors[i_c]);
                    await ResultDB.InsertParams(sql_color, params_color);
                }
            }


            // Rasmlarni qo`shish
            let sql_photos = "";
            let params_photos = [];
            const photos = body.product_insert.photos;
            if (photos.length > 0) {
                for (let i_p = 0; i_p < photos.length; i_p++) {
                    sql_photos = QueryString.product_insert_photos();
                    params_photos = QueryParams.product_insert_photos(productID, photos[i_p]);
                    await ResultDB.InsertParams(sql_photos, params_photos);
                }
            }

            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.product_comment = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};
            let sql_ = QueryStringUser.user_search_id();
            let params_ = QueryParamsUser.user_search_id(body.product_comment);
            const result = await ResultDB.ResultParamsOne(sql_, params_);
            if (typeof result === "undefined") {
                response.status(401, "Bad request: not found user data", {}, res);
                return false;
            } else {


                let sql_insert = QueryString.product_comment();
                let params_insert = QueryParams.product_comment(body.product_comment);
                const result = await ResultDB.InsertParams(sql_insert, params_insert);
                if (typeof result.insertId != "undefined") {
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

exports.product_rating = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 404;
            let mess = 'not found data';
            let userData = {};

            let sql_insert = QueryString.product_rating();
            let params_insert = QueryParams.product_rating(body.product_rating);
            const result = await ResultDB.InsertParams(sql_insert, params_insert);
            if (typeof result.insertId != "undefined") {
                res_id = 200;
                mess = 'success';

                let sql_show = QueryStringShow.product_rating();
                let params_show = QueryParams.product_rating(body.product_rating);
                const resultShow = await ResultDB.ResultParamsOne(sql_show, params_show);

                let product_rating = parseInt(parseFloat(resultShow.summa) / parseFloat(resultShow.soni));

                let sql_update = QueryString.product_rating_up();
                let params_update = QueryParams.product_rating_up(body.product_rating.pro_ident, product_rating);
                const result = await ResultDB.UpdateParams(sql_update, params_update);


            }

            response.status(res_id, mess, userData, res);

        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.product_top = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 405;
            let mess = 'yes DB';
            let userData = {};

            let sql_search = QueryString.product_top_search();
            let params_search = QueryParams.product_top_search(body.product_top);
            const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);

            if (typeof resultSearch === "undefined") {

                let sql_insert = QueryString.product_top();
                let params_insert = QueryParams.product_top(body.product_top);
                const result = await ResultDB.InsertParams(sql_insert, params_insert);
                if (typeof result.insertId != "undefined") {
                    res_id = 200;
                    mess = 'success';
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

exports.applications = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 405;
            let mess = 'yes DB';
            let userData = {};


            let sql_insert = QueryString.applications();
            let params_insert = QueryParams.applications(body.applications);
            const result = await ResultDB.InsertParams(sql_insert, params_insert);
            if (typeof result.insertId != "undefined") {
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

exports.links = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 405;
            let mess = 'yes DB';
            let userData = {};


            let sql_insert = QueryString.links();
            let params_insert = QueryParams.links(body.links);
            const result = await ResultDB.InsertParams(sql_insert, params_insert);
            if (typeof result.insertId != "undefined") {
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

exports.news = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 405;
            let mess = 'yes DB';
            let userData = {};


            let sql_insert = QueryString.news();
            let params_insert = QueryParams.news(body.news);
            const result = await ResultDB.InsertParams(sql_insert, params_insert);
            if (typeof result.insertId != "undefined") {
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

exports.question_answer = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 405;
            let mess = 'yes DB';
            let userData = {};


            let sql_insert = QueryString.question_answer();
            let params_insert = QueryParams.question_answer(body.question_answer);
            const result = await ResultDB.InsertParams(sql_insert, params_insert);
            if (typeof result.insertId != "undefined") {
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

exports.info_add = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            let res_id = 405;
            let mess = 'yes DB';
            let userData = {};

            let sql_insert = QueryString.info_add();
            let params_insert = QueryParams.info_add(body.info_add);
            const result = await ResultDB.InsertParams(sql_insert, params_insert);
            if (typeof result.insertId != "undefined") {
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

exports.product_edit = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {
            let sql = QueryString.product_edit();
            let params = QueryParams.product_edit(body.product_edit);
            const productID = await ResultDB.UpdateParams(sql, params);
            
            //parametrlarni qo`shish
            let sql_params = "";
            let params_params = [];
            const pro_params = body.product_insert.params;
            if (pro_params.length > 0) {
                for (let i_par = 0; i_par < pro_params.length; i_par++) {
                    sql_params = QueryString.product_insert_params();
                    params_params = QueryParams.product_insert_params(productID, pro_params[i_par].params_ident, pro_params[i_par].params_value);
                    console.log(params_params);
                    await ResultDB.InsertParams(sql_params, params_params);
                }
            }


            //narxlarni qo`shish
            let sql_price = "";
            let params_price = [];
            const prices = body.product_insert.prices;
            if (prices.length > 0) {
                for (let i_pr = 0; i_pr < prices.length; i_pr++) {
                    sql_price = QueryString.product_insert_price();
                    params_price = QueryParams.product_insert_price(productID, prices[i_pr].price_ident, prices[i_pr].price_value);
                    await ResultDB.InsertParams(sql_price, params_price);
                }
            }


            // ranglarni qo`shish
            let sql_color = "";
            let params_color = [];
            const colors = body.product_insert.colors;
            if (colors.length > 0) {
                for (let i_c = 0; i_c < colors.length; i_c++) {
                    sql_color = QueryString.product_insert_colors();
                    params_color = QueryParams.product_insert_colors(productID, colors[i_c]);
                    await ResultDB.InsertParams(sql_color, params_color);
                }
            }


            // Rasmlarni qo`shish
            let sql_photos = "";
            let params_photos = [];
            const photos = body.product_insert.photos;
            if (photos.length > 0) {
                for (let i_p = 0; i_p < photos.length; i_p++) {
                    sql_photos = QueryString.product_insert_photos();
                    params_photos = QueryParams.product_insert_photos(productID, photos[i_p]);
                    await ResultDB.InsertParams(sql_photos, params_photos);
                }
            }

            response.status(200, 'success', {}, res);
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}
