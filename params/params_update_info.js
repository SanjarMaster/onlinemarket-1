const datetime = require('node-datetime');

function main_catalog(data) {
    const params = [data.status,data.name,data.iconfile,data.ident];
    return params;
}

function main_catalog_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function sub_catalog(data) {
    const params = [data.main_ident,data.status,data.name,data.iconfile,data.ident];
    return params;
}

function sub_catalog_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function price_list(data) {
    const params = [data.status,data.name,data.comment,data.ident];
    return params;
}

function price_list_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function main_parameterslist(data) {
    const params = [data.status,data.name,data.comment,data.ident];
    return params;
}

function main_parameterslist_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function parameters_list(data) {
    const params = [data.status,data.name,data.comment,data.mainpar_ident,data.ident];
    return params;
}

function parameters_list_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function color_list(data) {
    const params = [data.status,data.name,data.code,data.ident];
    return params;
}

function color_list_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function main_parameterslist_forfiltr(data) {
    const params = [data.view,data.ident];
    return params;
}

function parameters_list_forfiltr(data) {
    const params = [data.view,data.ident];
    return params;
}

function filtr_list(data) {
    const params = [data.name,data.value,data.type,data.mainpar_ident,data.ident];
    return params;
}

function filtr_list_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function country_list(data) {
    const params = [data.name,data.ident];
    return params;
}

function country_list_status(data) {
    const params = [data.view,data.ident];
    return params;
}

function region_list(data) {
    const params = [data.name,data.ident];
    return params;
}

function region_list_status(data) {
    const params = [data.view,data.ident];
    return params;
}



module.exports.main_catalog = main_catalog;
module.exports.main_catalog_status = main_catalog_status;
module.exports.sub_catalog = sub_catalog;
module.exports.sub_catalog_status = sub_catalog_status;
module.exports.price_list=price_list;
module.exports.price_list_status=price_list_status;
module.exports.main_parameterslist=main_parameterslist;
module.exports.main_parameterslist_status=main_parameterslist_status;
module.exports.parameters_list=parameters_list;
module.exports.parameters_list_status=parameters_list_status;
module.exports.color_list=color_list;
module.exports.color_list_status=color_list_status;
module.exports.main_parameterslist_forfiltr=main_parameterslist_forfiltr;
module.exports.parameters_list_forfiltr=parameters_list_forfiltr
module.exports.filtr_list=filtr_list;
module.exports.filtr_list_status=filtr_list_status;
module.exports.country_list=country_list;
module.exports.country_list_status=country_list_status;
module.exports.region_list=region_list;
module.exports.region_list_status=region_list_status;