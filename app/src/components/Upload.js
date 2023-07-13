import { useState } from "react";

const Upload = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const [code, setcode] = useState('')
  const ImagehandleChange = (e) => {
    setName(e.target.value)
  }
  const FilehandleChange = (e) => {
    setImage(e.target.files[0]);

  }

  const onClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image)
    await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    }

    )
      .then(response => response.json())
      .then(data => {
        setcode(data.message)

        console.log(data)
      })
      .catch((error) => console.error(error))
  }

  return (

    <div className="form-control"  >
      <form onSubmit={onClick} >
        <input type="text" name="name" value={name} onChange={ImagehandleChange} required />
        <input type="file" name="image" onChange={FilehandleChange} required />
        <input className="btn" type="submit" value="send" />


      </form>
      <p className="task">{code}</p>
    </div >


  )
}
export default Upload
