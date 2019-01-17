var env = process.env.NODE_ENV.trim() || 'development';

if(env === 'development') {
  console.log('>>>>>>>>>>> Hello');
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
}
