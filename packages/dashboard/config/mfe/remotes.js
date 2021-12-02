/**
 * @helper
 * how import components and more from other modules ?!
 * it's simple.
 *
 * add like this
 *
 * 'name' === name Application
 * 'port' === port server is running
 *
 * EX.:
 * shell: 'shell@http://localhost:3000/remoteEntry.js'
 */

// interface IRemote {
//   name: string;
//   port: number
// }

// const remotes = [
//   {
//     name: 'shell',
//     port: 3000
//   }
// ];

// const remotesModules = remotes.map(({name, port}) => {
//   return {
//     [name]: `${name}@http://localhost:${port}/remoteEntry.js`
//   }
// })

// console.log(...remotesModules)

module.exports = {
  shell: 'shell@http://localhost:3000/remoteEntry.js'
}
