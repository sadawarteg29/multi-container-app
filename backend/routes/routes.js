module.exports = (app) => {
	const controller = require('../controllers/user_controller.js');

	app.get('/test', controller.test);
	app.post('/addUser', controller.addUser);
	app.get('/getAllUser', controller.getAllUser);
	// app.post('/addchat', controller.addchat);
	// app.get('/findRoom', controller.findRoom);
	// app.post('/UserLogin', controller.UserLogin);
	// app.get('/UserList', controller.UserList);
	// app.get('/findOneUser/:id', controller.findOneUser);
}