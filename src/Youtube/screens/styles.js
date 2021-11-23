import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  brand: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: "600"
  },
  input: {
    flex: 1,
    width: '100%',
    height: '40px',
    fontSize: 18,
    paddingHorizontal: '5px',
    borderColor: '#000'
  }
})

export default styles;