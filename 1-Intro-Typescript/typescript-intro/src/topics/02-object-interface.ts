const skills: string[] = ['Bash', 'Counter', 'Healing'];


//para esto hago interfaces

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string
}

//en un objeto literal no puedo tipar los tipos
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Base', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider)



export {};