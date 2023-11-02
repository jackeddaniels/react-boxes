function Box({backgroundColor, width, height, removeBox}) {
  const boxStyle = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  }

  return (
    <div >
      <div style={boxStyle}/>
        <button onClick={removeBox}>X</button>
    </div>

  )

}

export default Box;