import { useEffect, useState } from 'react';
import './styles.css';

function Background() {
  const [bgUrl, setBgUrl] = useState('');

  useEffect(() => {
    async function fetchBg() {
      try {
        const accessKey = "SL0d9K8xP-fNZb3cXQY6W7Mi_rY3k_jiJR-uCJf0TMI";
        const res = await fetch(`https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${accessKey}`);
        const data = await res.json();
        setBgUrl(data.urls.full);
      } catch (err) {
        console.error('Background fetch error', err);
      }
    }
    fetchBg();
  }, []);

  return (
    <div
      id="background"
      style={{ backgroundImage: `url(${bgUrl})` }}
    />
  );
}

export default Background;