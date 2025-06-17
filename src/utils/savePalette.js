import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export const savePalette = async (mood, description, colors) => {
    try {
        await addDoc(collection(db, "palettes"), {
            mood,
            description,
            colors,
            timestamp: new Date(),
        });
        console.log("Palette saved successfully!");
    } catch (error) {
        console.error("Error saving palette:", error);
    }
};
