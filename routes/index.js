
/*
 * GET home page.
 */
exports.inspector = function (req, res, next) {
    if (MODE_DEVELOPMENT) {
      res.console.log("Running Express %s", express.version);
      res.console.groupAs("Request", function () {
        res.console.dir(req);
      });
      res.console.groupAs("Query String", function () {
        res.console.dir(req.query);
      });
      res.console.groupAs("Parameters", function () {
        res.console.dir(req.params);
      });

      res.console.assert(
        req.headers["user-agent"].search(/Chrome/) !== -1, "Not using Chrome"
      );
      
  }
    next();
};
exports.index = function(req, res){
  
  res.render('index', { title: 'Express' });
};