const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Contact = sequelize.define('contact', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: DataTypes.STRING(),
	email: DataTypes.STRING(),
	message: DataTypes.STRING(4000),
	created_at: {
		type: DataTypes.DATE,
		defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}, {
	freezeTableName: true,
	tableName: 'contact',
	timestamps: false,
	paranoid: true,
	underscored: true,
});

module.exports = Contact;