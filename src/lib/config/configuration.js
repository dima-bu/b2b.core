import _assign from 'lodash/assign';
import _cloneDeep from 'lodash/cloneDeep';
import _hasIn from 'lodash/hasIn';
import _set from 'lodash/set';
import _get from 'lodash/get';
import _merge from 'lodash/merge';
import 'whatwg-fetch';
import './urlpolyfill'
import Promise from 'bluebird';

let configuration = null;
let setOptions = {};
const validOptions = ['freeze', 'assign', 'basePath'];
const persistentOptions = ['freeze', 'basePath'];

/******************************
 * Helper Functions
 ******************************/
function checkFrozen() {
    if (configuration && setOptions.freeze === true) {
        throw new Error('Configuration is frozen, cannot assign new value. Use Config.options({freeze: false}) to allow Config modification.');
    }
}

function freeze() {
    if (setOptions.freeze === true && Object.freeze && Object.getOwnPropertyNames) {
        configuration = deepFreeze(configuration);
    } else if (!Object.freeze || !Object.getOwnPropertyNames) {
        sayWarning(' Could not call freeze as native functions arent\'t available')
    }
}

function fetchTextFromURL(url, authorization, fulfill, reject) {
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }

    function parseJSON(response) {
        return response.json()
    }

    let opts = {
        headers: {'Accept': 'application/x-es-module, */*'}
    };

    if (authorization) {
        if (typeof authorization === 'string')
            opts.headers['Authorization'] = authorization;
        opts.credentials = 'include';
    }

    fetch(url, opts)
        .then(checkStatus)
        .then(parseJSON)
        .then(fulfill, reject);
}

function deepFreeze(o) {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
}

function sayWarning(text) {
    console.warn(text);
}

/******************************
 * Exports
 ******************************/
export function options(newOptions = {}) {
    if (newOptions) {
        for (let newOption in newOptions) {
            //Check if is a valid option
            if (!validOptions.indexOf(newOptions)) {
                throw new Error(`Unrecognised option '${newOption}' passed to set`);
            } else {
                //Check value of option
                const value = newOptions[newOption];
                // if (typeof value !== 'boolean') {
                //     throw new Error(`Unexpected value type for ${newOption} : ${(typeof value)}, boolean expected`);
                // }

                if (persistentOptions.indexOf(newOption) !== -1) {
                    setOptions[newOption] = value;
                }
            }
        }
    }
}

export function assign(newConfiguration) {
    checkFrozen();
    configuration = _assign(_cloneDeep(configuration), _cloneDeep(newConfiguration));
    freeze();
}

export function set(newConfiguration) {
    checkFrozen();
    configuration = _merge(_cloneDeep(configuration), _cloneDeep(newConfiguration));
    freeze();
}

export function setPath(path, value) {
    checkFrozen();
    configuration = _set(_cloneDeep(configuration), path, _cloneDeep(value));
    freeze();
}

export function get(key, defaultValue) {
    if (!configuration) {
        sayWarning('Configuration has not been set.');
        return;
    }

    if (key) {
        if (configuration && _hasIn(configuration, key)) {
            const val = _get(configuration, key);
            return val !== undefined && val !== null ? val : defaultValue;
        } else {
            sayWarning(`There is no value with the key: ${key}`)
        }
        return;
    }

    return configuration;
}

export function has(key) {
    return key && configuration && _hasIn(configuration, key);
}

export function require(url, authorization) {
    return new Promise((resolve, reject) => {
        fetchTextFromURL(
            new URL(url, setOptions.basePath).href,
            authorization,
            (json) => {
                set(json);
                resolve(json);
            },
            (reason) => reject(reason)
        );
    });
}

export function include(url, authorization) {
    return new Promise((resolve) => {
        fetchTextFromURL(
            new URL(url, setOptions.basePath).href,
            authorization,
            (json) => {
                debugger;
                set(json);
                resolve(json);
            },
            (reason) => resolve(null)
        );
    });
}
