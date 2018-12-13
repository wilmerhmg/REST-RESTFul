module.exports = app => {
	const Personas = app.config.db.models.Personas;

	function spread(fn) {
		return function (arr) {
			return fn.apply(null, arr);
		};
	}

	app.route(`/persona/:id`).get((req, res) =>{
		Personas.findOne({
			where: {numeroDocumento: req.params.id},			   
		}).then(result => res.json(result)).catch(error => {
			res.status(412).json({msg: error.message});
		});
	});

	app.route(`/persona`).get((req, res) => {
		Personas.findAll({

		}).then(result => res.json(result)).catch(error => {
			res.status(412).json({msg: error.message});
		});
	}).post((req, res) => {
		Personas.create(req.body).then(persona=>{
			res.status(201).json(persona);
		}).catch(error=>{
			res.status(400).json(error.errors.map(e=>e.message));
		});
	}).put((req, res) => {
		Personas.update(req.body,{
			where:{numeroDocumento:req.body.numeroDocumento}
		}).then(result=>{
			res.status(200).json({
				message:"Se ha actualizado correctamente"
			});
		}).catch(error=>{
			res.status(400).json(error.errors.map(e=>e.message));
		});
	}).delete((req, res) => {
		Personas.destroy({
			where:{numeroDocumento:req.body.numeroDocumento}
		}).then(result=>{
			res.status(200).json({
				message:"Se ha eliminado correctamente"
			});
		}).catch(error=>{
			res.status(400).json(error.errors.map(e=>e.message));
		});
	});
};
