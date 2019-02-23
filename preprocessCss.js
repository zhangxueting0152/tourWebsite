const sass = require("node-sass");

module.exports = function processSass (data, filename) {
	const result = sass.renderSync({
		data,
		file: filename
	}).css;
	console.log(filename);
// console.log(result);
	return result.toString("utf8");

};