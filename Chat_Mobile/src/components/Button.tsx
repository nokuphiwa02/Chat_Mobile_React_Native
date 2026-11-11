import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Button = () => {
  return (
    <Pressable style={styles.button}>
      <Ionicons name="add" size={26} color="white" />
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#8B5CF6",
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    zIndex: 10,
  },
});