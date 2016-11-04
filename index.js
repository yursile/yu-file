var fs = require('fs');
var ONLINEPATH = "http://news.sohu.com/"

class MyUtil {

    static replacePath(string){
        return string.replace(/\.\//g,ONLINEPATH);
    }

    static replacePathClass(string){
        return string.replace(/\s+class(?=\=)/," id")
    }
}



fs.readFile('./test.js', "utf-8", (err, data) => {
    if (err) throw err;

  var s =  MyUtil.replacePathClass(MyUtil.replacePath(data));
    fs.writeFile('write.js', s, (err) => {
        if (err) throw err;
        console.log('saved!');
    });
});


var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marbl')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);






