const datetime = require('node-datetime');

function main_catalog(data) {
    const params = [1,data.name,data.iconfile];
    return params;
}

function sub_catalog(data) {
    const params = [data.main_ident,1,data.name,data.iconfile];
    return params;
}

function price_list(data) {
    const params = [1,data.name,data.comment];
    return params;
}

function main_parameterslist(data) {
    const params = [1,data.name,data.comment];
    return params;
}

function parameters_list(data) {
    const params = [1,data.name,data.comment,data.mainpar_ident];
    return params;
}

function color_list(data) {
    const params = [1,data.name,data.code];
    return params;
}

function filtr_list(data) {
    const params = [data.name,data.value,data.type,data.mainpar_ident,1];
    return params;
}

function country_list(data) {
    const params = [data.name,1];
    return params;
}

function region_list(data) {
    const params = [data.c_ident,data.name,1];
    return params;
}



module.exports.main_catalog = main_catalog;
module.exports.sub_catalog = sub_catalog;
module.exports.price_list=price_list;
module.exports.main_parameterslist=main_parameterslist;
module.exports.parameters_list=parameters_list;
module.exports.color_list=color_list;
module.exports.filtr_list=filtr_list;
module.exports.country_list=country_list;
module.exports.region_list=region_list;