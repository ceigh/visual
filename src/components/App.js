import React, {useState} from 'react';
import encode from '../lib/encode';
import Input from './Input';
import Modes from './Modes';
import Canvas from './Canvas';

const modes = Object.keys(encode);
const defaultMode = modes[~~(Math.random() * modes.length)];
const defaultValue = 'Awesome Visual';

export default function App() {
  const [mode, setMode] = useState(defaultMode);
  const [data, setData] = useState([]);

  return (
      <main>
        <h1>Visual</h1>
        <Modes setAppMode={setMode} defaultMode={defaultMode}/>
        <Input setAppData={setData} value={defaultValue} mode={mode}/>
        {data.length ? <Canvas data={data}
                               len={Math.ceil(Math.sqrt(
                                   data.length / 4))}/> : null}
      </main>
  )
}
