import { Ai } from '@cloudflare/ai';
import { KVNamespace, PagesFunction } from '@cloudflare/workers-types';

export interface Env {
	AI: KVNamespace;
}

// @ts-ignore
export const onRequest: Promise<PagesFunction<Env>> = async context => {
	const res: any = await fetch(
		'https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav'
	);
	const blob = await res.arrayBuffer();

	const ai = new Ai(context.env.AI);
	const input = {
		audio: [...new Uint8Array(blob)],
	};

	const response = await ai.run('@cf/openai/whisper', input);

	return Response.json({ input: { audio: [] }, response });
};
