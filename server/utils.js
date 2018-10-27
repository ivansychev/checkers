function a(){
    console.log('imported func')
}

let b = 2;

module.exports.a = a;
module.exports.b = b;