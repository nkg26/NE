 // Function to load HTML file into a specific element
        function loadHTML(elementId, filePath) {
            fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('File not found');
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading ' + filePath, error);
                    document.getElementById(elementId).innerHTML = '<p>Error loading content</p>';
                });
        }

   // Caller ko khud handle karna hoga
   function readHTML(filePath) {
            fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('File not found');
                    }
                    return response.text();
                })
                .catch(error => {
                    console.error('Error loading ' + filePath, error);
                    return '<p>Error loading content</p>';
                });
        }



