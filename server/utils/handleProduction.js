module.exports = (app, express, path) =>{
  // const isProdEnvironment = process.env.NODE_ENV === 'production';
  // if (isProdEnvironment) {
    // add build folder when on production environment
    app.use(express.static(path.resolve(__dirname, '..', 'dist')));
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
    });
  // }
}