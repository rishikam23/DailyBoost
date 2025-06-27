import React, { useEffect, useState } from 'react';

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        const weatherKey = "f7975c4df4dfceefd570f6c69bbef23e";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherKey}`)
          .then(res => res.json())
          .then(setData)
          .catch(err => console.error(err));
      }, () => console.error("Geolocation failed"));
    }
  }, []);

  if (!data) return <div style={{ gridArea: 'weather', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>Loading weather...</div>;

  return (
    <div style={{ gridArea: 'weather', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
      <div>{data.name}</div>
      <div>{data.main.temp}°C</div>
      <div>{data.weather[0].main}</div>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" />
    </div>
  );
}

export default Weather;