import React, {useState} from 'react';
import encode from '../lib/encode';
import Input from './Input';
import Modes from './Modes';
import Canvas from './Canvas';

const modes = Object.keys(encode);
const defaultMode = modes[~~(Math.random() * modes.length)];
const defaultValue = 'Awesome Creature';
const defaultColor = '#' + Math.random().toString(16).substr(-6);

export default function App() {
  const [mode, setMode] = useState(defaultMode);
  const [data, setData] = useState([]);

  return (
      <main>
        <a href='/visual' style={{color: defaultColor}}>Visual</a>
        <p>Transform your text to .png image by:</p>
        <Modes setAppMode={setMode} defaultMode={defaultMode}/>
        <Input setAppData={setData} value={defaultValue} mode={mode}/>
        {data.length ? <Canvas data={data}
                               len={Math.ceil(Math.sqrt(
                                   data.length / 4))}/> : null}
      </main>
  )
}
