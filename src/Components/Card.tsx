import React, { ReactNode } from 'react'

// rafce

interface CardProps{
    title:string
    para:string
    children:ReactNode
    clickAlert:(message:string)=>void
}

const Card = ({title,para,children,clickAlert}:CardProps) => {
    
  return (

        <div>
            <h1>{title}</h1>
            <p>{para}</p>
            {children}
            <button onClick={()=>{clickAlert("hudhoius")}}>Alert</button>
        </div>
  )
}

export default Card