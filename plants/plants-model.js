
const db = require("../database/config")

// add plant
function add(plant) {
	return db("plants")
		.insert(plant, "id").then(ids => {
			const [id] = ids
			return db("plants")
				.where({ id }).first()
		})
}

// find plant
function find() {
	return db("plants").select("id", "nickname", "species", "h2oFrequency")
}

// find By
function findBy(filter) {
	return db("plants")
		.select("id", "nickname", "species", "h2oFrequency")
		.where(filter)
}

// find plant by id
function findById(id) {
	return db("plants")
		.select("id", "nickname")
		.where("id", id)
		.first()
}

// get plants by user ID
function getPlantsList(id) {
    return db('plants')
        .join('users', 'users.id', 'plants.user_id')
        .select('plants.id as plantID', 'plants.nickname as Nickname', 'plants.species as Species', 'plants.h2oFrequency as h2oFrequency')
		.where({user_id: id})
        .orderBy('plants.id')
}

// update plant
function update(id, changes) {
	return db("plants")
		.where({id})
		.update(changes)
		.then(() => findBy({id}))
}

// delete plant
function remove(id) {
	return db("plants")
		.where({id})
		.del()
}

module.exports = {
	add,
	find,
	findBy,
    findById,
	getPlantsList,
	remove,
	update
}