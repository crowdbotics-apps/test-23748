import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19191363Navigator from '../features/BlankScreen19191363/navigator';
import ArticleList191328Navigator from '../features/ArticleList191328/navigator';
import ArticleList191327Navigator from '../features/ArticleList191327/navigator';
import ArticleList191326Navigator from '../features/ArticleList191326/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
