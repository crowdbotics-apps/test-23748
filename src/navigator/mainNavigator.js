import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings192859Navigator from '../features/Settings192859/navigator';
import NotificationList192858Navigator from '../features/NotificationList192858/navigator';
import Maps192857Navigator from '../features/Maps192857/navigator';
import BlankScreen29191374Navigator from '../features/BlankScreen29191374/navigator';
import UserProfile21191373Navigator from '../features/UserProfile21191373/navigator';
import ArticleList21191372Navigator from '../features/ArticleList21191372/navigator';
import Camera22191371Navigator from '../features/Camera22191371/navigator';
import Dashboard124191369Navigator from '../features/Dashboard124191369/navigator';
import Feed25191368Navigator from '../features/Feed25191368/navigator';
import Maps27191366Navigator from '../features/Maps27191366/navigator';
import Messaging28191365Navigator from '../features/Messaging28191365/navigator';
import Settings29191364Navigator from '../features/Settings29191364/navigator';
import ArticleList191328Navigator from '../features/ArticleList191328/navigator';
import ArticleList191327Navigator from '../features/ArticleList191327/navigator';
import ArticleList191326Navigator from '../features/ArticleList191326/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings192859: { screen: Settings192859Navigator },
NotificationList192858: { screen: NotificationList192858Navigator },
Maps192857: { screen: Maps192857Navigator },
BlankScreen29191374: { screen: BlankScreen29191374Navigator },
UserProfile21191373: { screen: UserProfile21191373Navigator },
ArticleList21191372: { screen: ArticleList21191372Navigator },
Camera22191371: { screen: Camera22191371Navigator },
Dashboard124191369: { screen: Dashboard124191369Navigator },
Feed25191368: { screen: Feed25191368Navigator },
Maps27191366: { screen: Maps27191366Navigator },
Messaging28191365: { screen: Messaging28191365Navigator },
Settings29191364: { screen: Settings29191364Navigator },
ArticleList191328: { screen: ArticleList191328Navigator },
ArticleList191327: { screen: ArticleList191327Navigator },
ArticleList191326: { screen: ArticleList191326Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
