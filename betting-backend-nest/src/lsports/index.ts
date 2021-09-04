const amqlib = require('amqplib');
//
const getChannel = (type: 'inplay' | 'prematch' = 'prematch') => {
  return new Promise((resolve, reject) => {
    amqlib
      .connect({
        protocol: 'amqp',
        hostname:
          type === 'inplay'
            ? process.env.IN_PLAY_RABBIT_MQ
            : process.env.PRE_MATCH_RABBIT_MQ,
        port: 5672,
        username: process.env.LSPORT_USERNAME,
        password: process.env.LSPORT_PASSWORD,
        locale: 'en_US',
        heartbeat: 580,
        vhost: 'Customers',
      })
      .then(connectionEstablished => {
        connectionEstablished
          .createChannel()
          .then(lsportChannel => {
            resolve(lsportChannel);
          })
          .catch(channelCreationError => {
            reject(channelCreationError);
          });
      })
      .catch(connectionError => {
        console.log({ connectionError });
      });
  });
};

export default getChannel;