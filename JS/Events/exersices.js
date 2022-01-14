function sum(a) {
    return function inside(b) {
        return a + b;
    }
}

console.log(sum(2)(3));

function foo(k) {
    return function inside(a) {
        return a * k;
    }
}

const variable1 = foo(2);
const variable2 = foo(3);

console.log(variable1(3));
console.log(variable2(5));

// template(string) возвращает f которая парсит string и подставляет этот аргумент в указанное место
function customParser(template) {
    return function inside(oldValue, newValue) {
        return template.split(oldValue).join(newValue);
    }
}
const exersice = customParser('I prefer Starcraft');
console.log(exersice('Starcraft', 'Warcraft'));
