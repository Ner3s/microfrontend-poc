/**
 * @Helper
 * Share components and functions from other's mfe's
 *
 * how to do it?
 * you need name and path
 *
 * name = path
 *
 * {
 *    './Input': '~/components/Input',
 * }
 */

/**
 * @Warning
 * If you share any component between applications, your hot reload will stop working.
 */

module.exports = {
  './store/textMessageSlice': '~/store/textMessageSlice',
};
