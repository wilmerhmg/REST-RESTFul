module.exports = (sequelize, DataType) => {

	const Persona = sequelize.define('Personas', {
		tipoDocumento: {
			type: DataType.STRING(3),
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "El campo tipoDocumento de paciente NO puede ser un valor NULL/EMPTY."
				},
				len: {
					args: [1, 3],
					msg: 'El campo tipoDocumento de paciente debe tener entre 1 y 3 caracteres, sin espacios'
				}
			}
		},
		numeroDocumento: {
			type: DataType.STRING(17),
			primaryKey: true,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "El campo numeroDocumento de paciente NO puede ser un valor NULL/EMPTY."
				},
				len: {
					args: [1, 17],
					msg: 'El campo numeroDocumento de paciente debe tener entre 1 y 17 caracteres, sin espacios'
				}
			}
		},
		primerNombre: {
			type: DataType.STRING(100),
			validate: {
				notEmpty: {
					args: true,
					msg: "El campo primerNombre de paciente NO puede ser un valor EMPTY."
				},
				len: {
					args: [1, 100],
					msg: 'El campo primerNombre de paciente debe tener entre 1 y 100 caracteres'
				}
			}
		},
		segundoNombre: {
			type: DataType.STRING(50),
			validate: {
				len: {
					args: [0, 50],
					msg: 'El campo segundoNombre de paciente debe tener entre 0 y 50 caracteres'
				}
			}
		},
		primerApellido: {
			type: DataType.STRING(50),
			validate: {
				notEmpty: {
					args: true,
					msg: "El campo primerApellido de paciente NO puede ser un valor EMPTY."
				},
				len: {
					args: [1, 50],
					msg: 'El campo primerApellido de paciente debe tener entre 1 y 50 caracteres'
				}
			}
		},
		segundoApellido: {
			type: DataType.STRING(50),
			validate: {
				len: {
					args: [0, 50],
					msg: 'El campo segundoApellido de paciente debe tener entre 0 y 50 caracteres'
				}
			}
		}
	}, {
		tableName: `${process.env.PORT ? 'dev_' : ''}persona`
	});

	Persona.associate = (models) => {
		//Persona.hasMany(models.Autorizaciones, {foreignKey: 'paciente_id', foreignKeyConstraint: true});
	};

	return Persona;
};