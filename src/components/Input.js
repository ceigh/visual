import React, {useEffect, useState} from 'react';
import encode from '../lib/encode';

export default function Input(props) {
  const [value, setValue] = useState(props.value || '');
  const [, setData] = useState([]);

  useEffect(() => {
    const newData = encode[props.mode](value);
    [setData, props.setAppData].map(f => f(newData));
  }, [props.setAppData, props.mode, value]);

  return <input placeholder='Type to :)' value={value} autoFocus={true}
                spellCheck={false} onChange={e => setValue(e.target.value)}/>
}
