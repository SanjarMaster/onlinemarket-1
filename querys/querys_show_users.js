const datetime = require('node-datetime');

function phone_search() {
    let query = 'SELECT users_phone as phone,\
    users_ism as ism,users_fam as fam ,users_adress as adress ,\
    users_interid as id,0 as new_user\
    FROM users WHERE  users_phone=?';
    return query;
}

function phoneandpassword_search() {
    let query = 'SELECT users_phone as phone,\
    users_ism as ism,users_fam as fam ,users_adress as adress ,\
    users_interid as id,0 as new_user\
    FROM users WHERE users_phone=? AND users_password=?';
    return query;
}

function sms_confirm() {
    let query = 'SELECT sc_id FROM sms_code WHERE sc_status=? AND sc_code=?';
    return query;
}

function phone_insert() {
    let query = 'INSERT INTO users(users_status,users_phone,users_interid) VALUES(?,?,?)';
    return query;
}
 
function user_interid(){
    let query = 'INSERT INTO `user_interid` (`uii_id`, `uii_datetime`) VALUES (?, ?)';
    return query;
}

function edit_data(){
    let query = 'UPDATE users SET users_phone=?,users_ism=?,users_fam=? WHERE users_interid=?';
    return query;
}

function phone_search_id() {
    let query = 'SELECT users_phone as phone,\
    users_ism as ism,users_fam as fam ,users_adress as adress ,users_interid as id\
    FROM users WHERE users_status=? AND users_phone=? and users_interid!=?';
    return query;
}

function user_search_id() {
    let query = 'SELECT users_interid as id\
    FROM users WHERE  users_interid=?';
    return query;
}

function edit_password(){
    let query = 'UPDATE users SET users_password=? WHERE users_interid=?';
    return query;
}

function insert_adress(){
    let query = 'INSERT INTO user_adress \
    (ua_uid, ua_status, ua_cid,\
    ua_rid, ua_adress, ua_home,\
    ua_flat, ua_main, ua_lat,\
    ua_lng)\
    VALUES(?,?,?,?,?,?,?,?,?,?)';
    return query;
}

function edit_adress(){
    let query = 'UPDATE user_adress\
    SET  ua_cid=?, ua_rid=?, ua_adress=?,\
    ua_home=?, ua_flat=?, ua_main=?, ua_lat=?, ua_lng=?\
    WHERE ua_id=?';
    return query;
}

function edit_adress_status(){
    let query = 'UPDATE user_adress SET ua_status=? WHERE ua_id=?';
    return query;
}

function show_adress(){
    let query = 'SELECT ua_id as ident, ua_status as status, \
    c.c_name  as c_name, r.r_name  as r_name, ua_adress as adress, \
    ua_home as home, ua_flat as flat, ua_main as main, ua_lat as lat, ua_lng as lng\
    FROM user_adress ua,country c ,regions r WHERE ua_uid=? AND ua_status=? \
    and ua.ua_cid =c.c_id and ua.ua_rid =r.r_id \
    and c.c_id =r.r_cid';
    return query;
}

function favourites_insert(){
    let query = 'INSERT INTO user_favourites\
    (uf_uid, uf_proid, uf_status)\
    VALUES(?, ?, ?)';
    return query;
}

function show_product_favourites(){
    let sql='SELECT pro_id as ident,pro_status as name,\
    pro_code as code,pro_mainprice as main_price,pro_count as count,\
    pro_title as title FROM products,user_favourites \
    WHERE pro_status=? AND products.pro_id=user_favourites.uf_proid \
    AND user_favourites.uf_status=? AND user_favourites.uf_uid=? ORDER BY pro_name ASC';
    return sql;
}

function favourites_insert_search() {
    let query = 'SELECT uf_id FROM user_favourites WHERE uf_uid=? AND uf_proid=?';
    return query;
}

function status_product_favourites(){
    let sql='UPDATE user_favourites SET uf_status=? WHERE uf_uid=? AND uf_proid=?';
    return sql;
}

function admin_enter() {
    let query = 'SELECT ad_id as ident,ad_fio as fio\
    FROM admin WHERE ad_login=? AND ad_parol=?';
    return query;
}


module.exports.phone_search=phone_search;
module.exports.phone_insert=phone_insert;
module.exports.user_interid=user_interid;
module.exports.edit_data=edit_data;
module.exports.phone_search_id=phone_search_id;
module.exports.user_search_id=user_search_id;
module.exports.edit_password=edit_password;
module.exports.insert_adress=insert_adress;
module.exports.edit_adress=edit_adress;
module.exports.edit_adress_status=edit_adress_status;
module.exports.show_adress=show_adress;
module.exports.favourites_insert=favourites_insert;
module.exports.show_product_favourites=show_product_favourites;
module.exports.favourites_insert_search=favourites_insert_search;
module.exports.status_product_favourites=status_product_favourites;
module.exports.sms_confirm=sms_confirm;
module.exports.phoneandpassword_search=phoneandpassword_search;
module.exports.admin_enter=admin_enter;