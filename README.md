Testing the parcel bundler for plan js, node, react, etc
https://medium.freecodecamp.org/all-you-need-to-know-about-parcel-dbe151b70082

# does not work well with node v6.x
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
pnpm install --save-dev vue vue-template-compiler
