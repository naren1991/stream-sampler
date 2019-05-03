var kafka = require('kafka-node')
var Consumer = kafka.Consumer
var config = require('../../config/kafka.config.js')
var client = new kafka.KafkaClient(config.kafka_server);

//TODO: Limit maxBytes from consumer to prevent memory errors

exports.sample = (req, res) => {
    var consumer = new Consumer(
        client,
        [
          { topic: req.body.topic,
            partition: req.body.partitiion || 0,
            offset: req.body.offset || 0}
        ],
        {
          fromOffset: req.body.fromOffset || true
        }
      );

    var currStream = [];
    var streamCount = 0;

    consumer.on('message', function (message) {
        //console.log("received message");
        currStream.push(message.value);
        streamCount++;

        if(message.offset == (message.highWaterOffset -1)){

            consumer.close(true, function(err, message) {
                console.log("Consumer has been closed. All messages read");
            });
        }

        //Sample

        //Return sampled item
    });


};