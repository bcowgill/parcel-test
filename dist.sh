#!/bin/bash
# Build all targets for dev and prod and move to dist-archive for reference keeping.

# Run this script once without parameters to clean dist-archive.
# Then need to run this script individually with params:
# start
# start typescript
# start react
# start vue
# start all

# and run the mv command it prints after each one.

TARGET=$1
SUBTARGET=$2

if [ ! -z "$TARGET" ]; then
	mkdir dist-archive
	if [ -z "$SUBTARGET" ]; then
		SCRIPT=$TARGET
		DIR=$TARGET
	else
		SCRIPT=$TARGET:$SUBTARGET
		DIR=$TARGET-$SUBTARGET
	fi
	echo Press ^C after the build and then manually
	echo mv dist-dev dist-archive/run-$DIR
	pnpm run $SCRIPT
else

pnpm run clean
[ -d dist-archive ] && rm -rf dist-archive
mkdir dist-archive

pnpm run node
mv dist-node dist-archive/run-node

pnpm run node:typescript
mv dist-node dist-archive/run-node-typescript

pnpm run build:node
mv dist dist-archive/build-node

pnpm run build:node:typescript
mv dist dist-archive/build-node-typescript

pnpm run build
mv dist dist-archive/build

pnpm run build:typescript
mv dist dist-archive/build-typescript

pnpm run build:react
mv dist dist-archive/build-react

pnpm run build:vue
mv dist dist-archive/build-vue

pnpm run build:all
mv dist dist-archive/build-all

fi

