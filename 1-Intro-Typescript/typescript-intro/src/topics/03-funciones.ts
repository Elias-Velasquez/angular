function addNumber(a :number, b: number): number {
    return a + b;
}

const result: number = addNumber(1, 2)

// console.log({result})

const addNumberArrow = (a: number, b:number):string => {
    return `${a+b}`;
}

const result2: string = addNumberArrow(1,2);

// console.log({result2})
//primero pongo los parametros obligatorios, luego los opciones y luego los opciones con valor por defecto
function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber*base;
}

const multiplyResult: number = multiply(5);

// console.log({multiplyResult})
interface Character {
    name: string;
    hp: number;
    //asi se define una funcion en una interface
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 10);

strider.showHp();
export{};