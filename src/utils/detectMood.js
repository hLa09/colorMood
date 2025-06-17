const moodKeywords = {
    happy: ["happy", "joyful", "excited", "cheerful", "content", "smiling", "delighted", "thrilled", "ecstatic", "elated", "radiant", "sunny", "uplifted", "euphoric", "blissful", "gleeful", "jubilant"],
    calm: ["calm", "relaxed", "peaceful", "serene", "tranquil", "soothing", "quiet", "composed", "gentle", "harmonious", "balanced", "zen", "meditative", "restful", "still", "untroubled"],
    romantic: ["romantic", "loving", "passionate", "affectionate", "tender", "sweet", "intimate", "dreamy", "sentimental", "rosy", "flirtatious", "amorous", "charming", "devoted", "loved", "adored", "love"],
    mysterious: ["enigmatic", "intriguing", "shadowy", "cryptic", "hidden", "obscure", "veiled", "arcane", "unpredictable", "elusive"],
    energetic: ["lively", "active", "dynamic", "powerful", "charged", "spirited", "bold", "intense", "electric", "animated"],
    sad: ["melancholy", "gloomy", "heartbroken", "somber", "tearful", "despondent", "miserable", "lonely", "wistful", "blue"],
    peaceful: ["soothing", "meditative", "zen", "flowing", "airy", "tranquil", "placid", "mellow", "unruffled", "gentle"],
    confident: ["bold", "fearless", "assertive", "empowered", "dominant", "resolute", "steadfast", "commanding", "strong", "determined"],
    nostalgic: ["wistful", "reminiscent", "vintage", "classic", "retro", "historical", "yearning", "homesick", "longing", "timeless"],
    dull: ["plain", "boring", "neutral", "monotone", "lifeless", "uninspired", "ordinary", "simple", "basic", "flat"],
    regretful: ["missed", "lost", "forgotten", "remorseful", "aching", "yearning", "unfulfilled", "longing", "sorrowful"],
    unpleasant: ["awful", "terrible", "horrible", "harsh", "disturbing", "jarring", "repulsive", "disgusting", "uncomfortable"],
    hopeful: ["optimistic", "bright", "encouraging", "uplifting", "aspiring", "promising", "motivated", "positive", "cheerful"],
    dreamy: ["fantasy", "whimsical", "ethereal", "surreal", "enchanted", "magical", "otherworldly", "imaginative", "mystical"],
    playful: ["quirky", "lighthearted", "carefree", "bubbly", "joyous", "spontaneous", "fun", "silly", "cheeky", "lively"],
    bold: ["striking", "daring", "vivid", "intense", "commanding", "fearless", "powerful", "strong", "dramatic", "assertive"],
    pastel: ["soft", "gentle", "muted", "airy", "delicate", "subtle", "light", "dreamy", "whispered", "pale"],
    vibrant: ["bright", "electric", "neon", "eye-catching", "colorful", "dynamic", "energetic", "radiant", "bold", "luminous"],
};

export const detectMood = (userInput) => {
    console.log("User Input:", userInput);

    if (!userInput || userInput.trim() === "") return "neutral";

    // Extract meaningful words, removing common filler words
    const words = userInput.toLowerCase().match(/\b\w+\b/g) || [];
    console.log("Tokenized Words:", words);

    let detectedMoods = [];

    for (const mood in moodKeywords) {
        if (words.some(word => moodKeywords[mood].includes(word))) {
            detectedMoods.push(mood);
        }
    }

    if (detectedMoods.length === 0) {
        console.log("No match found, returning neutral.");
        return "neutral";
    }

    console.log("Matched Moods:", detectedMoods);
    return detectedMoods[0]; // Return first matched mood
};





