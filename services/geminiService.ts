
import { GoogleGenAI } from "@google/genai";

const generateRomanticImage = async (): Promise<string> => {
  // This check is for development environments where the key might not be set.
  // In a production environment, process.env.API_KEY is expected to be available.
  if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Using placeholder image.");
    // Return a placeholder image if the API key is not available
    return "https://picsum.photos/seed/love/512/512";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: 'A beautiful, artistic illustration of a couple in love, under a sky full of stars, digital art, romantic, vibrant colors',
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '1:1',
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No images were generated.");
    }
  } catch (error) {
    console.error("Error generating image with Gemini API:", error);
    // Fallback to a placeholder on API error
    return "https://picsum.photos/seed/romance/512/512";
  }
};

export { generateRomanticImage };
