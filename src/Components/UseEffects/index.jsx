import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState({
    number:1,
    type: 'int'
  });
  console.log(count)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // setCount(count +1 ) esto haria un ciclo infinito ya que renderizaria contenido constantement
    console.log('hiciste click')
  },[]);

  return (
    <div>
      <p>You clicked {count.number} times</p>
      <button onClick={() => setCount(item => { return {...item,number: item.number + 1} })}>
        Click me
      </button>
    </div>
  );
}
export default Example;