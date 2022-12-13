const englishCode = "en-UK";

const frenchCode = "es-FS";

function getAboutUsLink(language) {

	switch (language.toLowerCase()) {

		case englishCode.toLowerCase():

			return '/about-us';

		case frenchCode.toLowerCase():

			return '/-à propos de nous';

	}

	return '';

}

module.exports = getAboutUsLink;


const getAboutUsLink = require("./index");

test("Return about-us for english language", () => {

	expect(getAboutUsLink("en-UK")).toBe("/about-us");

});