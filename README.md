# How to run

### Keycloak server
1. Start keycloak server and create a realm.
2. Create a public client for the React app.
3. Visit Realm settings and enable user registration.
![image](https://user-images.githubusercontent.com/37938529/234357747-b0832570-f0e0-42ed-93b4-a8c004bb5a3a.png)


### API Gateway
1. Update the `issuer-uri` in application.yaml accordingly.

### Services
1. Update the `issuer-uri` in application.yaml accordingly.

### Frontend
1. `cd ./react-frontend`
2. Install dependencies `npm ci`
3. Download the keycloak.json file from the configured public client in keycloak.
![Screenshot 2023-04-25 at 11 05 59 PM](https://user-images.githubusercontent.com/37938529/234357400-2f8f84ba-75de-4deb-8c17-db1285a18182.png)


5. Place it in the /public folder.
6. Start the application `npm start`

Login, Registration will be handled from the Frontend.
API gateway and resource server only validate the access_token in the authorization header. If unauthenticated, simply return 401. 
