// npm i request minimist fs
// node bombard.js -f run
const request = require('request');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const assert    = require('assert');
const path = require("path");

function computeDir(dir){
  const req = request.post('http://localhost:5000', function (err, resp, body) {
    if (err) console.log('Error!')
    else console.log('URL: ' + body);
  });
  const form = req.form();
  fs.readdir(dir, function (err, files) {
    assert.equal(null, err);
    files.map(function (file) {
      return path.join(dir, file);
    }).filter(function (file) {
      return path.extname(file) === '.jpg';  // TODO: generalize
    }).forEach(function (file) {
      console.log(file);
      form.append('image', fs.createReadStream(file));	
    });
  });
}

function run() {
  const dataDir = "./data";
  computeDir(dataDir);
}

/**
* Fonction executee si manque argument -f ou que la fonction n'existe pas
*/
function def() {
    console.log('Specify function name with -f');
}

const functions = {
  run: run,
  def: def
};

/**
* On teste pour voir si la fonction existe, sinon on execute la fonction def
*/
const call = (functions[argv.f || 'def']) ? (functions[argv.f || 'def']) : def;

return call();
