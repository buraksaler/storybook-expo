import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type HeroProps = {
  title: string,
  buttonText: string,
  onButtonPress: () => void
}

const Hero: React.FC<HeroProps> = (props) => {
  const { title: text, buttonText, onButtonPress } = props;

  return (
    <View>
      <Text style={styles.titleStyle}>{text}</Text>
      <Button title={buttonText} onPress={onButtonPress}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Hero