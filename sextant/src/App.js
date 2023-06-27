import React, { useEffect, useState } from 'react';
import './App.css';

function Banner() {
  return (
    <div className="banner">
      <h1 className="site-title">Saint Seiya</h1>
    </div>
  );
}

function Exhibit({ title, children }) {
  return (
    <div className="exhibit">
      <h2 className="exhibit-title">{title}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
}


function App() {
  const [ipV4Address, setIpV4Address] = useState('');
  const [ipV6Address, setIpV6Address] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then((response) => response.json())
      .then((data) => setIpV4Address(data.ip))
      .catch((error) => console.log(error));
  }, 
  fetch('https://api64.ipify.org?format=json')
  .then((response) => response.json())
  .then((data) => setIpV6Address(data.ip))
  .catch((error) => console.log(error)),
  []);


  return (
    <div className="App">
      <Banner />
      <Exhibit title="TV and OVA series">
        <p>Saint Seiya</p>
        <p>Saint Seiya: Hades</p>
        <p>	Saint Seiya: The Lost Canvas</p>
        <p>Saint Seiya Omega</p>
        <p>Saint Seiya: Soul of Gold</p>
        <p>	Saint Seiya: Saintia Shō</p>
        <p>Knights of the Zodiac: Saint Seiya</p>
        <h4>Your Public IPv4 Address:</h4>
        <p>{ipV4Address}</p>
        <h4>Your Public IPv6 Address:</h4>
        <p>{ipV6Address}</p>
      </Exhibit>
    </div>
  );
}

export default App;
