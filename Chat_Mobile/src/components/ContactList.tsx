import {View,Text,Image,StyleSheet,ScrollView,} from "react-native";
    // import cartoo from "../assets/images/";
    // import cartoon from "../assets/images/cartoon.png";
    // import cartooni from "../assets/images/cartooni.png";
    // import cartoons from "../assets/images/cartoons.png";
    // import cartoony from "../assets/images/cartoony.png";

const contacts = [
  {
    id: 1,
    name: "Phillip",
    image: require("../../assets/images/cartoo.png"),
    online: true,
  },
  {
    id: 2,
    name: "Alfredo",
    image: require("../../assets/images/cartoon.png"),
    online: true,
  },
  {
    id: 3,
    name: "Jaylon",
    image: require("../../assets/images/cartooni.png"),
    online: true,
  },
  {
    id: 4,
    name: "Tatiana",
    image: require("../../assets/images/cartoons.png"),
    online: false,
  },
  {
    id: 5,
    name: "Terry",
    image: require("../../assets/images/cartoony.png"),
    online: true,
  },
];

const ContactList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.contactItem}>
            <View style={styles.imageContainer}>
              <Image
                source={contact.image}
                style={styles.profileImage}
              />

              <View
                style={[
                  styles.status,
                  {
                    backgroundColor: contact.online
                      ? "#65D98B"
                      : "#F5DF69",
                  },
                ]}
              />
            </View>

            <Text style={styles.contactName}>
              {contact.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;


const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 5,
  },

  scrollContent: {
    paddingHorizontal: 0,
    gap: 15,
  },

  contactItem: {
    alignItems: "center",
    width: 45,
  },

  imageContainer: {
    position: "relative",
  },

  profileImage: {
    width: 43,
    height: 43,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  status: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },

  contactName: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 5,
  },
});
