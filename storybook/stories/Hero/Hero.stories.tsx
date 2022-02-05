import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import Hero from '../../../components/Hero';
import CenterView from '../CenterView';


storiesOf('Hero', module)
  .addDecorator((getStory) => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('default', () => (
    <Hero
      title="Welcome to my App"
      buttonText="Sign in"
      onButtonPress={() => Alert.alert("Signed in")}>
    </Hero>
  ))
  .add('example1', () => (
    <Hero
      title="Welcome to my Example Story"
      buttonText="Sign in"
      onButtonPress={() => Alert.alert("Signed in")}>
    </Hero>
  ))