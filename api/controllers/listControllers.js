
var rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
  return rand() + rand() + rand() + "-" + rand() + rand() + rand(); // to make it longer
};


const postLogin = async (req, res) => {
  try {
    if (req.body.user === 'admin' && req.body.pass === 'pass') {
      res.status(200).json({
        token: token(),
        role: '1',
      });
    } else if (req.body.user === 'user' && req.body.pass === 'pass') {
      res.status(200).json({
        token: token(),
        role: '2',
      });
    } else {
      res.status(400).json({
        token: '',
        role: '0',
      });
    }
    
  } catch (error) {
    res.status(500).json({ message: "Error in server" });
  }
};

module.exports = {
  postLogin,
};
