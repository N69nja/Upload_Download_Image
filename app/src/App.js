import './App.css';
import { useState } from 'react';
import Button from './components/Button'
import Upload from './components/Upload';
import Downlaod from './components/Downlaod';

function App() {
  const [upload, setupload] = useState(false)
  const [download, setdownload] = useState(false)
  const onClick = () => {
    setupload(!upload)
    setdownload(false)

  }
  const onClick2 = () => {
    setdownload(!download)
    setupload(false)

  }
  return (
    <div className='container'>
      <Button title={upload ? "close" : "Upload"}
        color={upload ? "red" : "green"}

        onClick={onClick} />

      <Button title={download ? "close" : "Downlaod"}
        color={download ? "red" : "green"}
        onClick={onClick2} />


      {upload && <Upload />}
      {download && <Downlaod />}
    </div >

  );
}
export default App;
