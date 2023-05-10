const datetime = require('node-datetime');

function main_catalog(data) {
    const params = [1];
    return params;
}

function main_catalog_one(data) {
    const params = [data.ident];
    return params;
}

function sub_catalog(data) {
    const params = [1];
    return params;
}

function sub_catalog_one(data) {
    const params = [data.ident];
    return params;
}

function sub_catalog_withmain(data) {
    const params = [1,1];
    return params;
}

function sub_catalog_one_withmain(data) {
    const params = [data.ident];
    return params;
}

function sub_catalog_bymain(data) {
    const params = [1,data.main_ident];
    return params;
}

function price_list(data) {
    const params = [1];
    return params;
}

function price_list_one(data) {
    const params = [data.ident];
    return params;
}

function main_parameterslist(data) {
    const params = [1];
    return params;
}

function main_parameterslist_one(data) {
    const params = [data.ident];
    return params;
}

function parameters_list(data) {
    const params = [1];
    return params;
}

function parameters_list_one(data) {
    const params = [data.ident];
    return params;
}

function color_list(data) {
    const params = [1];
    return params;
}

function color_list_one(data) {
    const params = [data.ident];
    return params;
}

function filtr_list(data) {
    const params = [1];
    return params;
}

function country_list(data) {
    const params = [1];
    return params;
}

function country_list_one(data) {
    const params = [data.ident];
    return params;
}

function region_list(data) {
    const params = [1,1];
    return params;
}

function region_list_one(data) {
    const params = [1,1,data.ident];
    return params;
}

function region_list_bycid(data) {
    const params = [data.c_ident,1];
    return params;
}





module.exports.main_catalog = main_catalog;
module.exports.main_catalog_one = main_catalog_one;
module.exports.sub_catalog = sub_catalog;
module.exports.sub_catalog_one = sub_catalog_one;
module.exports.sub_catalog_withmain = sub_catalog_withmain;
module.exports.sub_catalog_one_withmain=sub_catalog_one_withmain;
module.exports.sub_catalog_bymain=sub_catalog_bymain;
module.exports.price_list=price_list;
module.exports.price_list_one=price_list_one;
module.exports.main_parameterslist=main_parameterslist;
module.exports.main_parameterslist_one=main_parameterslist_one;
module.exports.parameters_list=parameters_list;
module.exports.parameters_list_one=parameters_list_one;
module.exports.color_list=color_list;
module.exports.color_list_one=color_list_one;
module.exports.filtr_list=filtr_list;
module.exports.country_list=country_list;
module.exports.country_list_one=country_list_one;
module.exports.region_list=region_list;
module.exports.region_list_one=region_list_one;
module.exports.region_list_bycid=region_list_bycid;