const datetime = require('node-datetime');

function product_insert(data) {
    const params = [data.main_ident,data.sub_ident,1,
    data.name,data.code,data.price,
    data.count,data.title,data.delivery,
    data.photo];
    return params;
}

function product_insert_photos(ID,name) {
    const params = [ID,1,name];
    return params;
}

function product_insert_colors(ID,IDC) {
    const params = [ID,1,IDC];
    return params;
}

function product_insert_price(ID,IDPR,value) {
    const params = [ID,1,IDPR,value];
    return params;
}

function product_insert_params(ID,IDPR,value) {
    const params = [ID,1,IDPR,value];
    return params;
}

function product_comment(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.pro_ident,data.id,1,dateTime,data.comment];
    return params;
}

function product_rating(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.pro_ident,data.rating,dateTime];
    return params;
}

function product_rating_up(pro_ident,rating) {
    const params = [rating,pro_ident];
    return params;
}

function product_top(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [data.pro_ident,1,dateTime];
    return params;
}

function product_top_search(data) {
    const params = [data.pro_ident];
    return params;
}

function applications(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [dateTime,1,data.fio,data.email,data.phone];
    return params;
}

function links(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [1,data.type,data.txt,dateTime];
    return params;
}

function news(data) {
    var dt = datetime.create();
    var dateTime = dt.format('Y-m-d H:M:S');
    const params = [1,dateTime,data.title,data.short,data.more,data.photo];
    return params;
}
 
function question_answer(data) {
    const params = [1,data.question,data.answer];
    return params;
}

function info_add(data) {
    const params = [1,data.type,data.name,data.value];
    return params;
}

function product_edit(data) {
    const params = [data.main_ident,data.sub_ident,
    data.name,data.code,data.price,
    data.count,data.title,data.delivery,
    data.photo,data.pro_ident];
    return params;
}

module.exports.product_insert=product_insert;
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