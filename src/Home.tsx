import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>NewCycleForm : {activeCycle}</h1>
}

function Countdown() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      Countdown: {activeCycle}
      <button onClick={() => setActiveCycle(2)}>update</button>
    </h1>
  )
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
