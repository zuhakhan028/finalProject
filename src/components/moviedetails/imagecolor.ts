export function getMajorityColor(imagePath:any) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      
      img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx :any= canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);
        
        // Analyze pixel colors
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        const colorCounts:any = {};
        
        for (let i = 0; i < pixels.length; i += 4) {
          const rgba = [
            pixels[i], // Red
            pixels[i + 1], // Green
            pixels[i + 2], // Blue
            pixels[i + 3] // Alpha
          ];
          
          const rgbaString = `rgba(${rgba.join(",")})`;
          
          if (colorCounts.hasOwnProperty(rgbaString)) {
            colorCounts[rgbaString] += 1;
          } else {
            colorCounts[rgbaString] = 1;
          }
        }
        
        // Find the majority color
        let majorityColor = null;
        let maxCount = 0;
        
        for (const color in colorCounts) {
          if (colorCounts[color] > maxCount) {
            majorityColor = color;
            maxCount = colorCounts[color];
          }
        }
        
        resolve(majorityColor);
      };
      
      img.onerror = function() {
        reject(new Error("Failed to load the image."));
      };
      
      img.src = imagePath;
    });
  }
  
  // Example usage
//   const imagePath = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.data.backdrop_path";
//   getMajorityColor(imagePath)
//     .then(majorityColor => {
//       console.log("Majority RGBA color:", majorityColor);
//     })
//     .catch(error => {
//       console.error(error);
//     });
  