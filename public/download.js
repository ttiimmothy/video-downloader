let videoBlob;

fetch("https://txxx.com/b16f0a93-442e-4e9c-a8a8-6ba2c714a674")
  .then((response) => response.blob()) // Get the Blob from the response
  .then((blob) => {
    // Use the fetched Blob as needed
    videoBlob = blob;
    // Now you can use 'videoBlob' as a Blob containing the video data.
  });

// Create a Blob URL
let blobURL = URL.createObjectURL(videoBlob);

// Create a video element and set the blob URL as the source
let videoElement = document.createElement("video");
videoElement.src = blobURL;

// Set additional attributes as needed (e.g., controls, width, height)
videoElement.controls = true;
videoElement.width = 640;
videoElement.height = 360;

// Append the video element to the DOM (e.g., to a specific HTML element)
console.log(document.querySelector("#video-container"));
document.querySelector("#video-container").appendChild(videoElement);
