const { initApp } = require('./app');

initApp().then((app) => {
    app.expressApp.listen(8080, () => {
        console.log('Listening...');
        console.log('Open http://localhost:8080/graphiql')
    });
})
