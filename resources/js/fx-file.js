// Text file ya HTML read karna
async function readFileFromURL(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("File nahi mili");
      
      const data = await response.text(); // HTML/text ke liye
      // const data = await response.json(); // agar JSON hai to
      // const data = await response.blob(); // agar image/pdf hai to
      //console.log(data);
      return data;
  } catch (error) {
  console.error("Error:", error);
  }
}
