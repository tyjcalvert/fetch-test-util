import { useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [url, setUrl] = useState('')
  const [data, setData] = useState('')

  const getData = async (url) => {
    const response = await axios.get(url)
    const dataAsText = JSON.stringify(response.data);
    setData(dataAsText);
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <>
      <div>
        <textarea defaultValue={data} disabled name="data" id="" cols="30" rows="10"/>
      </div>
      <div className="input-container">
        <input name="url-input" value={url} onChange={handleUrlChange}/>
        <button onClick={() => getData(url)}>
          Get Data
        </button>
      </div>
    </>
  )
}

export default App
