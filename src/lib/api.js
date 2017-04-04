//import moment from 'moment';
//import CryptoJS from 'crypto-js';
import ContractorAPI from 'hivetaxi-sdk/clients/contractor';
import Config from './config';

export default class API {

  constructor () {
    this.login = '';
    this.passwordHASH = '';
    this.defaultAPIConfig = {};
  }

  static autorization (login, password) {

    const creds = {accessKeyId: login, secretAccessKey: password};

    this.defaultAPIConfig = {
      region: 'global',
      endpoint: Config.get('api').endpoint,
      credentials: creds
    };

    this.contractorId = Config.get('contactorAlias');

    this.API = new ContractorAPI(this.defaultAPIConfig);

    return this.API.getUserInfo({contractor: this.contractorId}).promise();


    //this.API.getUserInfo({contractor: this.contractorId}).promise();

    //
    // const passwordHASH = API.getSHA256(password);
    // const date = API.getRFC1123Date();
    // const nonce = API.getNonce();
    // const authentication = API.getAutentification(date, nonce, login, this.contractorId, passwordHASH);
    //
    // const headers = {
    //   'Content-Type': 'application/json; charset=utf-8',
    //   'X-Hive-Date': date,
    //   'Authentication': authentication
    // };
    //
    // return axios({
    //   method: method,
    //   url: 'https://dev.hivelogin.ru' + path,
    //   headers: headers,
    //   data: {
    //     method: 'User.getInfo',
    //     version: '1.0'
    //   }
    // });
  }

  static getGroups () {

    const creds = {accessKeyId: 'admin', secretAccessKey: 'admin'};

    this.defaultAPIConfig = {
      region: 'global',
      endpoint: Config.get('api').endpoint,
      credentials: creds
    };
    this.contractorId = 1000006867451;
   // this.contractorId = Config.get('contactorAlias');

    this.API = new ContractorAPI(this.defaultAPIConfig);
    return this.API.getGroups({contractor: this.contractorId}).promise();
  }

  static GetEmployees (groupId) {
    return this.API.getEmployees({groupId: groupId, contractor: this.contractorId}).promise();
  }

  // static getNonce () {
  //   return Math.round(Math.random() * 10000000);
  // }
  //
  // static getSHA256 (value) {
  //   return CryptoJS.SHA256(value);
  // }
  //
  // static getBASE64SHA256 (value) {
  //   return CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(value));
  // }
  //
  // static getAutentification (date, nonce, login, path, passwordHASH, method = 'POST') {
  //   const sha256Pass = passwordHASH;
  //   const str = method + path + date + nonce;
  //   const digest = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(str, sha256Pass));
  //   return 'hmac ' + login + ':' + nonce + ':' + digest;
  // }
  //
  // static getRFC1123Date (date = new Date()) {
  //   return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  // }
}

export function getBASE64SHA256 (val) {
  return API.getBASE64SHA256(val);
}

export let api = new API();
