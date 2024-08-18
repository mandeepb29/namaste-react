import React from 'react'

function ShimmerCard() {
    return (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
            {[...Array(10)].map((index) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-90 w-full p-4">
                <div className="flex flex-col gap-4">
                <div className='h-[160px] bg-slate-300'>
                    </div>

                    <div className='h-8 bg-slate-200 w-full'></div>
                    <div className='h-4 bg-slate-200 w-20'></div>
                    <div className='h-4 bg-slate-200 w-16'></div>
                </div>
                    

                </div>
            ))
            }
        </div>
    )
}

export default ShimmerCard