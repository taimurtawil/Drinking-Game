import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import RulesMetadata from "../constants/RulesMetadata"; // Adjust the path as necessary
import { Feather, MaterialIcons as Icon } from "@expo/vector-icons";

const RulesButton = ({ game, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const { rules, caveat } = RulesMetadata[game] || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        {icon ? (
          <Icon name={icon} size={24} color="white" /> // Using react-native-vector-icons
        ) : (
          <Feather name="help-circle" size={24} color="black" />
        )}
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{`${game} Rules`}</Text>
            <ScrollView style={styles.modalTextContainer}>
              <Text style={styles.modalText}>{rules}</Text>
              {caveat && <Text style={styles.caveatText}>{caveat}</Text>}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles (similar to HelpPopUp, with addition for the button and caveatText)
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalTextContainer: {
    maxHeight: "80%",
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
  },
  caveatText: {
    marginTop: 10,
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default RulesButton;
