db = db.getSiblingDB('feedback_ads');

db.createUser({
  user: 'admin',
  pwd: 'faat',
  roles: [
    {
      role: 'readWrite',
      db: 'feedback_ads'
    }
  ]
});