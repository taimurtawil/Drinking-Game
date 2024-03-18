import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

// HelpPopUp Component
const HelpPopUp = ({ isVisible, onClose, title, text }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{title}</Text>
          <ScrollView style={styles.modalTextContainer}>
            <Text style={styles.modalText}>{text}</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent background
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
    maxHeight: "80%", // Makes ScrollView scrollable if the text is too long
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default HelpPopUp;
