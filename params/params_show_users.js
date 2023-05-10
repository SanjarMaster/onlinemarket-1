const datetime = require('node-datetime');
const md5 = require('md5');

function phone_search(data) {
    const params = [data.phone];
    return params;
}

function phoneandpassword_search(data) {
    const params = [data.phone,md5(data.password)];
    return params;
}

function sms_confirm(data) {
    const params = [1,data.code];
    return params;
}

function phone_insert(data,inter_id){
    const params=[0,data.phone,inter_id];
    return params;
}

function user_interid(data){
    var dt = datetime.create();
    var dateIn2 = dt.format('Y-m-d H:M:S');
    const params=[null,dateIn2];
    return params;

}

function edit_data(data){
    const params=[data.phone,data.ism,data.fam,data.id];
    return params;

}

function phone_search_id(data) {
    const params = [1,data.phone,data.id];
    return params;
}

function user_search_id(data) {
    const params = [data.id];
    return params;
}

function edit_password(data) {
    const params = [md5(data.password),data.id];
    return params;
}

function insert_adress(data) {
    const params = [data.id,1,data.c_ident,data.r_ident,data.adress,data.home,data.flat,data.main_adress,data.lat,data.lng];
    return params;
}

function edit_adress(data) {
    const params = [data.c_ident,data.r_ident,data.adress,data.home,data.flat,data.main_adress,data.lat,data.lng,data.idnet];
    return params;
}

function edit_adress_status(data) {
    const params = [data.ident,data.view];
    return params;
}

function show_adress(data) {
    const params = [data.id,1];
    return params;
}

function favourites_insert(data) {
    const params = [data.id,data.pro_ident,1];
    return params;
}

function show_product_favourites(data) {
    const params = [1,1,data.id];
    return params;
}

function favourites_insert_search(data) {
    const params = [data.id,data.pro_ident];
    return params;
}

function status_product_favourites(data) {
    const params = [data.view,data.id,data.pro_ident];
    return params;
}

function admin_enter(data) {
    const params = [data.login,data.parol];
    return params;
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