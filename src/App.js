import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({ loading: false, msg: null })

  const handleClick = async (e) => {
    e.preventDefault()
    setData({ loading: true, content: null })
    const response = await axios.get('/.netlify/functions/test01', {
      headers: { Accept: 'application/json' },
    })
    console.log('\n\nhandle click response JSON:\n', response.data)
    setData({ loading: false, msg: response.data.msg })
  }

  return (
    <section>
      <div>
        <h2>TEST TITLE</h2>
      </div>
      <div>
        <button onClick={(e) => handleClick(e)}>
          {data.loading ? 'Loading...' : 'Call lambda'}
        </button>
        {data.msg ? <h4>{data.msg}</h4> : <h5>no message</h5>}
      </div>
    </section>
  )
}

export default App
