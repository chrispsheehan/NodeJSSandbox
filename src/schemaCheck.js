var chai = require('chai');
let expect = chai.expect;
let should = chai.should();
let assert = chai.assert;
chai.use(require('chai-json-schema'));

let goodApple = {
  skin: "thin",
  colors: ["red", "green", "yellow"],
  taste: 10
};
let badApple = {
  colors: ["brown"],
  taste: 0,
  worms: 2
};
  
const fruitSchema = require('./schemaFruit.js');

console.log(fruitSchema);
  
//bdd style
expect(goodApple).to.be.jsonSchema(fruitSchema);
expect(badApple).to.not.be.jsonSchema(fruitSchema);

goodApple.should.be.jsonSchema(fruitSchema);
badApple.should.not.be.jsonSchema(fruitSchema);

//tdd style
assert.jsonSchema(goodApple, fruitSchema);
assert.notJsonSchema(badApple, fruitSchema);