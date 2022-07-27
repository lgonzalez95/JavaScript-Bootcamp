const createCounter = () => {
    let count = 0;
    return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        get(){
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.decrement();
counter.increment();
console.log(counter.get());

//Adder
const createAdder = (a)=>{
    return (b)=>{
        return a + b;
    }
}

const add10 = createAdder(10);
console.log(add10(5));


//Tipper
const createTipper = (tipPercentage) => {
    return (bill) => {
        return bill * tipPercentage;
    }
}

const tipper = createTipper(.15);
const tipper2 = createTipper(.5);
console.log(`The corresponding tip amount for $500 is ${tipper(500)}`);
console.log(`The corresponding tip amount for $1500 is ${tipper2(1500)}`);