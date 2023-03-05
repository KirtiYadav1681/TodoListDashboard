import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Chart from "./Chart/Chart";
import { ShowTodoList } from './ShowTodoList';


const Home = () => {
    const [ Data, setData ] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/todo/agg")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        },[]);

  return (
    <section>
        <Chart Data={Data}/>
        <ShowTodoList />
    </section>
  )
}

export default Home