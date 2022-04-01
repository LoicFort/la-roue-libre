const dataMapper = require('../dataMapper');

const adminController = {

    showLogin: (req, res) => {
        res.render('login.ejs');
    },

    login: (req, res) => {

        const name = req.body.name;
        const password = req.body.password;       

        dataMapper.checkLogin(name, password, (err, results) => {

            const login = results.rows[0];
            console.log(results);

            if (!login || login.name !== name && login.password) {
                res.send('erreur de login/MDP')
            } else {
                
                res.render('eventsForm')
            }
        })

    },

    editMainPage: (req, res) => {  

        const data = req.body;
        
        dataMapper.createEvents( data, (err, results) => { 
            if(err) {
                console.debug(err)
            }
                            
            
        });
        
       
        

        // console.log(data);
        // console.log(typeof data)

        // for (let i=0; i < data.year.length; i++) {
        //     console.log(data.year[i])
        // }  

        
        // res.redirect('la-roue-libre');
    },

    showData: (req, res) => {
        const month = req.body.month;
        // console.log(month);
        dataMapper.getEvents(month, (err, results) => {
            const data = results.rows;
            res.render('eventsForm', { data })
            
        })


    }

};



module.exports = adminController;
