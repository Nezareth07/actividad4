const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//midelewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/usuarios',require('./routes/usuarios'));

//iniciando server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})