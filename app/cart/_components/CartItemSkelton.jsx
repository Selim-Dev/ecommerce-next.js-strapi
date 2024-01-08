import React from 'react'

function CartItemSkelton() {
	return (
		<div className='flex flex-col gap-5'>
			{[1, 2, 3].map((item, index) => (
				<div className='flex gap-5'>
					<div className='w-24 h-16 rounded-lg bg-slate-300 animate-pulse'>
					</div>
					<div className='flex flex-col w-full gap-3'>
						<div className='h-5 w-[70%] bg-slate-300 
            animate-pulse rounded-md'>
						</div>
						<div className='h-5 w-[20%] bg-slate-300 
            animate-pulse rounded-md'>
						</div>
					</div>
					<div className='h-5 w-[20%] bg-slate-300 
            animate-pulse rounded-md'>
					</div>
				</div>
			))}

		</div>
	)
}

export default CartItemSkelton