import React, { useState } from 'react'

const Image = () => {
  
    const [data, setData] = useState({"file":null})


    return (
        < div >
        <h1>파일 업로드</h1>
        <form onSubmit={this.upload}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.fileChange} name="file" />
            <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default Image