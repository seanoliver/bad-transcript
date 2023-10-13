'use client';

import { Button } from '@/components/ui/button';
import { File } from 'buffer';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Home() {
	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isDragActive,
		isFocused,
		inputRef,
	} = useDropzone({
		onDrop: acceptedFiles => {
			console.log('drop', acceptedFiles);
		},
		onDropAccepted: acceptedFiles => {
			console.log('drop accepted', acceptedFiles);
		},
		multiple: false,
	});

	const baseZoneStyle =
		'max-w-full h-full flex justify-center items-center rounded-xl text-xs text-gray-500';

	const dragActiveTw = isDragActive
		? 'bg-blue-400 text-white text-bold border-4 border-dashed border-blue-100'
		: 'bg-slate-800 border-2 border-dashed border-slate-500';

	const fileAcceptedTw =
		acceptedFiles.length > 0 ? 'bg-green-500' : 'bg-slate-900';

	return (
		<Dropzone
			getRootProps={getRootProps}
			getInputProps={getInputProps}
			acceptedFiles={acceptedFiles}
			isDragActive={isDragActive}>
			{acceptedFiles.length > 0 ? (
				<FullDropzone
					currentFile={acceptedFiles[0]}
					baseZoneStyle={baseZoneStyle}
				/>
			) : (
				<EmptyDropzone
					baseZoneStyle={baseZoneStyle}
					getInputProps={getInputProps}
					isDragActive={isDragActive}
				/>
			)}
		</Dropzone>
	);
}

const Dropzone = ({
	getRootProps,
	getInputProps,
	acceptedFiles,
	isDragActive,
	children,
}: {
	getRootProps: any;
	getInputProps: any;
	acceptedFiles: any;
	isDragActive: any;
	children: any;
}) => {
	const baseZoneStyle =
		'max-w-full h-full flex justify-center items-center rounded-xl text-xs text-gray-500';

	const fileAcceptedTw =
		acceptedFiles.length > 0 ? 'bg-green-500' : 'bg-slate-900';

	return (
		<div className='mx-auto h-screen flex justify-center items-center bg-slate-900'>
			<div
				{...getRootProps({ className: 'dropzone' })}
				className='h-2/6 w-3/6'>
				{children}
			</div>
		</div>
	);
};

const EmptyDropzone = ({
	getInputProps,
	baseZoneStyle,
	isDragActive,
}: {
	getInputProps: any;
	baseZoneStyle: string;
	isDragActive: boolean;
}) => {
	const dragActiveTw = isDragActive
		? 'bg-blue-400 text-white text-bold border-4 border-dashed border-blue-100'
		: 'bg-slate-800 border-2 border-dashed border-slate-500';

	return (
		<>
			<input {...getInputProps()} />
			<p className={`${baseZoneStyle} ${dragActiveTw}`}>
				Drop audio file here, or click to select
			</p>
		</>
	);
};

const FullDropzone = ({
	currentFile,
	baseZoneStyle,
}: {
	currentFile: any;
	baseZoneStyle: string;
}) => {
	return (
		<div className={`${baseZoneStyle} flex flex-col h-full w-full gap-4`}>
			<p className=''>{currentFile.name}</p>
			<Button>Upload now!</Button>
		</div>
	);
};
