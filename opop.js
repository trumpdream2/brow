<script async src="https://www.googletagmanager.com/gtag/js?id=G-SDXL3TGE4J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SDXL3TGE4J');  <!-- Replace with your GA4 ID -->
</script>

<!-- Your own JavaScript code -->
<script>
  // Your JS code that generates the linkImg
  var linkImg = 'https://brown.com/path/to/brown.jpg';  // This would be dynamically generated in your case
  
  // Send linkImg to Google Analytics as a custom event
  gtag('event', 'image_view', {
    'event_category': 'Images',   // You can change this to any category you prefer
    'event_label': linkImg,      // Send the image link
    'value': 1                   // Optional: this is just a numerical value (set to 1 for each view)
  });
</script>
