import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end"
  },
  TitleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10
  },
  chatCard: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    // borderBottomLeftRadius: 190,
    borderRadius: 10,
    borderColor: "black",
    width: "90%",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    alignSelf: "center",
    alignItems: "center",
    // borderBottomWidth: 0.2
    shadowOffset: { width: 2, height: 2 },
    elevation: 1,
    shadowColor: "black",
    shadowOpacity: 0.2
  },
  header: {},
  avataImageStory: {
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "green"
  },
  button: {
    width: width - 80,
    backgroundColor: "#fff",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    alignItems: "center"
  },
  notificationNumber: {
    textAlign: "center",
    alignSelf: "flex-end",
    marginRight: 10,
    paddingBottom: 5,
    color: "#fff",
    borderRadius: 20,
    backgroundColor: "#8ED1FC",
    width: 20,
    height: 20
  },
  profileImage: {
    flex: 1,
    height: null,
    width: null
  },
  textInput: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)"
  }
});
export default globalStyles;
