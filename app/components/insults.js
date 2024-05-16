'use client';
import React, { useEffect, useState } from "react";

const Insults = () => {
  const [insult, setInsult] = useState('');

  useEffect(() => {
    // fetch('https://evilinsult.com/generate_insult.php?lang=en&type=pirate', {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // })
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setInsult(data.joke))
    // .then(data => setInsult(data.insult))
    .catch(error => console.error('Error fetching insult/joke', error));
  }, []);

  console.log(insult);


  return (
    <>
      <p>
        {insult}
      </p>
    </>
  );
};

export default Insults;