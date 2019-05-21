### Team 7 
#### Setting Up `.env` File
Firstly, you need to create the `.env` file in the `backend` directory.

Once, you created the `.env` file add these attibutes to the file.
```
TYPEORM_USERNAME = your_username //granted default is usually just: postgres
TYPEORM_PASSWORD = your_password
TYPEORM_DATABASE = your_database
TYPEORM_PORT = your_port
```

#### Creating Database tables
To create the database tables in a fresh and empty database with no tables:
1) Uncomment the route in app.ts --> app.get("/createDB", homepageManager.createTablesWithDummyData);
2) cd /backend
3) npm run build
4) npm run start
5) Once the project displays in console "Connected to DB": In any browser hit localhost:5000/createDB
6) Refresh database viewer (pgadmin or in terminal SHOW tables)
7) If tables show up, go back into app.ts and recomment the route
7b) If tables do not show up check your .env file for correct variable values
8) npm run build to update dist folder to not include createDB route


#### Important scripts for running application
Npm run scripts:
npm run build
npm run start

#### NOTES
Everytime something is changed in the backend ts files, npm run build will need to be ran again so the changes will show since the ts compiles into runnable javascript for express.