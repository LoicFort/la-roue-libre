const dataMapper = require('../dataMapper');


const mainController = {

    showMainPage: (req, res) => {

        const actualMonth = new Date().getMonth();
        const nextMonth = actualMonth + 1;
        const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        const actualMonthString = months[actualMonth];
        const nextMonthString = months[nextMonth];  

        dataMapper.getMonthAndNextMonth(
            actualMonthString,
            nextMonthString,(error, results) => {
                // console.error(error);
            const data = results.rows;
            const dataMonth = []
            const dataNextMonth = []
            data.forEach(event => { 
                if (event.month === actualMonthString) {
                    dataMonth.push(event)
                } else {
                    dataNextMonth.push(event)
                }
            });
            let dataJson = JSON.stringify(data)
            dataJson = dataJson.replace(/"(\w+)"\s*:/g, '$1:');
            console.log('dataMonth', dataMonth)
             try {res.render('laRoueLibre', {
                dataJson,
                dataMonth,
                dataNextMonth,
                actualMonthString,
                nextMonthString
            })
        } catch (error) {
            console.error(error)
        } 

        });

    },
}

module.exports = mainController;
