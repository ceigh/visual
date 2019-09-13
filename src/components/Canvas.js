import React, {useEffect} from 'react';

const canvas = React.createRef();

export default function Canvas(props) {
  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const imageData = ctx.createImageData(props.len, props.len);
    imageData.data.map((v, i, a) => a[i] = props.data[i]);
    ctx.putImageData(imageData, 0, 0);
  }, [props.data, props.len]);

  return <canvas ref={canvas} width={props.len} height={props.len}/>
}
