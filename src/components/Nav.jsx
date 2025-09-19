import React from 'react'
import Layout from './Layout'

function Nav() {
    return (

        
        
                <div className='flex relative justify-between p-4 'data-theme="skibidinova" >

            <div>
                <img src="/nav.png" className="h-[42px]" />
            </div>
<div className="p-[2px] hidden  rounded-full bg-gradient-to-r from-primary to-secondary md:inline-block">
  <div className="flex items-center gap-6 bg-base-200 rounded-full px-6 py-3 text-white">
    <a href="#" className="hover:text-primary text-xs font-medium">Home</a>
    <a href="#" className="hover:text-primary text-xs font-medium">Explore</a>
    <a href="#" className="hover:text-primary text-xs font-medium">About</a>
    <a href="#" className="hover:text-primary text-xs font-medium">How it works</a>
  </div>
</div>

      <div className="absolute rounded-full z-10 right-0 flex justify-center">
        <div className="w-40 h-40 bg-primary/50 blur-3xl rounded-full"></div>
      </div>






            <div>
                <button className='btn btn-primary'> 
                    connect wallet
                </button>
            </div>
        </div>
            
    
    
     )
}

export default Nav