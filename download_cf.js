const fs = require('fs');
const https = require('https');

console.log("Downloading cloudflared.exe...");
const file = fs.createWriteStream("cloudflared.exe");
const request = https.get("https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe", function(response) {
   if (response.statusCode === 302 || response.statusCode === 301) {
       console.log("Redirecting to:", response.headers.location);
       https.get(response.headers.location, function(redirectResponse) {
           redirectResponse.pipe(file);
           file.on('finish', function() {
               file.close(() => console.log("Download completed."));
           });
       });
   } else {
       response.pipe(file);
       file.on('finish', function() {
           file.close(() => console.log("Download completed."));
       });
   }
});
