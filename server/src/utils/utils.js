'use strict'

/**
 * Function to sanitize strings, removing special characters
 * @param str String 
 * @return {String} String sanitized
 */
const sanitize = (str) => (
	str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/([^\w]+|\s+)/g, ' ')
		.replace(/-+/g, ' ')
    .replace(/(^-+|-+$)/, '')
    .toLowerCase()
);

module.exports = {
	sanitize,
}