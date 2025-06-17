import { detectMood } from "./detectMood";

const moodColors = {
    happy: ["#FFD700", "#FFEC8B", "#FFFACD", "#F0E68C", "#FFE4B5", "#FFB347", "#FFC107", "#FFA07A", "#FF69B4", "#87CEEB", "#FF8C00", "#FF4500", "#FAD7A0"],
    calm: ["#A7C7E7", "#B5EAD7", "#E2F0CB", "#F3D9B1", "#D4A5A5", "#ADD8E6", "#B2DFDB", "#D6EAF8", "#AED6F1", "#D4E6F1", "#AFEEEE", "#87CEFA", "#B0E0E6"],
    mysterious: ["#4B0082", "#6A0DAD", "#8A2BE2", "#483D8B", "#2E1A47", "#292929", "#5D3FD3", "#3D2B56", "#2C1E3A", "#1B1B1B", "#D2B4DE", "#BB8FCE", "#A569BD"],
    energetic: ["#FF5733", "#FFC300", "#FF6F61", "#C70039", "#900C3F", "#FF4500", "#E63946", "#F72585", "#FF8C00", "#FF1493", "#FF69B4", "#FFA500", "#FFD700"],
    sad: ["#708090", "#778899", "#A9A9A9", "#B0C4DE", "#C0C0C0", "#5F6A6A", "#ABB2B9", "#6C757D", "#4A5568", "#3D3D3D", "#2F4F4F", "#D5DBDB", "#CACFD2", "#ABB2B9"],
    romantic: ["#FF69B4", "#FFC0CB", "#DB7093", "#C71585", "#E75480", "#F08080", "#FF1493", "#FF6F61", "#FADBD8", "#F5CBA7", "#FA8072", "#FFB6C1", "#FF8C69"],
    peaceful: ["#98FB98", "#8FBC8F", "#C3E6CB", "#B2DFDB", "#A2D9CE", "#B0E57C", "#9ACD32", "#6B8E23", "#7CFC00", "#32CD32", "#D5F5E3", "#ABEBC6", "#A9DFBF"],
    confident: ["#FF4500", "#DC143C", "#B22222", "#8B0000", "#D2691E", "#A52A2A", "#CD5C5C", "#E9967A", "#FF6347", "#FF7F50", "#F5CBA7", "#E59866", "#D35400"],
    nostalgic: ["#D2B48C", "#F5DEB3", "#E3A857", "#C19A6B", "#B8860B", "#DAA520", "#CD853F", "#8B4513", "#A0522D", "#8B5A2B", "#FAD7A0", "#F9E79F", "#FDEBD0"],
    dull: ["#D3D3D3", "#C0C0C0", "#BEBEBE", "#A9A9A9", "#808080", "#696969", "#585858", "#474747", "#363636", "#252525", "#D5DBDB", "#CACFD2", "#ABB2B9"],
    regretful: ["#B0C4DE", "#A9A9A9", "#778899", "#708090", "#6C757D", "#5F6A6A", "#4A5568", "#3D3D3D", "#2F4F4F", "#D5DBDB", "#CACFD2", "#ABB2B9"],
    unpleasant: ["#8B0000", "#DC143C", "#B22222", "#900C3F", "#C70039", "#FF4500", "#FF6347", "#FF6F61", "#E63946", "#D2691E", "#A52A2A", "#CD5C5C"],
    dreamy: ["#E6E6FA", "#D8BFD8", "#DA70D6", "#BA55D3", "#9370DB", "#B19CD9", "#C3B1E1", "#D1C4E9", "#E0BBE4", "#F3E5F5", "#FADBD8", "#F5CBA7"],
    playful: ["#FF69B4", "#FFC0CB", "#FFB6C1", "#DB7093", "#FF6F61", "#FADBD8", "#F5CBA7", "#F9E79F", "#FFA07A", "#FF8C00", "#FFD700", "#FF4500"],
    hopeful: ["#FFD700", "#FFEC8B", "#FFFACD", "#F0E68C", "#FFE4B5", "#FFB347", "#FFDD44", "#FFC107", "#FAD7A0", "#FFA500", "#FF8C00", "#FF4500"],
};

export const fetchPalette = async (userInput) => {
    const mood = detectMood(userInput);
    console.log("Detected Mood:", mood);

    // If mood isn't found, default to 'neutral' palette
    const primaryMood = moodColors[mood] ? mood : "neutral";

    if (!moodColors[primaryMood]) {
        console.error(`No palette found for mood: ${primaryMood}`);
        return { colors: moodColors["neutral"].slice(0, 5), mood: "neutral" };
    }

    // Randomly select 5 colors
    const colors = moodColors[primaryMood].sort(() => 0.5 - Math.random()).slice(0, 5);
    console.log("Generated Palette:", colors);

    return { colors, mood: primaryMood };
};








