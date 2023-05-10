
const dialogRouter = require("./dialog.route");

function route(app) {
  app.use('/api/v1/dialog', dialogRouter);
  app.use('/', () => {
    console.log('/');
  })
}

module.exports = route;