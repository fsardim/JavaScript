let soma = (x, y) => x + y;
exports.soma = soma;

let subtracao = (x , y) => {
    return x - y;
};
exports.subtracao = subtracao;

function media(x, y) {
    return (x+y)/2;
};
exports.media = media;

const primo = (n) => {
    if (n < 2) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
exports.primo = primo;
