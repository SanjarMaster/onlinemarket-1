const datetime = require('node-datetime');

function main_catalog() {
    let query = 'SELECT `maca_id` as ident,`maca_status` as status,\
    `maca_name` as name,`maca_iconfile` as iconfile FROM `main_catalog` \
    WHERE `maca_status` = ? ORDER BY `maca_name` ASC';
    return query;
}

function main_catalog_one() {
    let query = 'SELECT `maca_id` as ident,`maca_status` as status,\
    `maca_name` as name,`maca_iconfile` as iconfile FROM `main_catalog` \
    WHERE `maca_id` = ?';
    return query;
}

function sub_catalog() {
    let query = 'SELECT `subca_id` as ident,`subca_macaid` as main_ident,`subca_status` as status,\
    `subca_name` as name,`subca_iconfile` as iconfile \
    FROM `sub_catalog` WHERE `subca_status` = ? ORDER BY `subca_name` ASC';
    return query;
}

function sub_catalog_one() {
    let query = 'SELECT `subca_id` as ident,`subca_macaid` as main_ident,`subca_status` as status,\
    `subca_name` as name,`subca_iconfile` as iconfile \
    FROM `sub_catalog` WHERE `subca_id`=?';
    return query;
}

function sub_catalog_withmain() {
    let query = 'SELECT `subca_id` as ident,`maca_name` as main_name,`subca_status` as status,\
    `subca_name` as name,`subca_iconfile` as iconfile \
    FROM `sub_catalog`,`main_catalog` WHERE `subca_status` = ? AND `main_catalog`.`maca_status`=?\
    AND `sub_catalog`.`subca_macaid`=`main_catalog`.`maca_id`\
    ORDER BY `sub_catalog`.`subca_name`,`main_catalog`.`maca_name` ASC';
    return query;
}

function sub_catalog_one_withmain() {
    let query = 'SELECT `subca_id` as ident,`maca_name` as main_name,`subca_status` as status,\
    `subca_name` as name,`subca_iconfile` as iconfile \
    FROM `sub_catalog`,`main_catalog` WHERE `subca_id` = ? \
    AND `sub_catalog`.`subca_macaid`=`main_catalog`.`maca_id`';
    return query;
}

function sub_catalog_bymain() {
    let query = 'SELECT `subca_id` as ident,`subca_macaid` as main_ident,`maca_name` as main_name,`subca_status` as status,\
    `subca_name` as name,`subca_iconfile` as iconfile \
    FROM `sub_catalog`,`main_catalog` WHERE `subca_status` = ? AND subca_macaid=? \
    AND `sub_catalog`.`subca_macaid`=`main_catalog`.`maca_id`\
    ORDER BY `subca_name` ASC';
    return query;
}

function price_list() {
    let query = 'SELECT `pril_id` as ident,`pril_status` as status,\
    `pril_name` as name,`pril_comment` as comment FROM `price_list` \
    WHERE `pril_status` = ? ORDER BY `pril_name` ASC';
    return query;
}

function price_list_one() {
    let query = 'SELECT `pril_id` as ident,`pril_status` as status,\
    `pril_name` as name,`pril_comment` as comment FROM `price_list` \
    WHERE `pril_id` = ?';
    return query;
}

function main_parameterslist() {
    let query = 'SELECT `maparl_id` as ident,`maparl_status` as status,\
    `maparl_name` as name,`maparl_comment` as comment FROM `main_parameterslist` \
    WHERE `maparl_status` = ? ORDER BY `maparl_name` ASC';
    return query;
}

function main_parameterslist_one() {
    let query = 'SELECT `maparl_id` as ident,`maparl_status` as status,\
    `maparl_name` as name,`maparl_comment` as comment FROM `main_parameterslist` \
    WHERE `maparl_id` = ?';
    return query;
}

function parameters_list() {
    let query = 'SELECT `parl_id` as ident,`parl_status` as status,\
    `parl_name` as name,`parl_comment` as comment FROM `parameters_list` \
    WHERE `parl_status` = ? ORDER BY `parl_name` ASC';
    return query;
}

function parameters_list_one() {
    let query = 'SELECT `parl_id` as ident,`parl_status` as status,\
    `parl_name` as name,`parl_comment` as comment FROM `parameters_list` \
    WHERE `parl_id` = ?';
    return query;
}

function color_list() {
    let query = 'SELECT `coll_id` as ident,`coll_status` as status,\
    `coll_name` as name,`coll_code` as code FROM `color_list` \
    WHERE `coll_status` = ? ORDER BY `coll_name` ASC';
    return query;
}

function color_list_one() {
    let query = 'SELECT `coll_id` as ident,`coll_status` as status,\
    `coll_name` as name,`coll_code` as code FROM `color_list` \
    WHERE `coll_id` = ?';
    return query;
}

function filtr_list() {
    let query = 'SELECT `filpar_id` as ident,`filpar_status` as status, \
    `filpar_name` as name,`filpar_value` as value,`filpar_type` as type, \
    `maparl_name` as mainname FROM `filtr_params`,`main_parameterslist` \
    WHERE `filpar_status` = ? AND filtr_params.filpar_mainparid=main_parameterslist.maparl_id \
    ORDER BY `filpar_name` ASC';
    return query;
}

function country_list() {
    let query = 'SELECT c_id as ident,c_name as name FROM `country` \
    WHERE `c_status` = ? ORDER BY `c_name` ASC';
    return query;
}

function country_list_one() {
    let query = 'SELECT c_id as ident,c_name as name FROM `country` \
    WHERE `c_id` = ? ORDER BY `c_name` ASC';
    return query;
}

function region_list() {
    let query = 'SELECT r.r_id as ident, c.c_name as c_name,r.r_name FROM `country` c,regions r\
    WHERE c.`c_status` = ? and c.c_id=r.r_cid and r.r_status=? ORDER BY r.`r_name` ASC';
    return query;
}

function region_list_one() {
    let query = 'SELECT r.r_id as ident, c.c_name as c_name,r.r_name FROM `country` c,regions r\
    WHERE c.`c_status` = ? and c.c_id=r.r_cid and r.r_status=? and r.r_id=? ORDER BY r.`r_name` ASC';
    return query;
}

function region_list_bycid() {
    let query = 'SELECT r.r_id as ident, r.r_name FROM regions r\
    WHERE r.r_cid=? and r.r_status=? ORDER BY r.`r_name` ASC';
    return query;
}






module.exports.main_catalog = main_catalog;
module.exports.main_catalog_one = main_catalog_one;
module.exports.sub_catalog = sub_catalog;
module.exports.sub_catalog_one=sub_catalog_one;
module.exports.sub_catalog_withmain =sub_catalog_withmain;
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
