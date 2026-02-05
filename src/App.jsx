import { useState } from 'react'
import HelloEffect from './components/HelloEffect.jsx'
import Counter from './components/Counter.jsx'
import Counterupdatetitle from './components/Counterupdatetitle.jsx'
import Timerwithcleanup from './components/Timerwithcleanup.jsx'
import Conditionaluseeffect from './components/Conditionaluseeffect.jsx'
import Fetchingdata from './components/Fetchingdata.jsx'

function App() {
  return (
    <>
      <HelloEffect />
      <Counter />
      <Counterupdatetitle />
      <Timerwithcleanup />
      <Conditionaluseeffect />
      <Fetchingdata />
    </>
  )
}

export default App
