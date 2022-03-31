const dataMapper = require('../dataMapper');


const mainController = {
    showHomePage: (req, res) => {
        res.render('laRoueLibre.ejs')
    },

    showMainPage: (req, res) => {

        dataMapper.getMonthEvents((error, results) => {
            const data = results.rows;
            // console.log(data);
            res.render('laRoueLibre.ejs', { data });
        });

    },


    


}

module.exports = mainController;
