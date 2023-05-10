const datetime = require('node-datetime');

function insert() {
    let query = 'INSERT INTO basket (bas_uid, bas_proid, bas_status,bas_datein,bas_count)\
    VALUES(?, ?, ?,?,?)';
    return query;
}
 
function search_product() {
    let query = 'SELECT bas_id,bas_count FROM basket WHERE  bas_uid=? \
    AND bas_proid=? AND bas_status=?';
    return query;
}

function update_count() {
    let query = 'UPDATE basket SET bas_count=? WHERE bas_id=?';
    return query;
}

function show_list() {
    let sql='SELECT bas_id as ident, pro_id as pro_ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,bas_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating FROM products,basket \
    WHERE pro_status=? AND bas_proid=pro_id AND bas_uid=? AND bas_status=? \
    ORDER BY pro_name ASC';
    return sql;
}

function update_status() {
    let query = 'UPDATE basket SET bas_status=?,bas_count=? WHERE bas_id=?';
    return query;
}

function list_withid() {
    let sql='SELECT pro_id as pro_ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,0 as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating FROM products \
    WHERE pro_id=?';
    return sql;
}

module.exports.insert=insert;
module.exports.search_product=search_product;
module.exports.update_count=update_count;
module.exports.show_list=show_list;
module.exports.update_status=update_status;
module.exports.list_withid=list_withid;