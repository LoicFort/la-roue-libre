import database from './database.js';

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
            text: `SELECT * FROM "events" WHERE "month" in ($1, $2) ORDER BY "month" desc, "day"`,
            values: [actualMonth, nextMonth]
        }
        try {
            database.query(query, callback);          
            
        } catch (error) {
            console.error(error);
        }
       
        
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
        try {
            database.query(query, callback);
        } catch(error) {
            console.log(error)
        }

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



export default dataMapper;