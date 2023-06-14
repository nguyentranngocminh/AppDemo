import config from '../config';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Screen from '../pages/Screen';
import Chat from '../pages/Chat';

// const publicRoutes = [
//   { path: config.routesConfig.home, component: Screen },
//   { path: config.routesConfig.login, component: Login },
//   { path: config.routesConfig.register, component: Register },
// ];
// const privateRoutes = [];
const publicRoutes = {
  Login,
  Register,
  Screen,
  Chat,
};
const privateRoutes = [];
export { publicRoutes, privateRoutes };
