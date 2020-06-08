import React from 'react';
import './App.css';
import FormData from 'form-data';
import Axios from 'axios';

function App() {
  const URL = `https://s2.beex.vn:8099/upload?serial=000000&action=record-image&timestamp=${new Date().getTime()}&extraInfo={}&duration=30`;

  const handleSubmit = (e) => {
    e.preventDefault();
    let file = e.target.elements.image.files[0];

    let data = new FormData();
    data.append('file', file, file.name);

    return Axios.post(URL, data, {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    })
      .then((response) => {
        console.log('RESPONSE:', response);
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="image" className="fileInput" type="file" />
        <button className="submitButton" type="submit">
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default App;
