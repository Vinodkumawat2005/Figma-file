import React, { createContext } from 'react'

const Maincontext = createContext();
export default function Context(props) {
  return (
    <div>
      <Maincontext.Provider value={{}}>
        {props.children}
      </Maincontext.Provider>
    </div>
  )
}
