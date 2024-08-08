const name ="Anshu";
const repocount =50

console.log(name + repocount + "marks");

/*  instead of using (name + repocount + "marks")

placeholder : (`${variable name} `)

    we an use place holders (` we can write any thing between them `)
*/

// for example

// console.log(` my name is ${name} and my marks is ${repocount}`);




const gameName = new String("   anshugupta   ")

//  methods of string

// console.log(gameName.indexOf('G'));

// console.log(gameName.charAt(2));

// const anotherString = gameName.slice(0,4)

// console.log(anotherString)

// negative slicing in string

// const anotherString = gameName.slice(1,7)
// console.log(anotherString);

// console.log(gameName.trim());


const url ="http://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20','_'))

console.log(url.includes('hitesh'))