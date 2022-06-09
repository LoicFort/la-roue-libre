import dataMapper from '../dataMapper.js';
import axios from 'axios';


const mainController = {

    showMainPage: (req, res) => {


        const actualMonth = new Date().getMonth();
        const nextMonth = actualMonth + 1;
        const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        const actualMonthString = months[actualMonth];
        const nextMonthString = months[nextMonth];

        dataMapper.getMonthAndNextMonth(actualMonthString, nextMonthString, (error, results) => {
            const data = results.rows;
            const day = new Date().getDate();

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

            const NextMonthEvents = data.filter((event) => event.day > day && event.month === actualMonthString);

            axios.get('https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQVJWVXRUVnhVcklzNmM5Q2E2QzA5cW14Q3B0bW16MU5ldXBlUVdmemg5dnFTd0YtY0ZA5RThCeVhTMEFsN3ZAZAV1BneTIxZAGJ4WmgzM0w2aGtIZAEh0VHd3QnVqR2FvXzJLX2ZAUSnloeGN5UlY2Y01tLQZDZD')
                .then((response) => {
                    const photos = response.data.data[0].media_url;
                    console.log(photos)
                    return photos;
                }).catch((error) => console.error(error.response)).then((photos) => {
                    res.render('laRoueLibre', {
                        photos,
                        dataJson,
                        dataMonth,
                        dataNextMonth,
                        actualMonthString,
                        nextMonthString,
                        NextMonthEvents,
                    });
                });

        });
    },
};


        export default mainController;
