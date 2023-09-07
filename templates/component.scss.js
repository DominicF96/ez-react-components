const { pascalToKebab } = require("../util/string.util");

module.exports = (componentName, version, date) => {
  return {
    content: `// Generated by EZReactComponents v.${version}
// on ${date}.
.${pascalToKebab(componentName)} {
  
}`,
    extension: "scss"
  }
};