// Use let instead of var to keep scope
//let type = 'grizzly'
//while(true){
//    let type = 'polar'
//    console.log(type)
//    break
//}
//console.log(type)

// Use const to make variables immutable
//const PI = Math.PI
//PI = 123

// Use class, extends, and super for inheritence 
//class Bear {
//    constructor(){
//        this.type = 'bear'
//    }
//
//    says(say){
//        console.log(this.type+ ' says ' + say)
//    }
//}
//
//class Grizzly extends Bear{
//    constructor(){
//        super()
//        this.type = 'grizzly'
//    }
//}
//
//let bear = new Grizzly()
//bear.says('growl')

// Use arrow functions to call functions
//let bear = ['polar', 'koala'].filter((bear) => bear !== 'koala')
//console.log(bear)
//
//class Bear {
//    constructor(){
//        this.type = 'bear'
//    }
//
//    says(say){
//        setTimeout(() => {
//            console.log(this.type+ ' says ' + say)
//        }, 1000)
//    }
//}
//
//var bear = new Bear()
//bear.says()

// Use ` ( back qoutes ) for template strings
//let bears = `
//    grizzly
//    polar
//`
//console.log(bears)
//
//let bear = 'grizzly'
//let says = 'growl'
//console.log(`The ${bear} says ${says}!`)

// Use for destructuring
//let bear = 'grizzly'
//let says = 'growl'
//let zoo =  {bear, says}
//console.log(zoo)
//
//let grizzly = {type: 'grizzly', many: 2}
//let {type, many} = grizzly
//console.log(many, type)

// Add defualt variables
//function bear (type='grizzly'){
//    console.log(type)
//}
//bear()
//
//function bears (...types){
//    console.log(types)
//}
//bears('polar', 'grizzly', 'brown')
