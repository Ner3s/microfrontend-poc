const mfe1Remote = {
  name: 'mfe1',
  url: process.env.REACT_APP_REMOTE_MFE1_URL,

  get remote() {
    return `${this.name}@${this.url}/remoteEntry.js`;
  },
};

module.exports = mfe1Remote;
