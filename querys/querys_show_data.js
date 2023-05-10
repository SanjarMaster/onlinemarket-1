const datetime = require('node-datetime');

function show_settings() {
    let query = 'SELECT * FROM settings WHERE sett_type=?';
    return query;
}

function main_catalog() {
    let query = 'SELECT `maca_id` as ident,\
    `maca_name` as name,`maca_iconfile` as iconfile FROM `main_catalog` \
    WHERE `maca_status` = ? ORDER BY `maca_name` ASC';
    return query;
}

function sub_catalog_bymain() {
    let query = 'SELECT `subca_id` as ident,\
    `subca_name` as name,`subca_iconfile` as iconfile \
    FROM `sub_catalog` WHERE `subca_status` = ? AND subca_macaid=? \
    ORDER BY `subca_name` ASC';
    return query;
}

function show_product_bymain(){
    let sql='SELECT pro_id as ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating FROM products WHERE pro_status=? AND pro_macaid=? ORDER BY pro_name ASC';
    return sql;
}

function show_product_bysub(sub_ident){
    let sql='SELECT pro_id as ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating FROM products WHERE pro_status=1 AND pro_subcaid='+sub_ident+' ORDER BY pro_name ASC';
    return sql;
}

function show_product_byID(){
    let sql='SELECT pro_id as ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title,pro_delivery as delivery,pro_mainphoto as photo,\
    pro_rating as rating FROM products WHERE pro_id=? ';
    return sql;
}

function show_product_photos(){
    let sql='SELECT proph_put as image,"" as caption FROM product_photos WHERE proph_proid=? AND proph_status=?';
    return sql;
}

function show_product_colors(){
    let sql='select cl.coll_name as name,cl.coll_code as coe  from product_colors pc ,color_list cl \
    where pc.procoll_proid= ? and pc.procoll_collid =cl.coll_id AND pc.procoll_status=?';
    return sql;
}

function show_product_prices(){
    let sql='select pl.pril_name as name ,pl.pril_comment as comment ,\
    pp.propri_value as value from product_price pp ,price_list pl \
    where pp.propri_proid =? and pp.propri_prilid =pl.pril_id AND pp.propri_status=? ';
    return sql;
}

function show_product_parametrs(){
    let sql='select pl.parl_name  as name,pl.parl_comment  as comment, \
    pp.proparl_value  as value from product_parameters pp ,parameters_list pl \
    where pp.proparl_proid =? and pp.proparl_parlid =pl.parl_id \
    and pl.parl_status =?';
    return sql;
}

function show_filtrs_bymain(){
    let query = 'SELECT `filpar_id` as ident, \
    `filpar_name` as name,`filpar_value` as value,`filpar_type` as type FROM `filtr_params` \
    WHERE `filpar_status` = ? AND filtr_params.filpar_mainparid=? \
    ORDER BY `filpar_name` ASC';
    return query;
}

function product_comment() {
    let query = 'SELECT pc_id as ident, pc_uid as id, \
    pc_datein as date_in, pc_comment as comment\
    FROM product_comments WHERE pc_proid=? and pc_status=? ORDER BY pc_id DESC';
    return query;
}

function product_rating() {
    let query = 'SELECT count(pr_id) as soni, sum(pr_rating) as summa \
    FROM product_ratings WHERE pr_proid=? ';
    return query;
}

function product_top() {
    let sql='SELECT pt_id as top_ident,pro_id as ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating \
    FROM products,product_top WHERE pro_status=? AND pro_id=pt_proid ORDER BY pro_name ASC';
    return sql;
}

function applications() {
    let sql='SELECT apps_id as ident, apps_datein as datein,apps_status as status,\
    apps_fio as fio,apps_email as email,apps_phone as phone \
    FROM applications  ORDER BY apps_id  ASC';
    return sql;
}

function show_product_all(){
    let sql='SELECT pro_id as ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating FROM products WHERE pro_status=? ORDER BY pro_id DESC';
    return sql;
}

function search_top(){
    let sql='SELECT pt_id FROM product_top WHERE pt_proid=?';
    return sql;
}

function links() {
    let sql='SELECT link_id as ident,link_type as type,link_txt as txt \
    FROM links WHERE link_status=? ORDER BY link_id ASC';
    return sql;
}

function linkswithtype() {
    let sql='SELECT link_id as ident,link_type as type,link_txt as txt \
    FROM links WHERE link_status=? AND link_type=? ORDER BY link_id ASC';
    return sql;
}

function news() {
    let sql='SELECT ns_id as ident,ns_datein as datein,ns_title as title, \
    ns_short as short,ns_more as more,ns_photo as photo\
    FROM news WHERE ns_status=? ORDER BY ns_id ASC';
    return sql;
}

function question_answer() {
    let sql='SELECT quan_id as ident,quan_question as question,quan_answer as answer \
    FROM question_answer WHERE quan_status=? ORDER BY quan_id ASC';
    return sql;
}

function info_add() {
    let sql='SELECT inadd_id as ident,inadd_type as type,inadd_name as name,inadd_value as value \
    FROM info_add WHERE inadd_status=? ORDER BY inadd_id ASC';
    return sql;
}

 
function info_addwittype() {
    let sql='SELECT inadd_id as ident,inadd_type as type,inadd_name as name,inadd_value as value \
    FROM info_add WHERE inadd_status=? AND inadd_type=? ORDER BY inadd_id ASC';
    return sql;
}
function show_product_search(search){
    let sql='SELECT pro_id as ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating,\
    pro_macaid as main_ident,pro_subcaid as sub_ident FROM products \
    WHERE pro_status=1 AND pro_name LIKE '+"'%"+search+"%'"+' ORDER BY pro_id DESC';
    return sql;
}


module.exports.show_settings=show_settings;
module.exports.main_catalog = main_catalog;
module.exports.sub_catalog_bymain=sub_catalog_bymain;
module.exports.show_product_bymain=show_product_bymain;
module.exports.show_product_bysub=show_product_bysub;
module.exports.show_product_byID=show_product_byID;
module.exports.show_product_photos=show_product_photos;
module.exports.show_product_colors=show_product_colors;
module.exports.show_product_prices=show_product_prices;
module.exports.show_product_parametrs=show_product_parametrs;
module.exports.show_filtrs_bymain=show_filtrs_bymain;
module.exports.product_comment=product_comment;
module.exports.product_rating=product_rating;
module.exports.product_top=product_top;
module.exports.applications=applications;
module.exports.show_product_all=show_product_all;
module.exports.search_top=search_top;
module.exports.links=links;
module.exports.linkswithtype=linkswithtype;
module.exports.news=news;
module.exports.question_answer=question_answer;
module.exports.info_add=info_add;
module.exports.info_addwittype=info_addwittype;
module.exports.show_product_search=show_product_search;
