#!/usr/bin/env node

var fs = require('fs')



var program = require('commander');

program
  .version('0.0.1')
  .usage('[options] <htmlFile ...>')
  .option('-o, --optional [value]', 'An optional value')
  .parse(process.argv);



var htmlFiles = program.args;
var ONLINEPATH = program.optional;

class MyUtil {

    static replacePath(string){
        return string.replace(/\.\//g,ONLINEPATH);
    }

    static replacePathClass(string){
        return string.replace(/\s+class(?=\=)/," id")
    }
}

if(htmlFiles.length<2){
    stderr("arguments not valid")
    process.exit(1);
}

var stdinFile = htmlFiles[0];
var stdoutFile = htmlFiles[1];

fs.readFile(stdinFile, "utf-8", (err, data) => {
    if (err) throw err;

  var s =  MyUtil.replacePathClass(MyUtil.replacePath(data));
    fs.writeFile(stdoutFile, s, (err) => {
        if (err) throw err;
        console.log(stdoutFile+' saved!');
    });
});


// 标准终端输出
function stdout(message) {
    process.stdout.write(message + '\n');
}


// 错误输出
function stderr(message) {
    process.stdout.write(message + '\n');
}


// 输出日志
function log() {
    if (process.stdout.isTTY) {
        process.stdout.write(Array.prototype.join.call(arguments, ' ') + '\n');
    }
}









