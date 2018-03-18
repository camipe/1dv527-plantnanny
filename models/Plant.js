const Plant = {
  name: 'The Plant',
  description: 'Provides data about air temperature, humidity and moisture level in soil.',
  sensors: [
    {
      name: 'dht22',
      description: 'Digital sensor providing air temperature and humidity',
      properties: [
        {
          name: 'temperature',
          description: 'The air temperature in celsius.',
        },
        {
          name: 'humidity',
          description: 'The air humidity in percent.',
        },
        {
          name: 'created',
          description: 'The time when the reading was saved.',
        },
      ],
      link: '/api/v1/air',
    },
    {
      name: 'lm393',
      description: 'Digital sensor providing air temperature and humidity',
      properties: [
        {
          name: 'rawValue',
          description: 'Raw value from the analog to digital converter. Value 0-1023.',
        },
        {
          name: 'value',
          description: 'Normalised value. Value 0.0-1.0',
        },
        {
          name: 'created',
          description: 'The time when the reading was saved.',
        },
      ],
      link: '/soil',
    },
  ],
  websocket: {
    description: "It's possible to connect with a web socket and recieve updates on (almost) live sensor data. The event emitted is 'updateData'.",
    properties: ['temp', 'humidity', 'soilValue'],
    link: '/',
  },
};

module.exports = Plant;
