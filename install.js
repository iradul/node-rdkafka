var fs = require('fs');
var path = require('path');

function copyFileSync( source, target ) {
    var targetFile = target;
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }
    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync( source, targetFolder ) {
    var files = [];
    //check if folder needs to be created or integrated
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }
    //copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}

var match = /v([^.]+)\.([^.]+)\.([^.]+)/.exec(process.version);

if (match) {
    var major = +match[1], minor = +match[2], patch = match[3];
    var srcDir = './deps/v' + major;
    if (fs.existsSync(srcDir)) {
        copyFolderRecursiveSync(srcDir, './build/Release');
        process.exit(0);
    }
}
    
console.log('Invalid NodeJS version: ' + process.version);
process.exit(1);
