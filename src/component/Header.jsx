import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  return (
    <div className='container  grid grid-cols-3 gap-2 p-3'>
        <div className='btn btn-warning text-white text-xl    
    '
        onClick={()=>navigate('/')}
        >VPI</div>
        <div className='btn btn-success text-white text-xl'
        onClick={()=>navigate('/nice')}
        >NICE</div>
        <div className='btn btn-secondary text-white text-xl'
        onClick={()=>navigate('/genesys')}
        >GENESYS</div>

    </div>
  )
}

export default Header