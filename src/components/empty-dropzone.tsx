import { BASE_ZONE_STYLE } from '@/lib/constants'

/**
 * The dropzone element when no file has yet been dropped into the zone.
 * Updates the style of the dropzone based on whether or not a file is
 * currently being dragged over the zone.
 *
 * @param getInputProps The props to be passed to the input element
 * @param isDragActive Whether or not a file is currently being dragged over the zone
 */
const EmptyDropzone = ({
	getInputProps,
	isDragActive,
}: {
	getInputProps: any;
	isDragActive: boolean;
}) => {
	const dragActiveTw = isDragActive
		? 'bg-blue-400 text-white text-bold border-4 border-dashed border-blue-100'
		: 'bg-slate-800 border-2 border-dashed border-slate-500';

	return (
		<>
			<input {...getInputProps()} />
			<p className={`${BASE_ZONE_STYLE} ${dragActiveTw}`}>
				Drop audio file here, or click to select
			</p>
		</>
	);
};

export default EmptyDropzone;