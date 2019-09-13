import React, {useState} from 'react';
import encode from '../lib/encode';

export default function Modes(props) {
  const [mode, setMode] = useState(props.defaultMode);
  const labels = Object.keys(encode).slice().map((m, i) =>
      <label key={i}>
        {m}
        <input defaultChecked={m === mode}
               type='radio' name='mode'
               onClick={() => {
                 setMode(m);
                 props.setAppMode(m);
               }}/>
      </label>
  );

  return <div>{labels}</div>
}
