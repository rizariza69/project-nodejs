const chalk = require('chalk')



const name = 'Zero Megaman'
console.log(chalk.red(name))


const info = chalk.keyword('blue')

const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']
names.forEach(name => {
  console.log(info(name))
})

console.log('.......');


const head = 'Artur'
const army = 'loncelot, '
console.log((chalk.green(head)));