#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) throw error0;
  
  connection.createChannel((error1, channel) => {
    if (error1) throw error1;
      
      var queue = 'q1';
      var message = 'Hello world';
  
      channel.assertQueue(queue, {
        durable: false
      });
  
      channel.sendToQueue(queue, Buffer.from(message));
      console.log(`${message} was sent to queue ${queue}.`);
  });
});