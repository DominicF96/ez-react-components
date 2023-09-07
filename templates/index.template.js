module.exports = (componentName, version, date) => {
  return {
    content: `// Generated by EZReactComponents v.${version}
// on ${date}.
export { default as ${componentName} } from './${componentName}';`,
    extension: "index.ts"
  };
}