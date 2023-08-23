export const EnvConfiguration = () => ({
  port: process.env.PORT,
  hostApi: process.env.HOST_API,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
});
