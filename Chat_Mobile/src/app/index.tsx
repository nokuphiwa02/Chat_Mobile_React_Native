import { Text, View, StyleSheet } from "react-native";
import  Header  from "../../components/Header";
import ContactList from "../../components/ContactList";
import MessageList from "../../components/MessageList";


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ContactList />
      <MessageList />
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
