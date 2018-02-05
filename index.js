const { initApp } = require('./app');

initApp().then(async(app) => {
    app.init();
    app.listen(8080, () => {
        console.log('Listening...');
        console.log('Open http://localhost:8080/graphiql')
    });
})
