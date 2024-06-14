import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PhoneIcon from '@mui/icons-material/Phone';

export default function page() {
  return (
    <div className='pt-14 pl-20 pr-20 bg-black text-white w-dvw h-dvh'>
       <button className="pl-4 pr-4 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
       Drop Us Line
      </button>
      <div className="mt-4 text-3xl font-medium">Contact</div>
      <div>
        <div>
            <LocationOnIcon/>
            <div>A/P Kunnur,Dist-Belgaum, Karnakataka</div>
        </div>
        <div>
            <MarkunreadIcon/>
            <div>patilshital9730@gmail.com</div>
        </div>
        <div>
            <PhoneIcon/>
            <div>+91 8147824801</div>
        </div>
      </div>

    </div>
  )
}
