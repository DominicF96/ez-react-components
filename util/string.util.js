module.exports = {
  pascalToKebab: (str) => {
    return str.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase());
  },
  kebabToCamel: (str) => {
    // https://www.codingexercises.com/kebab-case-to-camel-case-js
    return str.replace(/-./g, match => match[1].toUpperCase());
  },
  snakeToPascal: (str) => {
    return str.replace(/(\_\w)/g, function(m) { return m[1].toUpperCase(); }).replace(/^\w/, c => c.toUpperCase());
  }
}