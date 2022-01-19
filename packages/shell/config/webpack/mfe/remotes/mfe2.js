const mfe2Remote = {
  name: 'mfe2',
  url: process.env.REACT_APP_REMOTE_MFE2_URL,

  get remote() {
    return `${this.name}@${this.url}/remoteEntry.js`;
  },
};

module.exports = mfe2Remote;
