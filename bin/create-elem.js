const fs = require('fs-extra');
const replace = require('replace');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createElem = (name) => {

  const CapsNameArr = name.split('-').map(item => {
     return capitalizeFirstLetter(item)
  });

  const CapsName = CapsNameArr.join('');

  fs.copySync('src/components/clear', 'src/components/'+name);
  fs.moveSync('src/components/'+name+'/clear.js', 'src/components/'+name+'/'+name+'.js');
  fs.moveSync('src/components/'+name+'/clear.story.js', 'src/components/'+name+'/'+name+'.story.js');
  fs.moveSync('src/components/'+name+'/clear.less', 'src/components/'+name+'/'+name+'.less');


  replace({
    regex: "clear",
    replacement: name,
    paths: ['src/components/'+name+'/'+name+'.js', 'src/components/'+name+'/'+name+'.story.js'],
    recursive: true,
    silent: true
  });
  replace({
    regex: "Clear",
    replacement: CapsName,
    paths: ['src/components/'+name+'/'+name+'.js', 'src/components/'+name+'/'+name+'.story.js'],
    recursive: true,
    silent: true
  });

};

const name = process.argv[2];
createElem(name);
//npm run ce foo
