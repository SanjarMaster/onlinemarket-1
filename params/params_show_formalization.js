const datetime = require('node-datetime');


function insert(data,order_number) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.id,1,data.delivery_type,data.order,data.pay_type,data.comment,dateTime,order_number,data.all_price];
    return params;
}

function insert_list(order_id,pro_ident,count) {
    const params = [order_id,pro_ident,1,count];
    return params;
}

function show_list(data) {
    const params = [data.id];
    return params;
}

function show_list_list(order_id) {
    const params = [1,order_id];
    return params;
}

function insert_click(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.number,data.status,data.tid,data.amount,data.response,data.order_ident,dateTime];
    return params;
}

function update_order(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.status,data.order_ident];
    return params;
}


function order_search(order_id) {
     const params = [order_id];
    return params;
}




module.exports.insert=insert;
module.exports.insert_list=insert_list;
module.exports.show_list=show_list;
module.exports.show_list_list=show_list_list;
module.exports.insert_click=insert_click;
module.exports.update_order=update_order;
module.exports.order_search=order_search;
