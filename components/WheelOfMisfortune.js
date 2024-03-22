import React, { useState, useRef } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Svg, Path, G } from "react-native-svg";

const WheelOfMisfortune = ({ punishments, onSpinEnd }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("window");
  const wheelSize = width * 0.8;
  const radius = wheelSize / 2;
  const cx = radius;
  const cy = radius;
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationOutputRange, setRotationOutputRange] = useState([
    "0deg",
    "360deg",
  ]); // Default rotation range
  if (!punishments) {
    punishments = [
      "Punishment A",
      "Punishment B",
      "Punishment C",
      "Punishment D",
      "Punishment E",
    ];
  }
  const makeWheelPath = (index, total) => {
    const segmentAngle = 360 / total;
    const startAngle = radians(index * segmentAngle);
    const endAngle = radians((index + 1) * segmentAngle);
    const largeArcFlag = segmentAngle <= 180 ? "0" : "1";

    const startX = cx + radius * Math.cos(startAngle);
    const startY = cy + radius * Math.sin(startAngle);
    const endX = cx + radius * Math.cos(endAngle);
    const endY = cy + radius * Math.sin(endAngle);

    return `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
  };

  const radians = (degrees) => (degrees * Math.PI) / 180;

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      // Ensures at least 4 full rotations
      const rotations = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
      // Additional degrees for the final position
      const extraDegrees = Math.floor(Math.random() * 360);
      // Total rotation in degrees
      const totalDegrees = rotations * 360 + extraDegrees;

      setRotationOutputRange(["0deg", `${totalDegrees}deg`]); // Update the rotation range

      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => {
        const selectedIndex = Math.floor(
          extraDegrees / (360 / punishments.length)
        );
        const selectedPunishment = punishments[selectedIndex];
        onSpinEnd(selectedPunishment); // Assuming this is correctly handling the result
        setIsSpinning(false);
        spinValue.setValue(0); // Reset for next spin
      });
    }
  };

  const animatedStyle = {
    transform: [
      {
        rotate: spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: rotationOutputRange, // Use the dynamic range
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={spinWheel} disabled={isSpinning}>
        <Animated.View style={[styles.wheel, animatedStyle]}>
          <Svg height={wheelSize} width={wheelSize}>
            <G>
              {punishments.map((_, index) => (
                <Path
                  key={index}
                  d={makeWheelPath(index, punishments.length)}
                  fill={getRandomColor()} // Make sure you define this function
                />
              ))}
            </G>
          </Svg>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

// Helper function to get random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  wheel: {
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default WheelOfMisfortune;
