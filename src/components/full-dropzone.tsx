import { BASE_ZONE_STYLE } from '@/lib/constants'
import { Button } from './ui/button';

/**
 * The dropzone when a file valid file has been dropped into the zone and
 * is ready to be transcribed.
 *
 * @param currentFile The file object of the currently "dropped" file
 */
const FullDropzone = ({ currentFile }: { currentFile: any }) => {
	return (
		<div className={`${BASE_ZONE_STYLE} flex flex-col h-full w-full gap-4`}>
			<p className=''>{currentFile.name}</p>
			<Button
				type='submit'
				className='bg-slate-700 hover:bg-slate-800'>
				Transcribe!
			</Button>
		</div>
	);
};

export default FullDropzone;