
import React from 'react'

const Marquee = ({ text }) => {
    
  return (
    <section>
        <div>
            <p>
                { text }
            </p>
        </div>
        <div className='logos'>
            <div className='logos-slide'>
                
            </div>
        </div>
    </section>
  )
}

export default Marquee