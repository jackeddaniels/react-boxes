function Box({backgroundColor, width, height}) {
  const boxStyle = {
    backgroundColor,
    width,
    height
  }

  return (
    <div style={boxStyle}>
      <button>X</button>
    </div>

  )

}

export default Box;