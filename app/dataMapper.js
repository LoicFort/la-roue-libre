const database = require('./database');

const dataMapper = {

    checkLogin: (name, password, callback) => {

        const query = {
            text: `SELECT * FROM "admin" WHERE name=$1 AND password=$2`,
            values: [name, password]
        };

        database.query(query, callback);

    },

    getMonthEvents: (callback) => {
        const today = new Date();
        const todayString = today.toLocaleString('default', { month: 'long' });
        // console.log(todayString)


        const query = {
            text: `SELECT * FROM "events" WHERE "month" = $1`,
            values: [todayString]
        }

        database.query(query, callback);
    },

    createEvents: (data, callback) => {

       
            const query = {
                text: `INSERT INTO "events"("year", "month", "day", "logo", "title", "description") VALUES ($1, $2, $3, $4,$5, $6)`,
                values: [data.year, data.month, data.day, data.logo, data.title, data.description]
            }
       
        
        
        database.query(query, callback);

    },

    getEvents: (data, callback) => {
        const query = {
            text: `SELECT * FROM "events" WHERE "month" = $1`,
            values: [data]
        }

        database.query(query, callback);

    }

}



module.exports = dataMapper;