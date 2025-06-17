import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchPalettes = async () => {
    const querySnapshot = await getDocs(collection(db, "palettes"));
    return querySnapshot.docs.map(doc => doc.data());
};
