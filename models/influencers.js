//Sends the Users table where it needs to go.
module.exports = function(sequelize, DataTypes){
	var Influencer = sequelize.define("influencer"{
		influencer_name: {
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		},
		//If the User is active or not. Default is true.
		active_user: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		followers: {
			type: DataTypes.BIGINT,
			validate: {
				allowNull: false
			}
		},
		views: {
			type: DataTypes.BIGINT,
			validate: {
				allowNull: false
			}
		},
		twitch_id: {
			type: DataTypes.BIGINT,
			validate: {
				allowNull: false
			}
		},
		twitch_url: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false
			}
		},
		user_logo: {
			type: DataTypes.STRING
		},
		game: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false
			}
		},
		language: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false
			}
		}
		
	});
	//Before we send this off, we need to add the brand(s?) that the users
	//"belong" to/with. I need to look up multiple to multiple connections.
	return Influencer;
}