const datetime = require('node-datetime');

function show_settings(type) {
    const params = [type];
    return params;
}

function main_catalog(data) {
    const params = [1];
    return params;
}

function sub_catalog_bymain(main_ident) {
    const params = [1,main_ident];
    return params;
}

function show_product_bymain(main_ident){
    const params = [1,main_ident];
    return params;  
}

function show_product_bysub(sub_ident){
    const params = [1,sub_ident];
    return params;  
}

function show_product_byID(pro_ident){
    const params = [pro_ident];
    return params;  
}

function show_product_photos(pro_ident){
    const params = [pro_ident,1];
    return params;  
}

function show_product_colors(pro_ident){
    const params = [pro_ident,1];
    return params;  
}

function show_product_prices(pro_ident){
    const params = [pro_ident,1];
    return params;  
}

function show_product_parametrs(pro_ident){
    const params = [pro_ident,1];
    return params;  
}

function show_filtrs_bymain(main_ident){
    const params = [1,main_ident];
    return params;  
}

function product_comment(pro_ident){
    const params = [pro_ident,1];
    return params;  
}

function product_rating(pro_ident){
    const params = [pro_ident];
    return params;  
}

function product_top(data){
    const params = [1];
    return params;  
}

function applications(data){
    const params = [];
    return params;  
}

function show_product_all(data){
    const params = [1];
    return params;  
}

function search_top(pro_id){
    const params = [pro_id];
    return params;  
}

function links(data){
    const params = [1];
    return params;  
}

function linkswithtype(data){
    const params = [1,data.type];
    return params;  
}

function news(data){
    const params = [1];
    return params;  
}

function question_answer(data){
    const params = [1];
    return params;  
}

function info_add(data){
    const params = [1];
    return params;  
}

function info_addwittype(data){
    const params = [1,data.type];
    return params;  
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