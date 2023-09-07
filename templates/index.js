const componentStyles = require("./component.scss.js");
const componentStories = require("./component.stories.js");
const componentTests = require("./component.test.js");
const componentTypes = require("./component.types.js");
const component = require("./component.js");
const index = require("./index.template.js");

module.exports = [
  componentStyles,
  componentStories,
  componentTests,
  componentTypes,
  component,
  index
];