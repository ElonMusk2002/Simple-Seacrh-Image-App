const generatorForm = document.getElementById("generatorForm");


const textInput = document.getElementById("textInput");


const generatedImage = document.getElementById("generatedImage");


 generatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = textInput.value;
    const apiKey = "BTUgTFXkwqoR6gGeTDB3aBCzVFohxrsScT7Jl520U_k";

    const apiUrl = `https://api.unsplash.com/photos/random?query=${text}&orientation=squarish&client_id=${apiKey}`;
     fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            generatedImage.innerHTML = `<img src="${data.urls.regular}" alt="${text}">`;
        })
        .catch((error) => console.log(error));
});


// Function to download the image


function downloadImage() {
    const imageSrc = generatedImage.querySelector("img").src;

    const downloadLink = document.createElement("a");
    downloadLink.href = imageSrc;

    downloadLink.download = "generated-image.jpg";
   
 document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  // Add click event listener to the download button


  const downloadButton = document.getElementById("downloadButton";

 
 downloadButton.addEventListener("click", downloadImage);