import React from 'react';

const Color: string = '#cc1313';

export default function AvailableForWorkBtn() {
  return (
    <button className='bg-dark-gray-3 border-border-color h-10 rounded-3xl border px-3 sm:h-11 sm:px-4'>
      <div className='flex items-center justify-center gap-3'>
        <div
          className='relative flex h-2 w-2 items-center justify-center rounded-full'
          style={{ backgroundColor: Color }}
        >
          <div className='pointer-events-none absolute h-3 w-3 animate-ping rounded-full bg-red-400/30'></div>
        </div>
        <span className='text-light-gray-3 shrink-0 text-sm'>Availability For Work</span>
      </div>
    </button>
  );
}
