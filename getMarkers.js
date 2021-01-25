var common = require('./common.js');
var _ = require('underscore');

public_id = '';

common.cloudinary.api.resource(public_id, {resource_type: "video"}, (error, result) => {
    // Get categorization data
    categorizationData = result['info']['categorization']['google_video_tagging']['data'];        
    
    // Define rooms
    var rooms = ['kitchen', 'bedroom', 'living room'];

    // Get markers for each room
    // Use underscore to filter "tag" (get last element only)
    markers = [];
    rooms.forEach((room) => {        
        data = _.where(categorizationData, {'tag': room}).pop();

        marker = {
            'time': data['start_time_offset'],
            'text': data['tag']
        }

        markers.push(marker);        
    });

    console.log(markers)    
});