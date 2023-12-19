import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error fetching data:', error));
    // api.get('/api/data')
    //   .then((response) => {
    //     setData(response.data);        
    //   })
    //   .catch((error) => {
    //     console.error('에러', error);
    //   });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>리엑트 + Express </h1>
        <p>데이터 from 서버: {data} </p>

      </header>
    </div>
  );
}

export default App;
