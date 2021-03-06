import {
  StyleSheet,
  Dimensions
} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

var styles = StyleSheet.create({

  containerStyle: {
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#C9BF9C',
  },
  topImageStyle: {
    height: ScreenHeight * 0.247376,
    width: ScreenWidth,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20
  },
  gameBtnStyle: {
    width: ScreenWidth * 0.29333,
    height: ScreenHeight * 0.0509,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameBtnTextStyle: {
    color: '#7a5230',
    fontSize: ScreenHeight * 0.02698,
    fontWeight: 'bold'
  },

  holeContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  holeViewStyle: {
    justifyContent: 'center',
  },

  moleImageStyle: {
    height: ScreenHeight * 0.29985,
    width: 0.28 * ScreenWidth,
    bottom: 0.09445 * ScreenHeight,
    left: 0.008 * ScreenWidth
  },
  moleBtnStyle: {
    flex: 1
  },
  holeImageStyle: {
    zIndex: 0,
    height: ScreenHeight * 0.07496,
    width: 0.27466 * ScreenWidth,
    top: 0.032233 * ScreenHeight,
    left: 0.008 * ScreenWidth
  },
  holeMaskImageStyle: {
    zIndex: 0,
    height: ScreenHeight * 0.05247,
    width: ScreenWidth * 0.29333
  },
  animatedViewStyle:{
    position: 'absolute',
    zIndex: 1
  }

});
export default styles;
