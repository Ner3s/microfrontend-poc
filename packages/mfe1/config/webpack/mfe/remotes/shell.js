const shellRemote = {
  name: 'shell',
  url: process.env.REACT_APP_REMOTE_SHELL_URL,

  get remote() {
    return `${this.name}@${this.url}/remoteEntry.js`;
  },
};

module.exports = shellRemote;
