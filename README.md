# jsstarter
-----------------------

Just enough files to start to learn vanilla JavaScript in TDD style.

jQuery & Lodash are already loaded, you can also test jQuery against isolated HTML.

NodeJS must be installed on your system.

To run as CI mode w/ browsers:
```
npm install
npm test
```
To auto-watch & run PhantomJS only:
```
npm install
npm run test-dev
```
To package all your files into one :
```
$(npm bin)/gulp compress
```
Files in `test/` folder must end with `Spec.js` to be ran. (Can change this in [karma.conf.js](https://github.com/bdavidxyz/jsstarter/blob/master/karma.conf.js#L14))
