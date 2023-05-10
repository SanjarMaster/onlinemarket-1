const datetime = require('node-datetime');

function main_catalog() {
    let query = 'UPDATE `main_catalog` SET `maca_status`=?, `maca_name`=?, `maca_iconfile`=? WHERE `maca_id`=?';
    return query;
}

function main_catalog_status() {
    let query = 'UPDATE `main_catalog` SET `maca_status`=? WHERE `maca_id`=?';
    return query;
}

function sub_catalog() {
    let query = 'UPDATE `sub_catalog` SET `subca_macaid`=?, `subca_status`=?,\
    `subca_name`=?,`subca_iconfile`=? WHERE `subca_id`=?';
    return query;
}

function sub_catalog_status() {
    let query = 'UPDATE `sub_catalog` SET `subca_status`=? WHERE `subca_id`=?';
    return query;
}

function price_list() {
    let query = 'UPDATE `price_list` SET `pril_status`=?, `pril_name`=?, `pril_comment`=? WHERE `pril_id`=?';
    return query;
}

function price_list_status() {
    let query = 'UPDATE `price_list` SET `pril_status`=? WHERE `pril_id`=?';
    return query;
}

function main_parameterslist() {
    let query = 'UPDATE `main_parameterslist` SET `maparl_status`=?, `maparl_name`=?, `maparl_comment`=? WHERE `maparl_id`=?';
    return query;
}

function main_parameterslist_status() {
    let query = 'UPDATE `main_parameterslist` SET `maparl_status`=? WHERE `maparl_id`=?';
    return query;
}

function parameters_list() {
    let query = 'UPDATE `parameters_list` SET `parl_status`=?, `parl_name`=?, `parl_comment`=?,`parl_mainparlid`=? WHERE `parl_id`=?';
    return query;
}

function parameters_list_status() {
    let query = 'UPDATE `parameters_list` SET `parl_status`=? WHERE `parl_id`=?';
    return query;
}

function color_list() {
    let query = 'UPDATE `color_list` SET `coll_status`=?, `coll_name`=?, `coll_code`=? WHERE `coll_id`=?';
    return query;
}

function color_list_status() {
    let query = 'UPDATE `color_list` SET `coll_status`=? WHERE `coll_id`=?';
    return query;
}

function main_parameterslist_forfiltr() {
    let query = 'UPDATE `main_parameterslist` SET `maparl_filtrview`=? WHERE `maparl_id`=?';
    return query;
}

function parameters_list_forfiltr() {
    let query = 'UPDATE `parameters_list` SET `parl_filtrview`=? WHERE `parl_id`=?';
    return query;
}

function filtr_list() {
    let query = 'UPDATE `filtr_params` SET `filpar_name`=?,\
     `filpar_value`=?,`filpar_type`=?,`filpar_mainparid`=? WHERE `filpar_id`=?';
    return query;
}

function filtr_list_status() {
    let query = 'UPDATE `filtr_params` SET `filpar_status`=? WHERE `filpar_id`=?';
    return query;
}

function country_list() {
    let query = 'UPDATE `country` SET `c_name`=? WHERE `c_id`=?';
    return query;
}

function country_list_status() {
    let query = 'UPDATE `country` SET `c_status`=? WHERE `c_id`=?';
    return query;
}

function region_list() {
    let query = 'UPDATE `regions` SET `r_name`=? WHERE `r_id`=?';
    return query;
}

function region_list_status() {
    let query = 'UPDATE `regions` SET `r_status`=? WHERE `r_id`=?';
    return query;
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
module.exports.parameters_list_forfiltr=parameters_list_forfiltr;
module.exports.filtr_list=filtr_list;
module.exports.filtr_list_status=filtr_list_status;
module.exports.country_list=country_list;
module.exports.country_list_status=country_list_status;
module.exports.region_list=region_list;
module.exports.region_list_status=region_list_status;