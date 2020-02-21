const express = require('express');
const app = express();
// var bcrypt = require('bcrypt'); // It is used for encrypt password
// var mailer = require('express-mailer');
// var base64 = require('base-64');
// var FCM = require('fcm-node');
// var multer = require('multer')
// var serverKey = 'AAAAXdPWLzU:APA91bFKR1kHeMdST9D5EfFNCOSFeO5C7JeagUiDbyg6pX7BfZowAwPKSCncJd67q3YyyourBlvFEaCypFI5bfgPFH422MUybu3oMapIl1u136imPSHJs26awXSya83DSvFRYdtWRhQa'
// var fs = require('fs')
const Sequelize = require('sequelize');
var path = require('path')
var url = require('url');
var env = "dev";
var fs = require('fs')
var config = require('../config.json')[env];
var password = config.password ? config.password : null;
var sequelize = new Sequelize(
	config.database,
	config.user,
	config.password, {
		logging: console.log,
		host: 'multi-container-app-database.ctyqxss3tpe4.us-east-1.rds.amazonaws.com',
		dialect: 'mysql',
		define: {
			timestamps: false
		}
	}
	);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const models = require('../models/models.js');

// models.User.hasMany(models.Chat_room, {
// 	foreignKey: 'id',
// 	as: 'chats_rooms'
// })

exports.test = (req, res) => {
	console.log("test");
	var abcd = 'Hey Akshay'
	res.json({
		response: true,
		message: 'welcome!!',
		'test': abcd
	});
};

exports.addUser = (req, res) =>{
	console.log(req.body)
	models.User.create(req.body).then(data => {
		res.send({
			data:data,
			message: 'Data added'
		})

	}).catch(err => {
		console.log(err);
		res.json({
			response: false,
			message: 'Something Wrong!!!.',
			data: err
		});
	});
}

exports.getAllUser = (req, res) =>{
	models.User.findAll().then(data => {
		res.send({
			data:data,
			message: 'Data fetched'
		})

	}).catch(err => {
		console.log(err);
		res.json({
			response: false,
			message: 'Something Wrong!!!.',
			data: err
		});
	});
}

