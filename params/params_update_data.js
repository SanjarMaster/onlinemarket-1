const datetime = require('node-datetime');

function product_top(data) {
    const params = [data.ident];
    return params;
}

function applications_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function links_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function news_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function question_answer_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function info_add_status(data) {
    const params = [data.status,data.ident];
    return params;
}

function product_status(data) {
    const params = [data.status,data.ident];
    return params;
}


module.exports.product_top = product_top;
module.exports.applications_status=applications_status;
module.exports.links_status=links_status;
module.exports.news_status=news_status;
module.exports.question_answer_status=question_answer_status;
module.exports.info_add_status=info_add_status;
module.exports.product_status=product_status;
