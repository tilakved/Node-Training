const { json } = require("body-parser");

const data = {
    name:"tilak",
    number: 9484883898
}
const details = function() {
    return data;
};

module.exports = details