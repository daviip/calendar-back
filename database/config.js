const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error, "1");

    throw new Error("Error al inicializar BD");
  }
};

module.exports = {
  dbConnection,
};
