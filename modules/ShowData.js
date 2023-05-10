const QueryString = require('../querys/querys_show_data');
const QueryStringUser = require('../querys/querys_show_users');
const QueryStringInfo = require('../querys/querys_show_info');
const QueryParams = require('../params/params_show_data');
const QueryParamsInfo = require('../params/params_show_info');
const QueryParamsUser = require('../params/params_show_users');
const ResultDB = require('../utils/results');
const response = require('../utils/responses');

exports.show_catalogs = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            var catalogLists = [];
            let res_id = 404;
            let mess = 'not found data';

            let sql_settings = QueryString.show_settings();
            let params_settings = QueryParams.show_settings(1);
            const resultSettings = await ResultDB.ResultParamsOne(sql_settings, params_settings);


            let sql = QueryString.main_catalog();
            let params = QueryParams.main_catalog(body.show_catalogs);
            const resultLists = await ResultDB.ResultParams(sql, params);
            if (resultLists.length > 0) {
                res_id = 200;
                mess = 'success';
                catalogLists = resultLists;
                for (let i = 0; i < resultLists.length; i++) {
                    let resultSubLists = [];
                    if (resultSettings.sett_values === "2") {
                        let sql_sub = QueryString.sub_catalog_bymain();
                        let params_sub = QueryParams.sub_catalog_bymain(resultLists[i].ident);
                        resultSubLists = await ResultDB.ResultParams(sql_sub, params_sub);
                    }
                    catalogLists[i].sub_catalog = resultSubLists
                }
            }

            response.status(res_id, mess, catalogLists, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.show_products = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            var productLists = [];
            let res_id = 404;
            let mess = 'not found data';
            const main_ident = body.show_products.main_ident;
            const sub_ident = body.show_products.sub_ident;
            if (main_ident === 0 && sub_ident === 0) {
                let sql = QueryString.show_product_all();
                let params = QueryParams.show_product_all(body.show_products);
                const resultLists = await ResultDB.ResultParams(sql, params);
                if (resultLists.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    for (let k = 0; k < resultLists.length; k++) {
                        let pro_id = resultLists[k].ident;

                        let sql_search = QueryString.search_top();
                        let params_search = QueryParams.search_top(pro_id);
                        const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                        let top = 0;
                        if (typeof resultSearch != "undefined") {
                            top = 1;
                        }
                        resultLists[k].top = top;
                    }
                    productLists = resultLists;
                }
            }

            if (main_ident != 0 && sub_ident === 0) {
                let sql = QueryString.show_product_bymain();
                let params = QueryParams.show_product_bymain(1, main_ident);
                const resultLists = await ResultDB.ResultParams(sql, params);
                if (resultLists.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    for (let k = 0; k < resultLists.length; k++) {
                        let pro_id = resultLists[k].ident;

                        let sql_search = QueryString.search_top();
                        let params_search = QueryParams.search_top(pro_id);
                        const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                        let top = 0;
                        if (typeof resultSearch != "undefined") {
                            top = 1;
                        }
                        resultLists[k].top = top;
                    }
                    productLists = resultLists;
                }
            }
            if (main_ident === 0 && sub_ident != 0) {
                let sql = QueryString.show_product_bysub(sub_ident);
                let params = QueryParams.show_product_bysub(1, body);
                const resultLists = await ResultDB.ResultDb(sql);
                if (resultLists.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    for (let k = 0; k < resultLists.length; k++) {
                        let pro_id = resultLists[k].ident;

                        let sql_search = QueryString.search_top();
                        let params_search = QueryParams.search_top(pro_id);
                        const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                        let top = 0;
                        if (typeof resultSearch != "undefined") {
                            top = 1;
                        }
                        resultLists[k].top = top;
                    }
                    productLists = resultLists;
                }
            }
            if (main_ident != 0 && sub_ident != 0) {
                let sql = QueryString.show_product_bysub();
                let params = QueryParams.show_product_bysub(1, sub_ident);
                const resultLists = await ResultDB.ResultParams(sql, params);
                if (resultLists.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    for (let k = 0; k < resultLists.length; k++) {
                        let pro_id = resultLists[k].ident;

                        let sql_search = QueryString.search_top();
                        let params_search = QueryParams.search_top(pro_id);
                        const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                        let top = 0;
                        if (typeof resultSearch != "undefined") {
                            top = 1;
                        }
                        resultLists[k].top = top;
                    }
                    productLists = resultLists;
                }
            }
            response.status(res_id, mess, productLists, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.view_product = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            var productView = [];
            let res_id = 404;
            let mess = 'not found data';
            const pro_ident = body.view_product.pro_ident;

            let sql_pro = QueryString.show_product_byID();
            let params_pro = QueryParams.show_product_byID(pro_ident);
            const resultView = await ResultDB.ResultParams(sql_pro, params_pro);
            if (resultView.length > 0) {
                res_id = 200;
                mess = 'success';
                productView = resultView;

                let sql_settings = QueryString.show_settings();
                let params_settings = QueryParams.show_settings(2);
                const resultSettings = await ResultDB.ResultParamsOne(sql_settings, params_settings);

                // photos
                let sql_photos = QueryString.show_product_photos();
                let params_photos = QueryParams.show_product_photos(pro_ident);
                const resultPhotos = await ResultDB.ResultParams(sql_photos, params_photos);
                // colors
                let sql_colors = QueryString.show_product_colors();
                let params_colors = QueryParams.show_product_colors(pro_ident);
                const resultColors = await ResultDB.ResultParams(sql_colors, params_colors);
                // prices
                let sql_prices = QueryString.show_product_prices();
                let params_prices = QueryParams.show_product_prices(pro_ident);
                const resultPrices = await ResultDB.ResultParams(sql_prices, params_prices);
                // parametrs
                let resultParametrs = [];
                if (resultSettings.sett_values === "1") {
                    let sql_parametrs = QueryString.show_product_parametrs();
                    let params_parametrs = QueryParams.show_product_parametrs(pro_ident);
                    resultParametrs = await ResultDB.ResultParams(sql_parametrs, params_parametrs);
                }
                productView[0].view_type = resultSettings.sett_values
                productView[0].photos = resultPhotos
                productView[0].colors = resultColors
                productView[0].prices = resultPrices
                productView[0].parametrs = resultParametrs
            }
            response.status(res_id, mess, productView, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.show_filtrs = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            var filtrLists = [];
            let res_id = 404;
            let mess = 'not found data';
            let sqlMain = QueryStringInfo.main_parameterslist();
            let paramsMain = QueryParamsInfo.main_parameterslist(1);
            const resultMainPar = await ResultDB.ResultParams(sqlMain, paramsMain);
            if (resultMainPar.length > 0) {
                res_id = 200;
                mess = 'success';
                for (let i = 0; i < resultMainPar.length; i++) {
                    let main_ident = resultMainPar[i].ident;

                    let sqlFiltr = QueryString.show_filtrs_bymain();
                    let paramsFiltr = QueryParams.show_filtrs_bymain(main_ident);
                    const resultFiltr = await ResultDB.ResultParams(sqlFiltr, paramsFiltr);
                    if (resultFiltr.length > 0) {
                        filtrLists[i] = {
                            main_name: resultMainPar[i].name,
                            filtr_params: resultFiltr
                        }
                    }
                    //filtrLists[i].main_name = resultMainPar[i].name;
                    //filtrLists[i].filtr_params = resultFiltr;
                }


            }

            response.status(res_id, mess, filtrLists, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.show_filtrs_result = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            var filtrLists = [];
            let res_id = 404;
            let mess = 'Not found data';
            const request = body.show_filtrs_result.request;
            if (request.length > 0) {
                let sqlMini = '';
                for (let i = 0; i < request.length; i++) {
                    let request_params_ident = request[i].ident;
                    let request_params_value = request[i].value;
                    if (i === 0) {
                        sqlMini = sqlMini + " and (pp.proparl_parlid=" + request_params_ident + " and pp.proparl_value='" + request_params_value + "')";
                    } else {
                        sqlMini = sqlMini + " or (pp.proparl_parlid=" + request_params_ident + " and pp.proparl_value='" + request_params_value + "')";
                    }

                }
                let sql = 'select p.pro_id as ident,p.pro_status as name,\
                p.pro_code as code,p.pro_mainprice as main_price,p.pro_count as count,\
                p.pro_title as title from products p ,product_parameters pp \
                where p.pro_id =pp.proparl_proid \
                and (p.pro_status =1 '+ sqlMini + ')';

                const resultFiltr = await ResultDB.ResultDb(sql);
                let array_tmp = ["-1", "-2"];
                if (resultFiltr.length > 0) {
                    for (let j = 0; j < resultFiltr.length; j++) {
                        let search = array_tmp.indexOf(resultFiltr[j].ident);
                        if (search === -1) {
                            array_tmp.push(resultFiltr[j].ident);
                            filtrLists.push(resultFiltr[j]);
                        }
                    }
                    res_id = 200;
                    mess = 'success';
                }
            }

            response.status(res_id, mess, filtrLists, res);
        } catch (error) {
            console.log(error);
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
            let listShow = {};

            let sql_show = QueryString.product_comment();
            let params_show = QueryParams.product_comment(body.product_comment.pro_ident);
            const resultShow = await ResultDB.ResultParams(sql_show, params_show);
            if (resultShow.length > 0) {
                res_id = 200;
                mess = 'success';
                listShow = resultShow;
            }


            response.status(res_id, mess, listShow, res);
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

            let res_id = 404;
            let mess = 'not found data';
            let listShow = {};

            let sql_show = QueryString.product_top();
            let params_show = QueryParams.product_top(body.product_top);
            const resultShow = await ResultDB.ResultParams(sql_show, params_show);
            if (resultShow.length > 0) {
                res_id = 200;
                mess = 'success';
                listShow = resultShow;
            }


            response.status(res_id, mess, listShow, res);
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

            let res_id = 404;
            let mess = 'not found data';
            let listShow = {};

            let sql_show = QueryString.applications();
            let params_show = QueryParams.applications(body.applications);
            const resultShow = await ResultDB.ResultParams(sql_show, params_show);
            if (resultShow.length > 0) {
                res_id = 200;
                mess = 'success';
                listShow = resultShow;
            }


            response.status(res_id, mess, listShow, res);
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

            let res_id = 404;
            let mess = 'not found data';
            let listShow = {};
            if (body.links.type === 0) {
                let sql_show = QueryString.links();
                let params_show = QueryParams.links(body.links);
                const resultShow = await ResultDB.ResultParams(sql_show, params_show);
                if (resultShow.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    listShow = resultShow;
                }
                response.status(res_id, mess, listShow, res);
                return false;
            } else {
                let sql_show = QueryString.linkswithtype();
                let params_show = QueryParams.linkswithtype(body.links);
                const resultShow = await ResultDB.ResultParams(sql_show, params_show);
                if (resultShow.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    listShow = resultShow;
                }
                response.status(res_id, mess, listShow, res);
                return false;
            }


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

            let res_id = 404;
            let mess = 'not found data';
            let listShow = {};

            let sql_show = QueryString.news();
            let params_show = QueryParams.news(body.news);
            const resultShow = await ResultDB.ResultParams(sql_show, params_show);
            if (resultShow.length > 0) {
                res_id = 200;
                mess = 'success';
                listShow = resultShow;
            }
            response.status(res_id, mess, listShow, res);



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

            let res_id = 404;
            let mess = 'not found data';
            let listShow = {};

            let sql_show = QueryString.question_answer();
            let params_show = QueryParams.question_answer(body.question_answer);
            const resultShow = await ResultDB.ResultParams(sql_show, params_show);
            if (resultShow.length > 0) {
                res_id = 200;
                mess = 'success';
                listShow = resultShow;
            }
            response.status(res_id, mess, listShow, res);



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

            let res_id = 404;
            let mess = 'not found data';
            let listShow = {};
            if (body.info_add.type === 0) {
                let sql_show = QueryString.info_add();
                let params_show = QueryParams.info_add(body.info_add);
                const resultShow = await ResultDB.ResultParams(sql_show, params_show);
                if (resultShow.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    listShow = resultShow;
                }
                response.status(res_id, mess, listShow, res);
            } else {
                let sql_show = QueryString.info_addwittype();
                let params_show = QueryParams.info_addwittype(body.info_add);
                const resultShow = await ResultDB.ResultParams(sql_show, params_show);
                if (resultShow.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    listShow = resultShow;
                }
                response.status(res_id, mess, listShow, res);
            }
        } catch (error) {
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}

exports.search_top = (req, res) => {
    const body = req.body;
    async function runFunc() {
        try {

            var productLists = [];
            let res_id = 404;
            let mess = 'not found data';
                let sql = QueryString.show_product_search(body.search_top.search);
                console.log(sql);
                const resultLists = await ResultDB.ResultDb(sql);
                if (resultLists.length > 0) {
                    res_id = 200;
                    mess = 'success';
                    for (let k = 0; k < resultLists.length; k++) {
                        let pro_id = resultLists[k].ident;

                        let sql_search = QueryString.search_top();
                        let params_search = QueryParams.search_top(pro_id);
                        const resultSearch = await ResultDB.ResultParamsOne(sql_search, params_search);
                        let top = 0;
                        if (typeof resultSearch != "undefined") {
                            top = 1;
                        }

                        let sql_main = QueryStringInfo.main_catalog_one();
                        let params_main = QueryParamsInfo.main_catalog_one(resultLists[k].main_ident);
                        const resultMain = await ResultDB.ResultParamsOne(sql_main, params_main);
                        let main_name="";
                        if (typeof resultMain != "undefined") {
                            main_name = resultMain.name;
                        }

                        let sql_sub = QueryStringInfo.sub_catalog_one();
                        let params_sub = QueryParamsInfo.sub_catalog_one(resultLists[k].sub_ident);
                        const resultSub = await ResultDB.ResultParamsOne(sql_sub, params_sub);
                        let sub_name="";
                        if (typeof resultSub != "undefined") {
                            sub_name = resultSub.name;
                        }
                        
                        resultLists[k].top = top;
                        resultLists[k].main_name = main_name;
                    }
                    productLists = resultLists;
                }
             
            response.status(res_id, mess, productLists, res);
        } catch (error) {
            console.log(error);
            response.status(300, 'error', error.sqlMessage, res);
        }
    }
    runFunc();
}