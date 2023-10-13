/**
 * The base dropzone form element. Contains the dropzone box and the
 * instructions for the user.
 *
 * @param getRootProps The props to be passed to the root element
 * @param children The children of the dropzone element
 */
const Dropzone = ({
	getRootProps,
  acceptedFiles,
	children,
}: {
	getRootProps: any;
  acceptedFiles: any;
	children: any;
}) => {

	const handleSubmit = (e: any) => {
		e.preventDefault();
    const audioFile = acceptedFiles[0];
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='mx-auto h-screen flex flex-col justify-center items-center bg-slate-900'>
			<div
				{...getRootProps({ className: 'dropzone' })}
				className='h-2/6 w-3/6'>
				{children}
			</div>
			<p className='text-xs text-slate-500 m-2'>
				Supported formats: mp3, wav, ogg, flac, m4a
			</p>
		</form>
	);
};

export default Dropzone;