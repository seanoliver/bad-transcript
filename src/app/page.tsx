'use client';

import Dropzone from '@/components/dropzone';
import EmptyDropzone from '@/components/empty-dropzone';
import FullDropzone from '@/components/full-dropzone';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

// Base styles for the file dropzone box
export const BASE_ZONE_STYLE =
	'max-w-full h-full flex justify-center items-center rounded-xl text-xs text-gray-500';

/**
 * The home page of the application. Contains the file dropzone and
 * the transcription results. Controls rendering of the dropzone and the inner
 * empty or full dropzone elements (depending on state).
 *
 * TODO: Implement the transcription results
 */
export default function Home() {
	const [fileLoaded, setFileLoaded] = useState(false);
	const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
		useDropzone({
			accept: {
				'audio/*': ['*.mp3', '*.wav', '*.ogg', '*.flac', '*.m4a'],
			},
			onDrop: acceptedFiles => {
				console.log('drop', acceptedFiles);
			},
			onDropAccepted: acceptedFiles => {
				console.log('drop accepted', acceptedFiles);
			},
			onDropRejected: () => {
				console.log('drop rejected');
			},
			multiple: false,
			noClick: fileLoaded,
		});

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setFileLoaded(true);
    }
  }, [acceptedFiles]);

	return (
		<Dropzone
			getRootProps={getRootProps}
      acceptedFiles={acceptedFiles}>
			{fileLoaded ? (
				<FullDropzone currentFile={acceptedFiles[0]} />
			) : (
				<EmptyDropzone
					getInputProps={getInputProps}
					isDragActive={isDragActive}
				/>
			)}
		</Dropzone>
	);
}
