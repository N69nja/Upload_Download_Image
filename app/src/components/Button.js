function Button({ title, color, onClick }) {
  return (

    <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{title}</button>

  )


}
export default Button
