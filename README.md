# EZReactComponents

<p align="center"><img src="./banner.svg"/></p>

<p align="center"><b><i>A CLI Tool to Generate Lots of React Components in Seconds.</i></b></p>

- ✅ Generate React Components with a single command.
- ✅ Typescript
- ✅ Jest
- ✅ SASS
- ✅ Storybook

## Getting Started

```shell
git clone git@github.com:DominicF96/ez-react-components.git
cd ez-react-components
npm install
npm run start
```

## Configuration

You can configure certain parameters of the EZReactComponents generator. To do so, create and edit the `ezcomponents.config.json` file in the root directory of the project.

```js
module.exports = {
  componentsDir: './output',
  package: {
    name: '@my-org',
  }
}
```

