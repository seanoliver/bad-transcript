'use client';

export default function Home() {

	return (
		<div className='mx-auto h-screen flex justify-center items-center'>
			<label className='h-2/6 w-3/6 border-2 border-dashed flex justify-center items-center border-gray-500 rounded text-xs text-gray-500'>
        Drop audio file here, or click to select
				<input
					type='file'
					className='hidden'
				/>
			</label>
		</div>
	);
}
