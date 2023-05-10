const datetime = require('node-datetime');

function product_insert() {
    let query = 'INSERT INTO products\
    (pro_macaid, pro_subcaid, pro_status,\
    pro_name, pro_code, pro_mainprice,\
    pro_count, pro_title, pro_delivery,\
    pro_mainphoto)\
    VALUES(?,?,?,?,?,?,?,?,?,?)';
    return query;
}

function product_insert_photos() {
    let query = 'INSERT INTO product_photos\
    (proph_proid, proph_status, proph_put)\
    VALUES(?, ?, ?)';
    return query;
}

function product_insert_colors() {
    let query = 'INSERT INTO product_colors\
    (procoll_proid, procoll_status, procoll_collid)\
    VALUES(?, ?, ?)';
    return query;
}

function product_insert_price() {
    let query = 'INSERT INTO product_price\
    (propri_proid, propri_status, propri_prilid,propri_value)\
    VALUES(?, ?, ?,?)';
    return query;
}

function product_insert_params() {
    let query = 'INSERT INTO product_parameters\
    (proparl_proid, proparl_status, proparl_parlid,proparl_value)\
    VALUES(?, ?, ?,?)';
    return query;
}

function product_comment() {
    let query = 'INSERT INTO product_comments \
    (pc_proid, pc_uid, pc_status, pc_datein, pc_comment) \
    VALUES(?, ?, ?, ?, ?)';
    return query;
}

function product_rating() {
    let query = 'INSERT INTO product_ratings \
    (pr_proid, pr_rating,pr_datein) \
    VALUES(?, ?,?)';
    return query;
}

function product_rating_up() {
    let query = 'UPDATE products SET pro_rating=? WHERE pro_id=?';
    return query;
}

function product_top() {
    let query = 'INSERT INTO product_top \
    (pt_proid, pt_status, pt_datein) \
    VALUES(?, ?, ?)';
    return query;
}

function product_top_search() {
    let query = 'SELECT pt_id FROM  product_top WHERE pt_proid=?';
    return query;
}

function applications() {
    let query = 'INSERT INTO applications \
    (apps_datein,apps_status,apps_fio,\
    apps_email,apps_phone) \
    VALUES(?, ?, ?,?,?)';
    return query;
}

function links() {
    let query = 'INSERT INTO links \
    (link_status,link_type,link_txt,link_datein) \
    VALUES(?, ?, ?,?)';
    return query;
}

function news() {
    let query = 'INSERT INTO news \
    (ns_status,ns_datein,ns_title,ns_short,ns_more,ns_photo) \
    VALUES(?, ?, ?,?,?,?)';
    return query;
}

function question_answer() {
    let query = 'INSERT INTO question_answer \
    (quan_status,quan_question,quan_answer) \
    VALUES(?, ?, ?)';
    return query;
}

function info_add() {
    let query = 'INSERT INTO info_add \
    (inadd_status,inadd_type,inadd_name,inadd_value) \
    VALUES(?, ?, ?,?)';
    return query;
}

function product_edit() {
    let query = 'UPDATE products SET\
    pro_macaid=?, pro_subcaid=?, \
    pro_name=?, pro_code=?, pro_mainprice=?,\
    pro_count=?, pro_title=?, pro_delivery=?,\
    pro_mainphoto=? WHERE pro_id=?';
    return query;
}



module.exports.product_insert = product_insert;
module.exports.product_insert_photos=product_insert_photos;
module.exports.product_insert_colors=product_insert_colors;
module.exports.product_insert_price=product_insert_price;
module.exports.product_insert_params=product_insert_params;
module.exports.product_comment=product_comment;
module.exports.product_rating=product_rating; 
module.exports.product_rating_up=product_rating_up;
module.exports.product_top=product_top;
module.exports.product_top_search=product_top_search;
module.exports.applications=applications;
module.exports.links=links;
module.exports.news=news;
module.exports.question_answer=question_answer;
module.exports.info_add=info_add;
module.exports.product_edit=product_edit;