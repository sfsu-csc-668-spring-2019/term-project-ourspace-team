const port = process.env.TYPEORM_PORT,
username = process.env.TYPEORM_USERNAME,
password = process.env.TYPEORM_PASSWORD,
database = process.env.TYPEORM_DATABASE;


module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": port,
  "username": username,
  "password": password,
  "database": database,
  "synchronize": true,
  "logging": false,
  "entities": ["dist/entity/*.js"],
  "migrations": ["src/migration/**/*.ts"],
  "repositories": ["src/repository/**/*.ts"],
  "controllers": ["src/controllers/**/*.ts"],
  "cli": {
      "entitiesDir": "src/entity",
      "migrationDir": "src/migration",
      "repositoriesDir": "src/subscriber",
      "controllersDir": "src/controllers"
  }
}