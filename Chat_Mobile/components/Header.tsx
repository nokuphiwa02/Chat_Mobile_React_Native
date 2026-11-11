
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <View>
          <Text style={styles.greeting}>
            Hi, Arip!
          </Text>

          <Text style={styles.received}>
            You Received
          </Text>

          <Text style={styles.messageCount}>
            48 Messages
          </Text>
        </View>

        <View style={styles.menuIcon}>
          <View style={styles.dotRow}>
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <View style={styles.dotRow}>
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </View>

      <Text style={styles.contactTitle}>
        Contact List
      </Text>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6654C0",
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 22,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    minHeight: 220,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  greeting: {
    color: "#D6CFF5",
    fontSize: 10,
    marginBottom: 8,
  },

  received: {
    color: "#FFFFFF",
    fontSize: 13,
    marginBottom: 3,
  },

  messageCount: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.12)",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },

  dotRow: {
    flexDirection: "row",
    gap: 4,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
  },

  contactTitle: {
    color: "#E4DFF8",
    fontSize: 11,
    marginTop: 17,
  },
});
