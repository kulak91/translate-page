import axios from "axios";

class DeepLTranslator {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api-free.deepl.com/v2/translate";
  }

  async translate(text: string, targetLang = "DE") {
    try {
      const response = await axios.post(
        this.baseUrl,
        new URLSearchParams({
          auth_key: this.apiKey,
          text: text,
          target_lang: targetLang,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data.translations[0].text;
    } catch (error) {
      console.error("Error translating text:", error);
      throw new Error("Translation failed");
    }
  }
}

export { DeepLTranslator };
