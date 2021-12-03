/**
 * @Helper
 * How do add other modules here?
 * it's simple.
 *
 * you need.
 * name and port
 *
 * {
 *    name: 'dashboard'
 *    port: 3001
 * }
 */

const remotes = [
  {
    name: "dashboard",
    port: 3001,
  }
];

// Object to gen remotes
const remotesDynamic = {}

// Added dynamic import remotes.
remotes.map(({name, port} ) => {
  Object.assign(remotesDynamic, {
    [name]: `${name}@http://localhost:${port}/remoteEntry.js`,
  })
})

module.exports = remotesDynamic;
