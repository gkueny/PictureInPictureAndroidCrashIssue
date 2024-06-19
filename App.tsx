import React, {useState} from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';

import Video from 'react-native-video';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    width: '100%',
    height: (Dimensions.get('window').width * 9) / 16,
    zIndex: 100,
  },
  halfScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
});

const VideoComponent = ({show}: {show: boolean}) => {
  if (!show) {
    return null;
  }

  const source = {uri: 'https://test-streams.mux.dev/pts_shift/master.m3u8'};

  return (
    <View style={styles.container}>
      <Video
        source={source}
        style={styles.halfScreen}
        enterPictureInPictureOnLeave={true}
      />
      <Animated.View entering={FadeIn.duration(500)}>
        <Text>X</Text>
      </Animated.View>
    </View>
  );
};

const VideoPlayer = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => setShow(old => !old)}>
        <Text>{show ? 'hide' : 'show'}</Text>
      </TouchableOpacity>
      <VideoComponent show={show} />
    </View>
  );
};

const App = () => {
  return <VideoPlayer />;
};
export default App;
