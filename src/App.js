import React from 'react'
import { Offline, Online } from 'react-detect-offline'
import HomePage from 'pages/HomePage'
import SignPage from 'pages/SignPage'
import 'antd/dist/antd.dark.css'

function log () {
  console.log('[ App ]', ...arguments)
}

export default function App () {
  return (
    <>
      <Offline>
        <HomePage />
      </Offline>

      <Online>
        {/* <SignPage /> */}
        <HomePage />
      </Online>
    </>
  )
}
