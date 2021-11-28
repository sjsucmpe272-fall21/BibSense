import React, {useState, useEffect} from 'react';

function App() {
  const [imgs, setImgs] = useState(false);
  useEffect(() => {
    getImgs();
  }, []);

  function getImgs() {
    fetch(`http://localhost:3001`)
      .then(response => {
        return response.text();
      })
      .then(data => {
        setImgs(data);
      });
  }

  function queryImgs() {
    let argument = prompt('Enter bib number');
    // let eventName = prompt('Enter event name');
    fetch(`http://localhost:3001/${argument}`, {
      method: 'get',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getImgs();
      });
  }

  // function deleteImgs() {
  //   let bibNumber = prompt('Enter bib number');
  //   fetch('http://localhost:3001/${bibNumber}', {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getImgs();
  //     });
  // }
  
  return (
    <div>
      {imgs ? imgs : 'There is no images data available'}
      <br />
      <button onClick={queryImgs}>Query image</button>
      {// <br />
      /* <button onClick={deleteImgs}>Delete image</button> */}
    </div>
  );
}
export default App;