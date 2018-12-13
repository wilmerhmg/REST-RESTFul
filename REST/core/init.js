module.exports = {
	database: '',
	username: '',
	password: '',
	params: {
		host: "localhost",
		dialect: "sqlite",
		logging: !!(process.env.PORT) ? console.log : console.log,
		storage:'../bd.sqlite',
		operatorsAliases: false
	}
};