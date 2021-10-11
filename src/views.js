const swig = require('swig')
const path = require('path')

const renderFile = (file, data) => {
	return new Promise((resolve, reject) => {
		swig.renderFile(path.join(__dirname, 'views', file), data, (err, output) => {
			if (err) {
				console.log('Error on view', view, err)
				return reject(err)
			}

			// console.log('Output on view', view, output)
			return resolve(output)
		})
	})
}

const view = async (file, data) => {
	return await renderFile(file, data)
}

module.exports = {
	view
}
