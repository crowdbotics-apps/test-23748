import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera22191371Navigator from '../features/Camera22191371/navigator';
import Dashboard124191369Navigator from '../features/Dashboard124191369/navigator';
import Feed25191368Navigator from '../features/Feed25191368/navigator';
import Maps27191366Navigator from '../features/Maps27191366/navigator';
import Messaging28191365Navigator from '../features/Messaging28191365/navigator';
import Settings29191364Navigator from '../features/Settings29191364/navigator';
import BlankScreen19191363Navigator from '../features/BlankScreen19191363/navigator';
import ArticleList191328Navigator from '../features/ArticleList191328/navigator';
import ArticleList191327Navigator from '../features/ArticleList191327/navigator';
import ArticleList191326Navigator from '../features/ArticleList191326/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera22191371: { screen: Camera22191371Navigator },
Dashboard124191369: { screen: Dashboard124191369Navigator },
Feed25191368: { screen: Feed25191368Navigator },
Maps27191366: { screen: Maps27191366Navigator },
Messaging28191365: { screen: Messaging28191365Navigator },
Settings29191364: { screen: Settings29191364Navigator },
BlankScreen19191363: { screen: BlankScreen19191363Navigator },
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
