const dataMapper = require('../dataMapper');


const mainController = {

    showMainPage: (req, res) => {

        dataMapper.getMonthEvents((error, results) => {
            console.log("showmainpage")

            if (error) {
                console.debug(error)
            }

            const data = results.rows;
            console.log(data);
            res.render('laRoueLibre.ejs', { data });



        });

    },


}

module.exports = mainController;
