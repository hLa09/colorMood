export const fetchRandomColors = async () => {
    try {
        const response = await fetch("http://colormind.io/api/", {
            method: "POST",
            body: JSON.stringify({ model: "default" }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data.result; // Returns an array of RGB values
    } catch (error) {
        console.error("Error fetching random colors:", error);
        return null;
    }
};