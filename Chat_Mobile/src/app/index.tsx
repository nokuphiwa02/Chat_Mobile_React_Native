import { Text, View, StyleSheet } from "react-native";
import  Header  from "../../components/Header";
import ContactList from "../../components/ContactList";


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ContactList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
