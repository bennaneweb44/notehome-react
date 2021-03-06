/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  headerText: PropTypes.string.isRequired,
};

const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.propTypes = propTypes;

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export { Header };
