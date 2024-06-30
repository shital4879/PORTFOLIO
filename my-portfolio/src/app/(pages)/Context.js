import React, { createContext } from 'react'

const newcontext = createContext();


export default function Context({children}) {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <newcontext.Provider value={{isHovered,setIsHovered}}>
        {children}
      
    </newcontext.Provider>
  )
}
