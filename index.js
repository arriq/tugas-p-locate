const pathExists = require('path-exists');
const pLocate = require('p-locate');
 
const files = [
    'unicorn.png',
    'rainbow.png', // Only this one actually exists on disk
    'pony.png'
];
 
(async () => {
    const foundPath = await pLocate(files, file => pathExists(file));
 
    console.log(foundPath);
    //=> 'rainbow'
})();