import React, { useEffect, useState } from 'react'

function Wrapper({children,background,className}) {
 const [screen, setScreen] = useState(window.innerWidth)

 
  return (
     <div className={`w-100 d-flex justify-content-center ${className}`} style={{background:background}}>
        <div style={{width:screen<768?'100%':'70%'}}>
            {children}
        </div>
     </div>
  )
}

export default Wrapper