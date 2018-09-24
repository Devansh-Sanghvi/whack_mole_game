
import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Animated,
  ImageBackground,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {
  HOLE_IMAGE,
  MOLE_IMAGE,
  HOLE_MASK_IMAGE,
  TOP_IMAGE,
  TIMER_BUTTON
} from '../../images';
import {Actions} from 'react-native-router-flux';
import {setTimer,setScore} from '../../actions'
import _ from 'lodash';
import styles from './GameStyle'
import TimerMixin from 'react-timer-mixin';




class Game extends Component {
  constructor(props) {
    super(props);
    this.allAnimatedValues = [
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0)
    ];
    this.randomNumber = Math.floor(Math.random() * 8);
    this.hitOnTheMole = this.hitOnTheMole.bind(this);

  }


  componentWillMount() {


    this.props.setTimer();


  }



  componentDidMount() {


    this.startAnimationInterval = TimerMixin.setInterval(
      () => {
        this.randomNumber = Math.floor(Math.random() * 8);

        Animated.spring(this.allAnimatedValues[this.randomNumber], {
          toValue: 1
        }).start()

      },
      1000
    );

    this.stopAnimationInterval = TimerMixin.setInterval(
      () => {

        Animated.spring(this.allAnimatedValues[this.randomNumber], {
          toValue: 0
        }).start()

      },
      1500
    );

  }





  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.time < 2) {
      var i = 0;
      for (var animatedValue in this.allAnimatedValues) {
        Animated.spring(this.allAnimatedValues[i], {
          toValue: 0
        }).start()
        i = i + 1;
      }
      clearInterval(this.startAnimationInterval);
      clearInterval(this.stopAnimationInterval);
    }

  }






  hitOnTheMole(index) {

    this.props.setScore(this.props.score)
    Animated.spring(this.allAnimatedValues[index], {
      toValue: 0
    }).start()

  }




  render() {

    const {
      containerStyle,
      topImageStyle,
      gameBtnStyle,
      gameBtnTextStyle,
      holeContainerStyle,
      holeViewStyle,
      moleImageStyle,
      moleBtnStyle,
      holeImageStyle,
      holeMaskImageStyle,
      animatedViewStyle
    } = styles
    const animatedStyles = [{
        transform: [{
          scale: this.allAnimatedValues[0]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[1]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[2]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[3]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[4]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[5]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[6]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[7]
        }],
      },
      {
        transform: [{
          scale: this.allAnimatedValues[8]
        }],
      },
    ];

    return (
      <View style={containerStyle}>
        <ImageBackground source={TOP_IMAGE} style={topImageStyle}>
          <ImageBackground source={TIMER_BUTTON} style={gameBtnStyle}>
            <Text style={gameBtnTextStyle}>
              {this.props.time}
            </Text>
          </ImageBackground>
          <View />
          <View />
          <ImageBackground source={TIMER_BUTTON} style={gameBtnStyle}>
            <Text style={gameBtnTextStyle}>
              {this.props.score}
            </Text>
          </ImageBackground>
        </ImageBackground>
        <View style={holeContainerStyle}>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[0],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(0)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
          <View/>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[1],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(1)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
        </View>
        <View style={holeContainerStyle}>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[2],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(2)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
        </View>
        <View style={holeContainerStyle}>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[3],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(3)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
          <View/>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[4],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(4)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
        </View>
        <View style={holeContainerStyle}>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[5],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(5)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
        </View>
        <View style={holeContainerStyle}>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[6],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(6)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
          <View/>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[7],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(7)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
        </View>
        <View style={holeContainerStyle}>
          <View style={holeViewStyle}>
            <Animated.View style={[animatedStyles[8],animatedViewStyle]}>
              <ImageBackground source={MOLE_IMAGE} style={moleImageStyle}>
                <TouchableOpacity onPress={()=>{this.hitOnTheMole(8)}} style={moleBtnStyle}/>
              </ImageBackground>
            </Animated.View>
            <Image source={HOLE_IMAGE} style={holeImageStyle}/>
            <Image source={HOLE_MASK_IMAGE} style={holeMaskImageStyle}/>
          </View>
        </View>
      </View>
    )
  }






}

const mapStateToProps = ({game}) => {
  const {time,score}=game;
  return {time,score};
};





export default connect(mapStateToProps,{setTimer,setScore}) (Game);
