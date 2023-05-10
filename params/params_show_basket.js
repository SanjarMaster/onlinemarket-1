const datetime = require('node-datetime');


function insert(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.id,data.pro_ident,0,dateTime,data.count];
    return params;
}

function search_product(data) {
    const params = [data.id,data.pro_ident,0];
    return params;
}

function update_count(count,pro_ident) {
    const params = [count,pro_ident];
    return params;
}

function show_list(data) {
    const params = [1,data.id,0];
    return params;
}

function update_status(count,bas_ident) {
    const params = [-1,count,bas_ident];
    return params;
}

function list_withid(pro_ident) {
    const params = [pro_ident];
    return params;
}


 
module.exports.insert=insert;
module.exports.search_product=search_product;
module.exports.update_count=update_count;
module.exports.show_list=show_list;
module.exports.update_status=update_status;
module.exports.list_withid=list_withid;