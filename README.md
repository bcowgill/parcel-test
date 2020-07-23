# Testing the parcel bundler for plain js, node, typescript, react, vue

## Source Article

* https://medium.freecodecamp.org/all-you-need-to-know-about-parcel-dbe151b70082

## Node package installers

### pnpm

To use with `pnpm` just `pnpm install` should use `package.json` and `shrinkwrap.yml` files to set up your `node_modules`.

### yarn

To use with `yarn`, remove `shrinkwrap.yml` and `cp yarn/package.json package.json` and `cp yarn/yarn.lock ./yarn.lock` then `yarn install` should use `yarn.lock` to set up your `node_modules`.

## Node

### does not work well with node v6.x
nvm use 8.6.0
git init
pnpm init
pnpm install --save-dev parcel-bundler rimraf node-sass
+ node-sass 4.9.0
+ parcel-bundler 1.9.1
+ rimraf 2.6.2

# for react
pnpm install --save-dev react react-dom fbjs prop-types object-assign babel-core babel-preset-env babel-preset-react
echo '{ "presets": [ "env", "react" ] }' > .babelrc
+ babel-core 6.26.3
+ babel-preset-env 1.7.0
+ babel-preset-react 6.24.1
+ fbjs 0.8.17
+ object-assign 4.1.1
+ prop-types 15.6.1
+ react 16.4.1
+ react-dom 16.4.1

# for vue
pnpm install --save-dev vue vue-template-compiler vue-hot-reload-api ansi-styles@3.2.1 @vue/component-compiler-utils
+ @vue/component-compiler-utils 2.0.0
+ vue 2.5.16
+ vue-hot-reload-api 2.3.0
+ vue-template-compiler 2.5.16
+ ansi-styles 3.2.1

# for typescript
pnpm install --savea-dev typescript
+ typescript 2.9.2

all the packages from pnpm
+ @vue/component-compiler-utils 2.0.0
+ ansi-styles 3.2.1
+ babel-core 6.26.3
+ babel-preset-env 1.7.0
+ babel-preset-react 6.24.1
+ fbjs 0.8.17
+ node-sass 4.9.0
+ object-assign 4.1.1
+ parcel-bundler 1.9.1
+ prop-types 15.6.1
+ react 16.4.1
+ react-dom 16.4.1
+ rimraf 2.6.2
+ typescript 2.9.2
+ vue 2.5.16
+ vue-hot-reload-api 2.3.0
+ vue-template-compiler 2.5.16

Might be a bit easier to use yarn as parcel installs packages with yarn.

Parcel
yarn add --dev  parcel-bundler rimraf node-sass
(remove .babelrc)

React
yarn add --dev react react-dom babel-preset-env babel-preset-react
running parcel will cause yarn to install some more packages

Vue
yarn add --dev vue
after running parcel and yarn tries to add packages,
run yarn install again to fix deps before trying again.

Typescript
yarn add --dev typescript

# How it works

index.html
	imports index.js
		imports styles.scss
		imports facade/index.js
			imports facade/facade.js

react.html
	imports react.jsx
		imports styles.scss
		// imports facade/index.js
		imports facade/facade.js

vue.html
	imports vue.js
		imports styles.scss
		imports ./app.vue
		imports facade/index.js
			imports facade/facade.js

typescript.html
	imports typescript.ts
		imports styles.scss
		imports facade/index.js
			imports facade/facade.js

combined.html
	imports vue.js
	imports react.jsx
	imports typescript.ts

## javascript
nvm use
pnpm run start
  builds from index.html index.js and puts it in dist-dev/ and runs a server
  http://localhost:1234/
  builds a stylesheet from the scss file
  bundles a js file from all the imports and makes it runnable in browser.
  can also run in node using node dist-dev/*.js

## react
pnpm run start:react
  builds from index.html index.js and puts it in dist-dev/ and runs a server
  http://localhost:1234/
  builds a stylesheet from the scss file
  bundles a js file from all the imports and makes it runnable in browser.
  experienced some import/export problem using parcel-bundler 1.9.1 and react 16.4.1

## vue
pnpm run start:vue
  builds from vue.html vue.js app.vue and puts it in dist-dev/ and runs a server
  http://localhost:1234/
  builds a stylesheet from the scss file
  bundles a js file from all the imports and makes it runnable in browser.

## typescript
pnpm run start:typescript
  builds from typescript.html typescript.ts and puts it in dist-dev/ and runs a server
  http://localhost:1234/
  builds a stylesheet from the scss file
  bundles a js file from all the imports and makes it runnable in browser.
  can also run in node using node dist-dev/*.js

## combined
pnpm run start:all
  builds from combined.html and puts it in dist-dev/ and runs a server
  http://localhost:1234/
  builds a stylesheet from the scss file
  bundles a js file from all the imports and makes it runnable in browser.
  runs react, vue and typescript UI in same browser

pnpm run node
  builds from index.js and puts it in dist-node/ and runs it with node

pnpm run debug
  builds from index.js and puts it in dist-node/ and runs it with node debugger
  open chrome://inspect to debug using dev tools

pnpm run node:typescript
  builds from typescript.ts and puts it in dist-node/ and runs it with node

pnpm run debug:typescript
  builds from typescript.ts and puts it in dist-node/ and runs it with node debugger
  open chrome://inspect to debug using dev tools

pnpm run build
  builds production version from index.html and puts it in dist/index.html
  need to run a webserver from that directory

pnpm run build:react
  builds production version from react.html and puts it in dist/index.html
  need to run a webserver from that directory

pnpm run build:vue
  builds production version from vue.html and puts it in dist/index.html
  need to run a webserver from that directory

pnpm run build:typescript
  builds production version from typescript.html and puts it in dist/index.html
  need to run a webserver from that directory

pnpm run build:all
  builds production version from combined.html and puts it in dist/index.html
  need to run a webserver from that directory
