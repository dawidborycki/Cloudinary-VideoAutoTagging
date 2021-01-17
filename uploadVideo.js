var common = require('./common.js');

common.cloudinary.uploader.upload('./video/house.mp4', { 
        resource_type: 'video', 
        categorization: 'google_video_tagging',
        auto_tagging: 0.5 
    },
    (error, result) => {
        console.log(result, error) 

        // Display public id of the uploaded video
        console.log('Your public id is: ' + result['public_id']);
    });
