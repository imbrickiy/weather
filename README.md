[text](https://docs.tomorrow.io/reference/weather-forecast)

```javascript
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'}
};

fetch('https://api.tomorrow.io/v4/weather/forecast?location=izmir&timesteps=1h&units=metric&apikey=ARwNFz7Wl91SYqn8Js00gB7Jt31X9QcX', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

