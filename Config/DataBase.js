import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
const envConfig = dotenv.config({ path: "Config.env" });
if (envConfig.error) {
  console.error("Error loading .env file:", envConfig.error);
  process.exit(1); // Exit if .env file is not loaded
}

const dBConnection = () => {
  // Log the DB_URI for debugging
  console.log("Connecting to DB with URI:", process.env.DB_URI);

  // Connect With dataBaSe
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`DataBase Connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`DataBase Connection failed: ${err}`);
      process.exit(1); // Exit with failure code
    });
};

export default dBConnection;
