const dataMapper = require('../dataMapper');


const mainController = {

    showMainPage: (req, res) => {

        const actualMonth = new Date().getMonth();
        const nextMonth = actualMonth + 1;
        const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        const actualMonthString = months[actualMonth];
        const nextMonthString = months[nextMonth];
        


        dataMapper.getMonthAndNextMonth(actualMonthString, nextMonthString,(error, results) => {
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
            // console.log(dataJson)
            res.render('laRoueLibre', {
                dataJson,
                dataMonth,
                dataNextMonth,
                actualMonthString,
                nextMonthString
            })

        });

    },

    // getMonthAndNextMonth: (req, res) => {

    //     const actualMonth = new Date().getMonth();
    //     const nextMonth = actualMonth + 1;
    //     const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    //     const actualMonthString = months[newDate];
    //     const nextMonthString = months[newDate];
        


    //     dataMapper.getMonthAndNextMonth(actualMonthString, nextMonthString,(error, results) => {
    //         const data = results.rows;
    //         res.send(data)

    //     })

        
        
        // const date = new Date(); 
        // // let displayedDate = 0;
        // let newDate = date.getMonth() - 1;
        // const monthString = months[newDate];
       

        //  dataMapper.updateData(monthString,(error, results) => {

        //     if (error) {
        //         console.debug(error)
        //     }

        //     const data = results.rows;
        //     // console.log(data)

        //     res.send(data)
                


        //  });     



    // }


}

module.exports = mainController;
