import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

// Simple in-memory cache to avoid redundant requests
const imageCache: Record<string, string> = {};

// Queue to throttle requests and avoid burst limits
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1000; // 1 second between requests

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function generateServiceImage(prompt: string, retryCount = 0): Promise<string | null> {
  // Check cache first
  if (imageCache[prompt]) {
    return imageCache[prompt];
  }

  // Throttling
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await wait(MIN_REQUEST_INTERVAL - timeSinceLastRequest);
  }
  lastRequestTime = Date.now();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = `data:image/png;base64,${part.inlineData.data}`;
        imageCache[prompt] = base64Data;
        return base64Data;
      }
    }
    return null;
  } catch (error: any) {
    // Handle 429 Quota Exceeded
    if (error?.status === 429 || error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
      if (retryCount < 2) {
        const delay = Math.pow(2, retryCount) * 2000; // 2s, 4s backoff
        console.warn(`Quota exceeded. Retrying in ${delay}ms... (Attempt ${retryCount + 1})`);
        await wait(delay);
        return generateServiceImage(prompt, retryCount + 1);
      }
      console.error("Quota exhausted after retries.");
    } else {
      console.error("Error generating image:", error);
    }
    return null;
  }
}
