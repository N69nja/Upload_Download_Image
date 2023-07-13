import { useState } from "react"
const Downlaod = () => {
  const [code, setcode] = useState('')
  const [Image_Url, setImage_Url] = useState(null)
  const handleCode = (e) => {
    setcode(e.target.value)
  }
  const onClick = async (e) => {
    e.preventDefault();
    setImage_Url(null)
    const formdata = new FormData()
    formdata.append('code', code);
    await fetch('http://localhost:5000/check', {
      method: 'POST',
      body: formdata,
    }

    )
      .then(response => response.blob())
      .then(imageBlob => {
        const imageUrl = URL.createObjectURL(imageBlob)
        console.log(imageUrl)
        setImage_Url(imageUrl)


      })
      .catch((error) => console.error(error))




  }
  return (
    <div className="form-control">
      <form onSubmit={onClick}>
        <label className="task" >Enter youre code</label>
        <input type="text" name="code" value={code} onChange={handleCode} />
        <input className="btn" type="submit" value="send" />
      </form >
      {Image_Url &&
        (<>
          <a className="btn" href={Image_Url}> Downlaod </a>
          <img src={Image_Url} alt="Not found" />
        </>)}




    </div>
  )


}
export default Downlaod
