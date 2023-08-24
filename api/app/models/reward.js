const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Reward = sequelize.define('reward_claim', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	reward_code: DataTypes.STRING(64),
	reward_amout: {
		type: DataTypes.DECIMAL
	},
	created_at: {
		type: DataTypes.DATE,
		defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	},
	claimed_at: {
		type: DataTypes.DATE,
		allowNull: true
	}
}, {
	freezeTableName: true,
	tableName: 'reward_codes',
	timestamps: false,
	paranoid: true,
	underscored: true,
});

module.exports = Reward;