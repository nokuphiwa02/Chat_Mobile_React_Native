
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const pinnedMessages = [
  {
    id: 1,
    name: "Phillip Franci",
    message: "Hey, it's been a while since we've...",
    time: "10:00 am",
    image: require("../assets/images/cartoon.png"),
    unread: false,
  },
  {
    id: 2,
    name: "Alfredo Saris",
    message: "Hello, Good Morning Bro!",
    time: "08:00 am",
    image: require("../assets/images/cartoo.png"),
    unread: true,
  },
];

const messages = [
  {
    id: 1,
    name: "Jaylon Franci",
    message: "Everything's good.",
    time: "08:30 am",
    image: require("../assets/images/cartooni.png"),
  },
  {
    id: 2,
    name: "Tatiana Dorwart",
    message: "Okay Thanks!",
    time: "06:10 am",
    image: require("../assets/images/cartoony.png"),
  },
  {
    id: 3,
    name: "Terry Bergson",
    message: "Same here!",
    time: "05:30 am",
    image: require("../assets/images/cartoons.png"),
  },
  {
    id: 4,
    name: "Phillip Franci",
    message: "See you tomorrow!",
    time: "Yesterday",
    image: require("../assets/images/cartoon.png"),
  },
];

const MessageList = () => {
  return (
    <View style={styles.container}>

      {/* Search and Tabs */}
      <View style={styles.topBar}>
        <Text style={styles.searchIcon}>🔎</Text>

        <View style={styles.tabs}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>
              Direct Message
            </Text>

            <View style={styles.countBadge}>
              <Text style={styles.countText}>4</Text>
            </View>
          </View>

          <View style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>
              Group
            </Text>

            <Text style={styles.groupCount}>4</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Pinned Messages */}
        <Text style={styles.sectionTitle}>
          Pinned Message (2)
        </Text>

        {pinnedMessages.map((item) => (
          <View key={item.id} style={styles.messageItem}>
            <Image
              source={item.image}
              style={styles.profileImage}
            />

            <View style={styles.messageContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text
                style={styles.messagePreview}
                numberOfLines={1}
              >
                {item.message}
              </Text>
            </View>

            <View style={styles.messageInfo}>
              <Text style={styles.time}>
                {item.time}
              </Text>

              {item.unread ? (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>1</Text>
                </View>
              ) : (
                <Text style={styles.readStatus}>✔️✔️</Text>
              )}
            </View>
          </View>
        ))}

        {/* All Messages */}
        <Text style={styles.sectionTitle}>
          All Message (8)
        </Text>

        {messages.map((item) => (
          <View key={item.id} style={styles.messageItem}>
            <Image
              source={item.image}
              style={styles.profileImage}
            />

            <View style={styles.messageContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text
                style={styles.messagePreview}
                numberOfLines={1}
              >
                {item.message}
              </Text>
            </View>

            <View style={styles.messageInfo}>
              <Text style={styles.time}>
                {item.time}
              </Text>

              <Text style={styles.readStatus}>✔️✔️</Text>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 15,
    paddingHorizontal: 15,
    marginTop: 5,
    overflow: "hidden",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    gap: 12,
  },

  searchIcon: {
    fontSize: 30,
    color: "#333333",
    width: 25,
  },

  tabs: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  activeTab: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EF72",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 13,
    gap: 6,
  },

  activeTabText: {
    fontSize: 11,
    color: "#333333",
  },

  countBadge: {
    backgroundColor: "#333333",
    width: 17,
    height: 17,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  countText: {
    color: "#FFFFFF",
    fontSize: 9,
  },

  inactiveTab: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 13,
    gap: 9,
  },

  inactiveTabText: {
    fontSize: 11,
    color: "#777777",
  },

  groupCount: {
    fontSize: 9,
    color: "#999999",
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 15,
    marginTop: 3,
  },

  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 25,
  },

  messageContent: {
    flex: 1,
    marginLeft: 10,
    gap: 4,
  },

  name: {
    fontSize: 12,
    fontWeight: "500",
    color: "#333333",
  },

  messagePreview: {
    fontSize: 10,
    color: "#888888",
  },

  messageInfo: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 38,
  },

  time: {
    fontSize: 8,
    color: "#999999",
  },

  readStatus: {
    color: "#6554C0",
    fontSize: 12,
    fontWeight: "bold",
  },

  unreadBadge: {
    backgroundColor: "#EC5D83",
    width: 17,
    height: 17,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  unreadText: {
    color: "#FFFFFF",
    fontSize: 9,
  },
});
