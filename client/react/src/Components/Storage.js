/**
 * Provides a common Storage interface for session and local storage
 * 
 * Usage:
 *		Storage.local.setObject('something', { data: 'Hello, World!' })
 *		const data = Storage.local.getObject('something')
 *		console.log(data.message)
 */
class Storage {
	constructor(storage) {
		this.storage = storage
	}

	get(key) {
		return this.storage.getItem(key)
	}

	set(key, value) {
		this.storage.setItem(key, value)
	}

	getObject(key) {
		return JSON.parse(this.get(key))
	}

	setObject(key, obj) {
		this.set(JSON.stringify(obj))
	}

	static session = new Storage(sessionStorage)

	static local = new Storage(localStorage)
}

export default Storage

