//𝓡𝓮𝓪𝓵 𝓚𝓲𝓷𝓰 𝓐𝓿𝓲

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
