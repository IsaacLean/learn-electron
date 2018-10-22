if(process.env.NODE_ENV === 'development') require('devtron').install()

const versionEl = document.querySelector('#version');

versionEl.innerText = process.versions.electron;
console.log(process.versions);
