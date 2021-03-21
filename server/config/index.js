const path = require('path');

module.exports = {
  development: {
    sitename: 'The Colour Of a Stolen Heart [Development]',
    data: {
      speakers: path.join(__dirname, '../data/speakers.json'),
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
  production: {
    sitename: 'The Colour Of a Stolen Heart',
    data: {
      speakers: path.join(__dirname, '../data/speakers.json'),
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
};
