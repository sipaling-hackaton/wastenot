import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyCoyd4GPFVTIHoDsisj-4rGBJxmJNEbPh8");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    }
  ]
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1192,
  responseMimeType: "text/plain",
};


async function fileToGenerativePart(file: File) {
  const base64EncodedDataPromise = new Promise(async (resolve) => {
    const reader = file.stream().getReader();
    const imageDataU8: number[] = [];

    while (true) {
      const {done, value} = await reader.read();
      if (done) break;
      // @ts-ignore
      imageDataU8.push(...value);
    }

    const base64EncodedData = btoa(String.fromCharCode(...imageDataU8));

    resolve(base64EncodedData);
  });

  return {
    inlineData: {data: await base64EncodedDataPromise, mimeType: file.type},
  } as any;
}


async function chatGemini(prevState: any, formData: FormData) {
  const parts = [
    {
      text: "input: for next chat, you should refer to yourself as Wastenot, a chatbot for helping identify waste from images. it will predict what kind of waste is in the image." +
          ", please refer to its type such as PET, PE, PP, etc" +
          ""
    },
    {text: "output: Ok got it, I will refer to myself as Wastenot, a chatbot for helping identify waste. I will predict what kind of waste is in the image."},
  ];

  const input = formData.get("input") as string;
  const image = formData.get("file") as File;

  if (image) {
    parts.push(await fileToGenerativePart(image));
  }

  parts.push({text: `input: ${input}`});
  let result
  try {
    result = await model.generateContent({
      contents: [{role: "user", parts}],
      generationConfig,
    });
  } catch (error) {
    console.log(error)
    return {
      input: input,
      output: "error, check your network connection"
    }
  }
  console.log(result)
  return {
    input: {
      text: input,
      image: image,
      sender: "user"
    },
    output: {
      text: result.response.text(),
      image: "",
      sender: "model"
    }
  }
}

export {chatGemini};