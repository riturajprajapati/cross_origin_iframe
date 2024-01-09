// window.addEventListener('blur', function () {
//     const iframes = document.querySelectorAll('iframe');
//     let previousURL = new URL(document.URL);

//     iframes.forEach((iframe) => {
//         const iframeURL = iframe.src;
//         console.log('Previous URL:', previousURL.href);

//         // Using setTimeout outside the loop
//         window.setTimeout(() => {
//             if (document.activeElement === iframe && 'src' in document.activeElement) {
//                 const currentURL = new URL(document.activeElement.src);
//                 console.log('Current IFrame URL:', currentURL.href);
//                 previousURL = currentURL;
//             }
//         }, 1000);  // Example: 1000 milliseconds (1 second) delay
//     });


    
// });


  
 // // Call the function to log all iframes when the DOM is ready
//   window.addEventListener('blur', function (event) {
//     // Get all iframes on the page
//     const allIframes = document.querySelectorAll('iframe');
//     console.log("listen event : " + event.target);
//     // Log each iframe
//     allIframes.forEach((iframe, index) => {
//       console.log(`Iframe ${index + 1}:`);
      
//       try {
//         // Accessing contentWindow will throw an error for cross-origin iframes
//         console.log('Source:', iframe.contentWindow.location.href);
//         console.log('Width:', iframe.width);
//         console.log('Height:', iframe.height);
//       } catch (error) {
//         console.log('Unable to access content of the iframe due to cross-origin restrictions.');
//         console.log(error);
//       }
      
//       console.log('-------------------');
//       iframe.contentWindow.addEventListener('click', function () {
//         try{
//             console.log("click event listen.----------");
//         }catch(error){
//             console.log(error);
//         }
//     });
//     });

//   });
  
    
//   // Call the function to log all iframes when the DOM is ready
window.addEventListener('blur', function (event) {
    console.log("inside blur");
    let iframes = document.querySelectorAll('iframe');
    // console.log(window.recorderMeta.iframeInfo);
    iframes.forEach((iframe) => {
        try{
            iframe.contentWindow.addEventListener('click', (event) => {
                console.log("inside click");
                console.log(window.recorderMeta.iframeInfo);
              });
        }catch(error){
            console.log(error);
        }
    });
   
  });
  