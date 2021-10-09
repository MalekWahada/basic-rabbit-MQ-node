const amqp = require('amqplib');
const SERVER_URL = process.env.SERVER_URL;

const msg = {scareAction: process.argv[2]};

connect();

async function connect() {
    try {
        const connection = await amqp.connect(SERVER_URL);
        const channel = await connection.createChannel();

        const result = await channel.assertQueue("jobs");

        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`the job was sent successfully of: ${msg.scareAction}`);
    } catch (exception) {
        console.log(exception);
    }
}
