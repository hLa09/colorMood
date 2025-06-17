import { db } from "./utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updatePalette = async (paletteId, updatedData) => {
    try {
        const paletteRef = doc(db, "palettes", paletteId);
        await updateDoc(paletteRef, updatedData);
        console.log("Palette updated successfully!");
    } catch (error) {
        console.error("Error updating palette:", error);
    }
};
