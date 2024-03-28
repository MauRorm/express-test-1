
const getList = async (req, res) => {
  try {
    res.status(200).json({Sucess:'ok :)'});
  } catch (error) {
    res.status(500).json({ message: "Error in server" });
  }
};

module.exports = {
  getList,
};
