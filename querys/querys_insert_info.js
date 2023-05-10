const datetime = require('node-datetime');

function main_catalog() {
    let query = 'INSERT INTO `main_catalog` \
    (`maca_status`, `maca_name`, `maca_iconfile`) \
    VALUES (?,?,?)';
    return query;
}

function sub_catalog() {
    let query = 'INSERT INTO `sub_catalog` \
    (`subca_macaid`, `subca_status`, `subca_name`,`subca_iconfile`) \
    VALUES (?,?,?,?)';
    return query;
}

function price_list() {
    let query = 'INSERT INTO `price_list` \
    (`pril_status`, `pril_name`, `pril_comment`) \
    VALUES (?,?,?)';
    return query;
}

function main_parameterslist() {
    let query = 'INSERT INTO `main_parameterslist` \
    (`maparl_status`, `maparl_name`, `maparl_comment`) \
    VALUES (?,?,?)';
    return query;
}

function parameters_list() {
    let query = 'INSERT INTO `parameters_list` \
    (`parl_status`, `parl_name`, `parl_comment`,`parl_mainparlid`) \
    VALUES (?,?,?,?)';
    return query;
}

function color_list() {
    let query = 'INSERT INTO `color_list` \
    (`coll_status`, `coll_name`, `coll_code`) \
    VALUES (?,?,?)';
    return query;
}

function filtr_list() {
    let query = 'INSERT INTO `filtr_params` \
    (`filpar_name`, `filpar_value`, `filpar_type`,\
    `filpar_mainparid`,`filpar_status`) \
    VALUES (?,?,?,?,?)';
    return query;
}

function country_list() {
    let query = 'INSERT INTO `country` \
    (`c_name`, `c_status`) \
    VALUES (?,?)';
    return query;
}

function region_list() {
    let query = 'INSERT INTO `regions` \
    (`r_cid`, `r_name`,`r_status`) \
    VALUES (?,?,?)';
    return query;
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