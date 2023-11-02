import './Box.css';

/** Box: Takes props to create box, packages in a style object and renders the box
 * and an associated delete button
 *
 * Props:
 * - backGroundColor
 * - width
 * - height
 * - removeBox function for handling clicks
 *
 * App --> BoxList --> Box
 *
 */
function Box({backgroundColor, width, height, removeBox}) {
  const boxStyle = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  }
  //TODO: put button style in css file
  return (
    <div className="Box">
      <div style={boxStyle}/>
      <button style={{display: 'block'}}onClick={removeBox}>X</button>
    </div>

  )

}

export default Box;