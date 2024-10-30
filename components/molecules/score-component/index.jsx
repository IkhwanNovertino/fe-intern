import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react"

export default function ScoreComponent() {
  const [scoreComponent, setScoreComponent] = useState([
    {
      _id: '',
      title: ''
    }
  ]);
  const [score, setScore] = useState(
    [{
      titles: '',
      number: '',
    }]
  )
  const addScore = () => {
    setScore([...score, { title: '', number: '' }])
    console.log(score);
    
  }

  const handleChangeScore = (event, index) => {
    const field = event.target.name;
    
    const newScore = [...score];
    newScore[index][field] = event.target.value;
    setScore(newScore);
  }

  const token = getCookie('token');
  const jwtToken = atob(token);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/score-component`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      // console.log(res.data.data);
      setScoreComponent(res.data.data);
      console.log(scoreComponent);
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <>
      {score.map((data, index) => (
        <div key={index} className="mt-3">
          <select
            name="titles"
            id="titles"
            value={data.titles}
            onChange={(event) => handleChangeScore(event, index)}
            className="w-full py-2 px-2 items-center text-base font-light rounded-md focus:outline-none border border-gray-300 focus-within:border-primary "
          >
            <option label="--- Pilih salah satu komponen nilai ---"></option>
            {scoreComponent.map((item) => (
              <option value={item._id} label={item.title}></option>
            ))}
          </select>
          <input
            type="number"
            name="number"
            id="number"
            value={data.number}
            onChange={(event) => handleChangeScore(event, index)}
            className="appearance-none focus:outline-none text-base font-normal bg-primary/0 px-2 py-2 md:py-2 mt-2 rounded-md border border-gray-300 focus-within:border-primary"
          />
        </div>
      ))}

      <button onClick={addScore} className="mt-2">+ Tambah Data Nilai</button>
    </>
  )
};
