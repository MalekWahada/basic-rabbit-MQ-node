const amqp = require('amqplib');
const SERVER_URL = process.env.SERVER_URL;

connectToPublisher();

async function connectToPublisher() {
    try {
        const connection = await amqp.connect(SERVER_URL);
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`received the job with input: ${input.scareAction}`);
            // acknowledge the server that you received the message
            if (input.scareAction === 'test') {
                channel.ack(message);
            }
        });

        console.log('Waiting for messages...');
      } catch (exception) {
        console.log(exception);
    }
}
