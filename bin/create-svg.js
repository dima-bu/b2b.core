const fs = require('fs-extra');
const replace = require('replace');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createSvg = (name) => {

  const CapsNameArr = name.split('-').map(item => {
     return capitalizeFirstLetter(item)
  });

  const CapsName = CapsNameArr.join('');

  fs.copySync('src/components/SVG/clear', 'src/components/SVG/'+name);
  fs.moveSync('src/components/SVG/'+name+'/clear.js', 'src/components/SVG/'+name+'/'+name+'.js');
  fs.moveSync('src/components/SVG/'+name+'/clear.less', 'src/components/SVG/'+name+'/'+name+'.less');


  replace({
    regex: "clear",
    replacement: name,
    paths: ['src/components/SVG/'+name+'/'+name+'.js'],
    recursive: true,
    silent: true
  });
  replace({
    regex: "Clear",
    replacement: CapsName,
    paths: ['src/components/SVG/'+name+'/'+name+'.js'],
    recursive: true,
    silent: true
  });

};

const name = process.argv[2];
createSvg(name);
//npm run svg foo
