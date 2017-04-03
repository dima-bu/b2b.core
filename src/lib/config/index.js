import {options, has, get, assign, set, setPath, require, include} from './configuration';
import defaultConfig from '../../../config/default.json';

let baseURI;
let contactorAlias;

// environent baseURI detection
let isWindows = typeof process !== 'undefined' && typeof process.platform !== 'undefined' && !!process.platform.match(/^win/);
if (typeof document !== 'undefined' && document.getElementsByTagName) {
    // baseURI = document.baseURI;

    if (!baseURI) {
        let bases = document.getElementsByTagName('base');
        baseURI = (bases[0] && bases[0].href) || window.location.href;
    }
}
else if (typeof location !== 'undefined') {
    baseURI = location.href;
}

// sanitize out the hash and querystring
if (baseURI ) {
    baseURI = baseURI.split('?')[0];
    //baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
}

//check #
if (baseURI.indexOf('#') >= 0) {

  const baseURIArray = baseURI.split('#');
  baseURI = baseURIArray[0];
  contactorAlias = baseURIArray[1];
  contactorAlias = contactorAlias.replace("/","");
  // contactorAlias = contactorAlias.replace("#","");
}

else if (typeof process !== 'undefined' && process.cwd) {
    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
    if (isWindows)
        baseURI = baseURI.replace(/\\/g, '/');
}
else {
    baseURI = '';
}

// Initialize default configuration
options({basePath: new URL('config/', baseURI).href});
//options({basePath: new URL('config/', 'http://localhost:3000/stuff/').href});
assign(defaultConfig)
set({'contactorAlias': contactorAlias});

export default {
    options,
    has,
    get,
    assign,
    set,
    setPath,
    require,
    include
}
