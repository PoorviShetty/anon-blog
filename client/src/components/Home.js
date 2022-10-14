import React from 'react'
import Preview from './Preview';
import useFetch from '../hooks/useFetch';

function Home() {
  const { data, error } = useFetch(
    process.env.REACT_APP_BACKEND_URL + 'posts'
  );
  if (error) console.log(error);
  return (
    <div>
      {data &&
        data.map(
          (data) =>  (
            <Preview key = {Math.random()} data = {data.date.toString()} />
          )
          
        )  
      }

    </div>
  )
}

export default Home