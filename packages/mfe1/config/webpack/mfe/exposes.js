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

const exposes = {
  development: {
    './Routes': '~/routes/mfe1.routes',
    './NavLink': '~/routes/navigation.routes',
  },
  staging: {
    './Routes': '~/routes/mfe1.routes',
    './NavLink': '~/routes/navigation.routes',
  },
  production: {
    './NavLink': '~/routes/navigation.routes',
    './Routes': '~/routes/mfe1.routes',
  },
};

module.exports = exposes[process.env.NODE_ENV];
