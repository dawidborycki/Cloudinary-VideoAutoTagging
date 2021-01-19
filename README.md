# Cloudinary-VideoAutoTagging
A sample NodeJS project showing how to use Cloudinary API to upload a video, and perform auto-tagging. Additionally, it shows how to use the resulting tags to add markers to the real estate video

# Instructions
1. Sign up for Cloudinary account [here](https://cloudinary.com/users/register/free)
2. Enable Google Automatic Video Tagging add-on
3. Use common.js to provide your API credentials:
```javascript
cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
});
```
4. Install dependencies (```npm install```)
5. Upload video with ```node videoUpload.js```. This will return public id of your video. 
6. Copy the video id and paste it into ```getMarkers.js```:
```javascript
public_id = 'dosfm1nxpjkystb3uqtj';
```
7. Run ```node getMarkers.js```. It will return an information about markers, e.g.:
```
[
  { time: 0, text: 'kitchen' },
  { time: 4.004, text: 'bedroom' },
  { time: 8.008, text: 'living room' }
]
```
8. Use the above array in ```index.html```:
```
<script>
  var player = videojs('house');
  
  player.markers({
      markerTip:{
          display: true,
          text: function(marker) {
              return marker.text;
          }
      },
      markers: [
          { time: 0, text: 'kitchen' },
          { time: 4.004, text: 'bedroom' },
          { time: 8.008, text: 'living room' }
      ]
  });
</script>
```
