import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const countries = {
  Sweden: ["Arlanda", "Landvetter", "Bromma"],
  USA: ["JFK", "LAX", "ORD"],
};

export default function AnotherScreen() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("");
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [airportModalVisible, setAirportModalVisible] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedAirport(""); // Reset airport when country changes
    setCountryModalVisible(false);
  };

  const handleAirportChange = (airport) => {
    setSelectedAirport(airport);
    setAirportModalVisible(false);
  };

  const handleAdd = () => {
    if (selectedCountry && selectedAirport) {
      const newPlace = { country: selectedCountry, airport: selectedAirport };
      setSelectedPlaces([...selectedPlaces, newPlace]);
      setSelectedCountry("");
      setSelectedAirport("");
    }
  };

  const handleRemovePlace = (index) => {
    const newPlaces = [...selectedPlaces];
    newPlaces.splice(index, 1);
    setSelectedPlaces(newPlaces);
  };

  return (
    <ImageBackground
      source={require("../assets/freepik-export-20240617200055BalS.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Välj Land:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setCountryModalVisible(true)}
        >
          <Text>{selectedCountry || "Klicka för att välja ett land"}</Text>
        </TouchableOpacity>

        <Modal
          visible={countryModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={Object.keys(countries)}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => handleCountryChange(item)}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setCountryModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Stäng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {selectedCountry ? (
          <>
            <Text style={styles.label}>Välj Flygplats:</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setAirportModalVisible(true)}
            >
              <Text>
                {selectedAirport || "Klicka för att välja en flygplats"}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={airportModalVisible}
              transparent={true}
              animationType="slide"
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={countries[selectedCountry]}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.modalItem}
                        onPress={() => handleAirportChange(item)}
                      >
                        <Text style={styles.modalItemText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setAirportModalVisible(false)}
                  >
                    <Text style={styles.modalCloseButtonText}>Stäng</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </>
        ) : null}

        <Button
          title="Lägg till"
          onPress={handleAdd}
          disabled={!selectedCountry || !selectedAirport}
        />

        <Text style={[styles.label, { marginTop: 20 }]}>Valda Platser:</Text>
        <FlatList
          data={selectedPlaces}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.selectedItem}>
              <Text>{`${item.country} - ${item.airport}`}</Text>
              <TouchableOpacity onPress={() => handleRemovePlace(index)}>
                <Text style={styles.removeText}>Ta bort</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,

    padding: 20,
  },
  pickerContainer: {
    zIndex: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#000",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalItemText: {
    fontSize: 18,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
  },
  modalCloseButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  removeText: {
    color: "red",
  },
});
