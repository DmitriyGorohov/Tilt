import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../styles/Colors.ts';

interface CounterProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <View style={[styles.counterContainer]}>
      <TouchableOpacity
        onPress={onDecrement}
        style={[
          styles.counterButton,
          { alignItems: 'flex-start', width: '40%' },
        ]}
      >
        <Text style={styles.counterText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{quantity}</Text>
      <TouchableOpacity
        onPress={onIncrement}
        style={[styles.counterButton, { alignItems: 'flex-end', width: '40%' }]}
      >
        <Text style={styles.counterTextRight}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.yellowButton,
    borderRadius: 20,
    width: '50%',
    padding: 6,
  },
  counterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
  },
  counterTextRight: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Counter;
