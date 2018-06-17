# does not work well with node v6.x
nvm use 8.6.0
git init
pnpm init
pnpm install --save-dev parcel-bundler rimraf node-sass

# for react
pnpm install --save react react-dom babel-preset-env babel-preset-react
echo '{ "presets": [ "env", "react" ] }' > .babelrc
+ babel-preset-env 1.7.0
+ babel-preset-react 6.24.1
+ react 16.4.1
+ react-dom 16.4.1

