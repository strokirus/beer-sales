
const validator = require('jsonschema').Validator;

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "search server",
  "type": "object",
  "properties": {
    "query": {
        "type": "string",
    },
    "length": {
        "type": "string",
    },
    "all": {
        "type": "bool",
    },
  },
};

/**
 * Function to validate Inputs to Search
 * @param request Object with search params
 * @return {Bool} Result of validation
 */
const validateSearch = (request) => {
    const validate = new validator().validate(request, schema);

    if (validate.errors.length > 0) {
      console.error(`Error: ${validate.errors}`);
      return false;
    }
  
	return true;
};

module.exports = {
	validateSearch,
}