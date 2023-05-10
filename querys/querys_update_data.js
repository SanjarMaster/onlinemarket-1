const datetime = require('node-datetime');

function product_top() {
    let query = 'DELETE FROM product_top WHERE pt_id=?';
    return query;
}

function applications_status() {
    let query = 'UPDATE applications SET apps_status=? WHERE apps_id=?';
    return query;
}

function links_status() {
    let query = 'UPDATE links SET link_status=? WHERE link_id=?';
    return query;
}

function news_status() {
    let query = 'UPDATE news SET ns_status=? WHERE ns_id=?';
    return query;
}

function question_answer_status() {
    let query = 'UPDATE question_answer SET quan_status=? WHERE quan_id=?';
    return query;
}

function info_add_status() {
    let query = 'UPDATE info_add SET inadd_status=? WHERE inadd_id=?';
    return query;
}

function product_status() {
    let query = 'UPDATE products SET pro_status=? WHERE pro_id=?';
    return query;
}



module.exports.product_top = product_top;
module.exports.applications_status=applications_status;
module.exports.links_status=links_status;
module.exports.news_status=news_status;
module.exports.question_answer_status=question_answer_status;
module.exports.info_add_status=info_add_status;
module.exports.product_status=product_status;