Initial Setup

Section 2

1. npx create-react-app frontend
2. cd frontend -> npm start
3. remove .git from frontend folder -> rm -rf .git
4. move .gitIgnore file to root (proshop-v2) folder
5. in .gitIgnore file, remove / from 'node_modules' and add .env
6. cd proshop-v2 -> git init and create a public repo 'EcommerceShop' in github
7. -> git add . -> git commit -m 'Initial commit'
8. -> git remote add origin https://github.com/dparth18/EcommerceShop.git
9. -> git branch -M main -> git push -u origin main
10. Install Github Copilot and GitHub Theme Extensions on VScode
11. In front end install -> npm i react-bootstrap bootstrap react-icons
12. index.js -> import "bootstrap/dist/css/bootstrap.min.css";
13. npm i react-router-dom
14. We will setup our frontend react router in index.js page
15. npm i react-router-bootstrap -> See lec 9-> used for routing <LinkContaner></LinkContaner>

Section 3

16. Lec 12 - Full Stack Work Flow and Setting up backend
17. In root terminal-> npm init -> package name: proshop-v2-> version: 1.0.0 -> Description: eCommerce application built with the MERN stack -> Entry point: server.js -> author: Parth Darekar -> License: MIT.
18. In package.json under description -> "type:"module" -> we are using ES6 modules
19. In package.json, replace "test": "echo \"Error: no test specified\" && exit 1" with "start": "node backend/server.js"
20. In root terminal try command 'npm start'.
21. In root terminal -> npm i express -> web framework we will be using on our backend to create our routes and so on..
22. create backend folder in root and create server.js in backend folder.
23. In root terminal -> npm i -D nodemon concurrently
24. In package.json add -> "server": "nodemon backend/server.js" & "client":"npm start --prefix frontend"
25. In package.json add -> "dev": "concurrently \"npm run server\" \"npm run client\"" for running client(frontend) and server(backend) concurrently.
26. In root terminal -> npm i -D dotenv and create .env file in root folder
27. Install Axios in the frontend (we can also use fetchAPI isntead of Axios ) -> npm i axios
28. In frontend -> package.json add -> "proxy":"http://localhost:5000", for proxy -> 'npm run dev' in root terminal

Section 4

29. MongoDB Atlas setup
30. MongoDB compass setup -> https://www.mongodb.com/products/tools/compass
31. Connect with mongoose -> npm i mongoose -> Create config folder in backend -> db.js
32. Modeling the data. Create folder 'models' in backend -> productModel.js, userModel.js
33. Prepare sample data for seeding -> In backend data folder -> users.js. Install, 'npm i bcryptjs' for hashing user passwords.
34. Seeding sample data.-> npm i colors -> create file in backend folder -> seeder.js and write down code.
35. In package.json -> under scripts -> "data:import": "node backend/seeder.js" ,  
    "data:destroy": "node backend/seeder.js -d" and run command 'npm run data:import' in root for importing data schema or seeding the data to database.
36. Postman
37. Get Products from database. -> Create productRoutes.js in backend->routes->productRoutes.js. Lec 24 - Watch again
38. Using express router for handling backend API's.
39. We are using async await in backend API's because the mongoose methods or model methods are asynchronous and we are fetching the data from database.
40. Create 'middleware' folder in backend ->create asyncHandler.js - Lec 24 - Watch Again
41. Create 'errorMiddleware.js' in 'middleware' folder - Lec 25 - Watch again
42. Product Controller. In backend -> Folder 'controllers' -> productControllers.js

Section 4 - Redux

43. Redux and State Overview
44. In frontend -> npm i @reduxjs/toolkit react-redux
45. Create store.js in frontend-> src folder. It will be our redux store
46. In index.js import (import { Provider } from "react-redux";) and (import store from "../store";) and encapsulate RouterProvider as below
<!-- <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App/> */}
</Provider> -->

47. Create constants.js in frontend-> src folder.
48. Create folder slices -> apiSlice.js in frontend-> src folder.
49. Create productsApiSlice.js in slices folder and update the HomeScreen.jsx, ProductScreen.jsx code
