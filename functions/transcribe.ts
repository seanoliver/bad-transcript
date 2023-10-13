import { Ai } from '@cloudflare/ai';
import { KVNamespace, PagesFunction } from '@cloudflare/workers-types';

export interface Env {
	AI: KVNamespace;
}

// @ts-ignore
export const onRequest: Promise<PagesFunction<Env>> = async context => {

  const requestBody = await context.request.json();
  const { audio } = requestBody.input;
  const blob = await audio.arrayBuffer();

  // const res: any = await fetch(
	// 	'https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav'
	// );
	// const blob = await res.arrayBuffer();

	const ai = new Ai(context.env.AI);
	const input = {
		audio: [...new Uint8Array(blob)],
	};

	const response = await ai.run('@cf/openai/whisper', input);

	return Response.json({ input: { audio: [] }, response });
};
// POST /client/v4/accounts/e313894a3432caf35d1f477f60494981/ai/run/@cf/openai/whisper HTTP/1.1
// Authorization: Bearer KlP0MjQRL18Cg4rYVvm5J8XnBbN9l61ffYZtzh-N
// Content-Length: 3249924
// Content-Type: application/octet-stream
// Host: api.cloudflare.com
// User-Agent: HTTPie

// <binary data>