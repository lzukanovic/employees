# Employees Application
Angular application for working with CRUD operations over company employees. Create, delete, edit and view employees with this responsive web application.

## Prerequesties
For the application to function properly, please:

* enter your Google Maps API key in the `index.html` file located in source folder in the root directory of the frontend app (`/zaposleni-app-ui/src`)

    ```
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY" type="text/javascript"></script>
    ```

* enter your MySql database connection details in the `/zaposleni-app-server/config/db.config.js` file. Change the `ROOT, USER, PASSWORD, DB, PORT` keys. It should look something like:
    
    ```
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'employeesdb',
    PORT: 3306,
    ```

## Development
To run and develop the frontend then navigate to `/zaposleni-app-ui` and run `npm install` and `npm start`.

To run and develop the backend then navigate to the root directory and run `npm install` and `npm run dev`.

## Production
To build the app for production run `gulp` from the root directory. The production build of the app should now be available in the `/prod-build` directory. To run, navigate to the new directory and run `npm start`.
