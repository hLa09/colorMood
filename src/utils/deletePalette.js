import { db } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const deletePalette = async (paletteId) => {
    try {
        await deleteDoc(doc(db, "palettes", paletteId));
        console.log("Palette deleted successfully!");
    } catch (error) {
        console.error("Error deleting palette:", error);
    }
};