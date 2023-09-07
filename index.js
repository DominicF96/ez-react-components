const fs = require("fs");
const colors = require('colors');

const templates = require("./templates");
const config = require("./ezcomponents.config");

const version = "1.0.0";
const date = new Date();

const componentName = process.argv[2];

// Check if components directory exists
if(!fs.existsSync(config.componentsDir)) {
  console.log("Components directory does not exist. Creating folder...");
  fs.mkdirSync(config.componentsDir);
}

const generateComponent = (name) => {

  console.log(`Creating Component Templates with name: ${name}...`);
  const componentDirectory = `${config.componentsDir}/${name}`;

  // Check if component already exists, if not create component folder
  if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${name} already exists.`.red);
    return;
  }
  fs.mkdirSync(componentDirectory);

  // Create component files
  templates.forEach((template) => {
    const generatedTemplate = template(name, version, date);
    fs.writeFileSync(
      `${componentDirectory}/${generatedTemplate.extension.includes('index') ? generatedTemplate.extension : `${name}.${generatedTemplate.extension}`}`,
      generatedTemplate.content
    );
  });

  let readme = fs.readFileSync(`./templates/README.md`, 'utf8');
  let generatedReadme = readme.replace(/__COMPONENT__/g, name);
  generatedReadme = readme.replace(/__PACKAGE__/g, config.package.name);
  fs.writeFileSync(`${componentDirectory}/README.md`, generatedReadme);

  console.log(
    "Successfully created component under: ".green + componentDirectory
  );
}

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

if (componentName.includes(',')) {

  const componentNames = componentName.split(',');

  componentNames.forEach((name) => {
    generateComponent(name);
  });
} else {
  generateComponent(componentName);
}