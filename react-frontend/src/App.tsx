import AuthService from './services/auth-service';

import './App.css';
import { AxiosService } from './utils/axios-utils';

function App() {
  console.log(AuthService.getIdToken());
  console.log(AuthService.hasRole(["L1-Bursar-r"]));

  const getUsers = () => {
    AxiosService.get("/user/list").then((res) => {
      console.log(res);
    });
  };

  const gatewayHealthCheck = () => {
    AxiosService.get("/health-check").then((res) => {
      console.log(res);
    });
  };

  const userServiceHealthCheck = () => {
    AxiosService.get("/user/health-check").then((res) => {
      console.log(res);
    });
  };

  const getGatewayUser = () => {
    AxiosService.get("/gateway/user").then((res) => {
      console.log(res);
    });
  };
  
  return (
    <div className="App">
      <h1>{`Hii, ${AuthService.getUsername()}`}</h1>
      <button onClick={() => AuthService.doLogout()}>Logout</button>
      <button onClick={() => getGatewayUser()}>Gateway Health</button>
      <button onClick={() => userServiceHealthCheck()}>User service Health</button>
      <button onClick={() => getUsers()}>Get Users</button>
    </div>
  );
}

export default App;
