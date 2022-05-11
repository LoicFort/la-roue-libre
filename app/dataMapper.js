const database = require('./database');

const dataMapper = {

    checkLogin: (name, password, callback) => {

        // console.log(typeof (name))

        const query = {
            text: `SELECT * FROM "admin" WHERE name=$1 AND password=$2`,
            values: [name, password]
        };

        database.query(query, callback);

    },

    getMonthAndNextMonth: (actualMonth, nextMonth, callback) => {
        // console.log(actualMonth, nextMonth)
       
        const query = {
            text: `SELECT * FROM "events" WHERE "month" in ($1, $2)`,
            values: [actualMonth, nextMonth]
        }
        // console.log(query)
        database.query(query, callback);
        
    },

    updateData: (monthString, callback) => {
        

        const query = {
            text: `SELECT * FROM "events" WHERE "month" = $1 ORDER BY "day"`,
            values: [monthString]
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
            text: `SELECT * FROM "events" WHERE "month" = $1 ORDER BY "day"`,
            values: [data]

        }
        
        database.query(query, callback);

    },

    deleteEvent: (data, callback) => {
        const query = {
            text: `DELETE FROM "events" WHERE "id" = $1`,
            values: [data]

        }
        database.query(query, callback);

    }

}



module.exports = dataMapper;