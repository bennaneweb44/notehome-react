/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.string,
};

const defaultProps = {
  size: 'large',
};

const Spinner = ({ size }) => (
  <View style={[styles.container, styles.horizontal]}>    
    <ActivityIndicator size={size} color={styles.item.color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  item: {
    color: "#7a42f4"
  }
});

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export { Spinner };
