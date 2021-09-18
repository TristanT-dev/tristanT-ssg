const fs = requie ('fs');
const Handlebars = require('handlebars');



function buildTheHTML(filename, data){
    const input = fs.readFileSync(filename,'utf8').toString();
    const template = Handlebars.compile(source);
    const output = template(data);
    return output;


}

async function main(src, dist){
    const html = buildTheHTML(src, {"CustomData": "This is variable data"});

    fs.writeFile(destination, html, function(err){
        if(err) return console.log(err);
        console.log('index.html created');

    });
}

main('./src/index.html', './dist/index.html');
