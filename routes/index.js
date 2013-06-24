
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

exports.tableTest = function (req, res, next) {
    var users = [
        {
            "age": 33,
            "name": "Lola Parker",
            "gender": "female",
            "company": "Furnitech",
            "email": "lolaparker@furnitech.com",
            "phone": "+1 (841) 403-2623",
            "address": "674 Thornton Street, Woodlake, Rhode Island, 2786"
        },
        {
            "age": 31,
            "name": "Mack Powers",
            "gender": "male",
            "company": "Zilla",
            "email": "mackpowers@zilla.com",
            "phone": "+1 (881) 484-2080",
            "address": "650 Maple Street, Hillsboro, Iowa, 8187"
        },
        {
            "age": 40,
            "name": "Stella Kelly",
            "gender": "female",
            "company": "Autograte",
            "email": "stellakelly@autograte.com",
            "phone": "+1 (824) 525-2934",
            "address": "984 Cortelyou Road, Sugartown, Montana, 5310"
        },
        {
            "age": 36,
            "name": "Deidre Bates",
            "gender": "female",
            "company": "Digique",
            "email": "deidrebates@digique.com",
            "phone": "+1 (992) 433-3423",
            "address": "448 Mersereau Court, Williston, New Jersey, 8691"
        },
        {
            "age": 28,
            "name": "Beck Mendez",
            "gender": "male",
            "company": "Pulze",
            "email": "beckmendez@pulze.com",
            "phone": "+1 (935) 455-2111",
            "address": "366 Albemarle Terrace, Foxworth, Kentucky, 7258"
        },
        {
            "age": 22,
            "name": "Leonor Sweeney",
            "gender": "female",
            "company": "Zuvy",
            "email": "leonorsweeney@zuvy.com",
            "phone": "+1 (854) 541-2109",
            "address": "149 Boerum Street, Charco, Mississippi, 2234"
        },
        {
            "age": 32,
            "name": "Iva Hudson",
            "gender": "female",
            "company": "Zentury",
            "email": "ivahudson@zentury.com",
            "phone": "+1 (942) 502-3657",
            "address": "371 Noel Avenue, Johnsonburg, Delaware, 8582"
        }
    ];
    if (MODE_DEVELOPMENT) {
        res.console.table(users);
    }
    res.render('index', { title: 'Express-chromeLogger-seed Table Console' });
};
exports.index = function(req, res){
  
  res.render('index', { title: 'Express-chromeLogger-seed' });
};