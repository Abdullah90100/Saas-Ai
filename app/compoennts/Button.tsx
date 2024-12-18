import React from 'react'

function Button(props:React.PropsWithChildren) {
  return (
    <div>
      <button className='relative border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#1e1033] to-[#6e2a9d] '>
        <div className='absolute inset-0'>
          <div className='border border-white/10 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] rounded-lg'></div>
          <div className='border absolute inset-0 border-white/30 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg'></div>
          <div className='absolute inset-0 shadow-[0_0_8px_rgb(140,169,255,.4)_inset] rounded-lg'></div>
        </div>
        <span>{props.children}</span>
      </button>
    </div>
  )
}

export default Button