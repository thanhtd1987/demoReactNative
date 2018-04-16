import { AppRegistry } from 'react-native';

// import App from './App';
import Dog from './src/components/test/Dog'
import MultiGreating from './src/components/test/MultiGreating'
import TextBlink from './src/components/test/TextBlink'
import StyleTest from './src/components/test/StyleTest'
import WidthHeightTest from './src/components/test/WidthHeightTest'
import InputTest from './src/components/test/InputTest'
import ButtonTest from './src/components/test/ButtonTest'
//demo color picker component
import ColorMixer from './src/components/ColorMixer'
//scroll view
import ScrollViewTest from './src/components/test/ScrollViewTest'
//flatlist
import FlatListTest from './src/components/flatlist/FlatListTest'
import HorizontalFlatList from './src/components/flatlist/HorizontalFlatList'
//section list
import BasicSectionList from './src/components/flatlist/BasicSectionList'
//navigation
// import NavigationDemo from './src/components/navigation/NavigationDemo'
import NavigationDemo from './src/components/navigation/sumupDemo/NavigationDemo'

AppRegistry.registerComponent('demo3', () => NavigationDemo);
