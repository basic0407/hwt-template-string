const template = require('es6-template-strings')


console.log(template('Hello ${place.toUpperCase()}!', { place: "World" }))