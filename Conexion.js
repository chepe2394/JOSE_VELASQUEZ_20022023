var Connection = require('tedious').Connection;  
    var config = {  
        server: 'miservidor.db',  //nombre del servidor de la base de datos.
        authentication: {
            type: 'default',
            options: {
                userName: 'user_db', //Usuario de la base de datos
                password: 'pass_db'  // password de la base de datos 
            }
        },
        options: {
            
            database: 'dbprueba'  //nombre de la base de dartos
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {
        console.log("Connected");  
    });
    
    connection.connect();