import {config} from './config';

document.getElementById('env')!.innerText = config.env;
document.getElementById('apiurl')!.innerText = config.apiUrl;

fetch(config.apiUrl + '/hello')
    .then(response => response.text())
    .then(data => document.getElementById('response')!.innerText = data)
