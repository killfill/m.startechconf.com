Ext.regModel('Tweet', {
  fields: ['id', 'text', 'to_user_id', 'from_user', {name: 'created_at', type: 'date'}, 'profile_image_url']
});
