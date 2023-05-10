const datetime = require('node-datetime');

function insert() {
    let query = 'INSERT INTO orders \
    (orders_uid, orders_status, orders_delivery_type,\
    orders_order, orders_pay_type, orders_comment,\
    orders_datein, orders_number,orders_amount) \
    VALUES(?, ?, ?, ?, ?, ?, ?, ?,?)';
    return query;
}

function insert_list() {
    let query = 'INSERT INTO orders_list \
    (orl_orderid, orl_productid, orl_status,orl_count) \
    VALUES(?, ?, ?,?)';
    return query;
}

function show_list() {
    let query = 'SELECT orders_id as ident, orders_status as status,\
    orders_delivery_type as delivery_type,orders_order as "order", \
    orders_pay_type as pay_type,orders_comment as comment, \
    orders_datein as datein,orders_number as number, orders_amount as amount \
     FROM orders WHERE orders_uid=? ORDER BY orders_id DESC ';
    return query;
}

function show_list_list() {
    let sql='SELECT orl_id as ident, pro_id as pro_ident,pro_name as name,\
    pro_code as code,pro_mainprice as main_price,orl_count as count,\
    pro_title as title,pro_mainphoto as photo,pro_rating as rating FROM products,orders_list \
    WHERE pro_status=? AND orl_productid=pro_id AND orl_orderid=? ORDER BY pro_name ASC';
    return sql;
}

function insert_click() {
    let query = 'INSERT INTO click \
    (ordernumber, status, tid,\
    amount, response, orderid,\
    datein) \
    VALUES(?, ?, ?, ?, ?, ?,?)';
    return query;
}

function update_order() {
    let query = 'UPDATE orders SET orders_status=? WHERE orders_id=? ';
    return query;
}


function order_search() {
    let query = 'SELECT * FROM WHERE orders_id=? ';
    return query;
}

module.exports.insert = insert;
module.exports.insert_list=insert_list;
module.exports.show_list=show_list;
module.exports.show_list_list=show_list_list;
module.exports.insert_click=insert_click;
module.exports.update_order=update_order;
module.exports.order_search=order_search;
