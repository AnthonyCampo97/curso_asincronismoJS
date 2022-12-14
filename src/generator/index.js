function* gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;    
}
const generator=gen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

function* iterable(array) {
    for(let value of array){
        yield value
    }
}

const it = iterable (['luis', 'Pedro', ' Camilo', 'Adriana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);