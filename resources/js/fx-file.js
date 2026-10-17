/* 
  ye 1 handler function hai, 
  jab bhi file read krenge to 1 uid pass krenge and is function me wo uid se file k bare me pta lgega..
*/
async function handler_FileReadDone(uid, fileContent) {
  console.log("handler_FileReadDone - uid = "+uid);
}

// Text file ya HTML read karna
async function readFileFromURL(uid, url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("File nahi mili");
      const data = await response.text(); // HTML/text ke liye
      // const data = await response.json(); // agar JSON hai to
      // const data = await response.blob(); // agar image/pdf hai to
      console.log("readFileFromURL - "+uid);
      handler_FileReadDone(uid, data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
}

async function readFileContent(uid, filePath) {
    // 2. Fetch API ka use karke file ko load karein
    fetch(filePath).then(response => {
        // Agar file nahi mili ya koi error aaya
        if (!response.ok) throw new Error("File nahi mili ya network issue hai.");
        console.log("readFileContent - "+uid);
        handler_FileReadDone(uid, response.text());// File ko text format mein convert karein
      }).catch(error => {
        // Agar koi error aata hai toh yahan handle hoga
        console.error("Error loading file:", error);
      });
}
