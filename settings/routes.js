module.exports = (app) => {

    const InsertInfo = require('../modules/InsertInfo');
    const UpdateInfo = require('../modules/UpdateInfo');
    const ShowInfo = require('../modules/ShowInfo');
    const InsertData = require('../modules/InsertData');
    const ShowData = require('../modules/ShowData');
    const Users = require('../modules/Users');
    const Basket = require('../modules/Basket');
    const Formalization = require('../modules/Formalization');
    const UpdateData = require('../modules/UpdateData');

    /*
    app
        .route('/phone_search')
        .get(Sheepers.getAllUsers)
    */

    //**************************************** Formalization (zakaz) ***********************************
    app
        .route('/onlinemarket/formalization/insert')
        .post(Formalization.insert)
    app
        .route('/onlinemarket/formalization/show_list')
        .post(Formalization.show_list)
    app
        .route('/onlinemarket/formalization/pay_click')
        .post(Formalization.pay_click)
    app
        .route('/onlinemarket/formalization/cancel')
        .post(Formalization.cancel)

    //**************************************** Basket(Korzinka) ********************************
    app
        .route('/onlinemarket/basket/insert')
        .post(Basket.insert)
    app
        .route('/onlinemarket/basket/insert_all')
        .post(Basket.insert_all)
    app
        .route('/onlinemarket/basket/show_list')
        .post(Basket.show_list)
    app
        .route('/onlinemarket/basket/count_minus')
        .post(Basket.count_minus)
    app
        .route('/onlinemarket/basket/delete')
        .post(Basket.delete)
    app
        .route('/onlinemarket/basket/list_withid')
        .post(Basket.list_withid)

    //**************************************** Users ********************************/
    app
        .route('/onlinemarket/users/phone_search')
        .post(Users.phone_search)
    app
        .route('/onlinemarket/users/sms_confirm')
        .post(Users.sms_confirm)
    app
        .route('/onlinemarket/users/phoneandpassword_search')
        .post(Users.phoneandpassword_search)
    app
        .route('/onlinemarket/users/edit_data')
        .post(Users.edit_data)
    app
        .route('/onlinemarket/users/edit_password')
        .post(Users.edit_password)
    app
        .route('/onlinemarket/users/insert_adress')
        .post(Users.insert_adress)
    app
        .route('/onlinemarket/users/edit_adress')
        .post(Users.edit_adress)
    app
        .route('/onlinemarket/users/edit_adress_status')
        .post(Users.edit_adress_status)
    app
        .route('/onlinemarket/users/show_adress')
        .post(Users.show_adress)
    app
        .route('/onlinemarket/users/favourites/insert')
        .post(Users.favourites_insert)
    app
        .route('/onlinemarket/users/favourites/show')
        .post(Users.favourites_show)
    app
        .route('/onlinemarket/users/favourites/status')
        .post(Users.favourites_status)
    app
        .route('/onlinemarket/users/admin_enter')
        .post(Users.admin_enter)


    //**************************************** ShowData ********************************/
    app
        .route('/onlinemarket/show/show_catalogs')
        .post(ShowData.show_catalogs)
    app
        .route('/onlinemarket/show/show_products')
        .post(ShowData.show_products)
    app
        .route('/onlinemarket/show/view_product')
        .post(ShowData.view_product)
    app
        .route('/onlinemarket/show/show_filtrs')
        .post(ShowData.show_filtrs)
    app
        .route('/onlinemarket/show/show_filtrs_result')
        .post(ShowData.show_filtrs_result)
    app
        .route('/onlinemarket/show/product_comment')
        .post(ShowData.product_comment)
    app
        .route('/onlinemarket/show/product_top')
        .post(ShowData.product_top)
    app
        .route('/onlinemarket/show/applications')
        .post(ShowData.applications)
    app
        .route('/onlinemarket/show/links')
        .post(ShowData.links)
    app
        .route('/onlinemarket/show/news')
        .post(ShowData.news)
    app
        .route('/onlinemarket/show/question_answer')
        .post(ShowData.question_answer)
    app
        .route('/onlinemarket/show/info_add')
        .post(ShowData.info_add)
    app
        .route('/onlinemarket/show/search_top')
        .post(ShowData.search_top)    
        

    //**************************************** InsertData ********************************/
    app
        .route('/onlinemarket/insert/product_insert')
        .post(InsertData.product_insert)
    app
        .route('/onlinemarket/insert/product_comment')
        .post(InsertData.product_comment)
    app
        .route('/onlinemarket/insert/product_rating')
        .post(InsertData.product_rating)
    app
        .route('/onlinemarket/insert/product_top')
        .post(InsertData.product_top)
    app
        .route('/onlinemarket/insert/applications')
        .post(InsertData.applications)
    app
        .route('/onlinemarket/insert/links')
        .post(InsertData.links)
    app
        .route('/onlinemarket/insert/news')
        .post(InsertData.news)
    app
        .route('/onlinemarket/insert/question_answer')
        .post(InsertData.question_answer)
    app
        .route('/onlinemarket/insert/info_add')
        .post(InsertData.info_add)
        

    //**************************************** UpdateData ********************************/
    app
        .route('/onlinemarket/update/product_top')
        .post(UpdateData.product_top)
    app
        .route('/onlinemarket/update/applications_status')
        .post(UpdateData.applications_status)
    app
        .route('/onlinemarket/update/links_status')
        .post(UpdateData.links_status)
    app
        .route('/onlinemarket/update/news_status')
        .post(UpdateData.news_status)
    app
        .route('/onlinemarket/update/question_answer_status')
        .post(UpdateData.question_answer_status)
    app
        .route('/onlinemarket/update/info_add_status')
        .post(UpdateData.info_add_status)
    app
        .route('/onlinemarket/update/product_status')
        .post(UpdateData.product_status)
        
        
    //**************************************** InsertInfo ********************************/
    app
        .route('/onlinemarket/insert/main_catalog')
        .post(InsertInfo.main_catalog)
    app
        .route('/onlinemarket/insert/sub_catalog')
        .post(InsertInfo.sub_catalog)
    app
        .route('/onlinemarket/insert/price_list')
        .post(InsertInfo.price_list)
    app
        .route('/onlinemarket/insert/main_parameterslist')
        .post(InsertInfo.main_parameterslist)
    app
        .route('/onlinemarket/insert/parameters_list')
        .post(InsertInfo.parameters_list)
    app
        .route('/onlinemarket/insert/color_list')
        .post(InsertInfo.color_list)
    app
        .route('/onlinemarket/insert/filtr_list')
        .post(InsertInfo.filtr_list)
    app
        .route('/onlinemarket/insert/country_list')
        .post(InsertInfo.country_list)
    app
        .route('/onlinemarket/insert/region_list')
        .post(InsertInfo.region_list)
   


    //**************************************** UpdateInfo ********************************/
    app
        .route('/onlinemarket/update/main_catalog')
        .post(UpdateInfo.main_catalog)
    app
        .route('/onlinemarket/update/main_catalog_status')
        .post(UpdateInfo.main_catalog_status)
    app
        .route('/onlinemarket/update/sub_catalog')
        .post(UpdateInfo.sub_catalog)
    app
        .route('/onlinemarket/update/sub_catalog_status')
        .post(UpdateInfo.sub_catalog_status)
    app
        .route('/onlinemarket/update/price_list')
        .post(UpdateInfo.price_list)
    app
        .route('/onlinemarket/update/price_list_status')
        .post(UpdateInfo.price_list_status)
    app
        .route('/onlinemarket/update/main_parameterslist')
        .post(UpdateInfo.main_parameterslist)
    app
        .route('/onlinemarket/update/main_parameterslist_status')
        .post(UpdateInfo.main_parameterslist_status)
    app
        .route('/onlinemarket/update/parameters_list')
        .post(UpdateInfo.parameters_list)
    app
        .route('/onlinemarket/update/parameters_list_status')
        .post(UpdateInfo.parameters_list_status)
    app
        .route('/onlinemarket/update/color_list')
        .post(UpdateInfo.color_list)
    app
        .route('/onlinemarket/update/color_list_status')
        .post(UpdateInfo.color_list_status)
    app
        .route('/onlinemarket/update/main_parameterslist_forfiltr')
        .post(UpdateInfo.main_parameterslist_forfiltr)
    app
        .route('/onlinemarket/update/parameters_list_forfiltr')
        .post(UpdateInfo.parameters_list_forfiltr)
    app
        .route('/onlinemarket/update/filtr_list')
        .post(UpdateInfo.filtr_list)
    app
        .route('/onlinemarket/update/filtr_list_status')
        .post(UpdateInfo.filtr_list_status)
    app
        .route('/onlinemarket/update/country_list')
        .post(UpdateInfo.country_list)
    app
        .route('/onlinemarket/update/country_list_status')
        .post(UpdateInfo.country_list_status)
    app
        .route('/onlinemarket/update/region_list')
        .post(UpdateInfo.region_list)
    app
        .route('/onlinemarket/update/region_list_status')
        .post(UpdateInfo.region_list_status)



    //**************************************** ShowInfo ********************************/
    app
        .route('/onlinemarket/show/main_catalog')
        .post(ShowInfo.main_catalog)
    app
        .route('/onlinemarket/show/main_catalog_one')
        .post(ShowInfo.main_catalog_one)
    app
        .route('/onlinemarket/show/sub_catalog')
        .post(ShowInfo.sub_catalog)
    app
        .route('/onlinemarket/show/sub_catalog_one')
        .post(ShowInfo.sub_catalog_one)
    app
        .route('/onlinemarket/show/sub_catalog_withmain')
        .post(ShowInfo.sub_catalog_withmain)
    app
        .route('/onlinemarket/show/sub_catalog_one_withmain')
        .post(ShowInfo.sub_catalog_one_withmain)
    app
        .route('/onlinemarket/show/sub_catalog_bymain')
        .post(ShowInfo.sub_catalog_bymain)
    app
        .route('/onlinemarket/show/price_list')
        .post(ShowInfo.price_list)
    app
        .route('/onlinemarket/show/price_list_one')
        .post(ShowInfo.price_list_one)
    app
        .route('/onlinemarket/show/main_parameterslist')
        .post(ShowInfo.main_parameterslist)
    app
        .route('/onlinemarket/show/main_parameterslist_one')
        .post(ShowInfo.main_parameterslist_one)
    app
        .route('/onlinemarket/show/parameters_list')
        .post(ShowInfo.parameters_list)
    app
        .route('/onlinemarket/show/parameters_list_one')
        .post(ShowInfo.parameters_list_one)
    app
        .route('/onlinemarket/show/color_list')
        .post(ShowInfo.color_list)
    app
        .route('/onlinemarket/show/color_list_one')
        .post(ShowInfo.color_list_one)
    app
        .route('/onlinemarket/show/filtr_list')
        .post(ShowInfo.filtr_list)
    app
        .route('/onlinemarket/show/country_list')
        .post(ShowInfo.country_list)
    app
        .route('/onlinemarket/show/country_list_one')
        .post(ShowInfo.country_list_one)
    app
        .route('/onlinemarket/show/region_list')
        .post(ShowInfo.region_list)
    app
        .route('/onlinemarket/show/region_list_one')
        .post(ShowInfo.region_list_one)
    app
        .route('/onlinemarket/show/region_list_bycid')
        .post(ShowInfo.region_list_bycid)
}