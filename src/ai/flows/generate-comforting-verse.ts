'use server';
/**
 * @fileOverview A GenAI tool that crafts new, short verses or comforting affirmations based on a user's input.
 *
 * - generateComfortingVerse - A function that handles the generation of comforting verses or affirmations.
 * - GenerateComfortingVerseInput - The input type for the generateComfortingVerse function.
 * - GenerateComfortingVerseOutput - The return type for the generateComfortingVerse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateComfortingVerseInputSchema = z.object({
  moodOrKeywords: z
    .string()
    .describe(
      'The user&#x27;s current mood, feelings, or keywords to inspire the verse. Examples: &#x27;sad&#x27;, &#x27;hopeful&#x27;, &#x27;anxious&#x27;, &#x27;peace&#x27;.'
    ),
});
export type GenerateComfortingVerseInput = z.infer<
  typeof GenerateComfortingVerseInputSchema
>;

const GenerateComfortingVerseOutputSchema = z.object({
  verse: z
    .string()
    .describe(
      'A short, comforting verse or affirmation, reflecting an introspective and supportive tone.'
    ),
});
export type GenerateComfortingVerseOutput = z.infer<
  typeof GenerateComfortingVerseOutputSchema
>;

export async function generateComfortingVerse(
  input: GenerateComfortingVerseInput
): Promise<GenerateComfortingVerseOutput> {
  return generateComfortingVerseFlow(input);
}

const generateComfortingVersePrompt = ai.definePrompt({
  name: 'generateComfortingVersePrompt',
  input: {schema: GenerateComfortingVerseInputSchema},
  output: {schema: GenerateComfortingVerseOutputSchema},
  prompt: `You are an AI assistant that specializes in crafting short, comforting verses and affirmations.
Your goal is to provide supportive and introspective messages that resonate with the user's emotional state, similar to the tone of a heartfelt poem.

Based on the following mood or keywords, generate a single, short comforting verse or affirmation:

Mood or Keywords: {{{moodOrKeywords}}}`,
});

const generateComfortingVerseFlow = ai.defineFlow(
  {
    name: 'generateComfortingVerseFlow',
    inputSchema: GenerateComfortingVerseInputSchema,
    outputSchema: GenerateComfortingVerseOutputSchema,
  },
  async input => {
    const {output} = await generateComfortingVersePrompt(input);
    return output!;
  }
);
