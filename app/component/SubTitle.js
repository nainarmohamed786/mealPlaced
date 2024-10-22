import { View, Text, StyleSheet } from 'react-native'

function SubTitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
                {children}
            </Text>
        </View>
    )
}

export default SubTitle;
const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginHorizontal: 20,
        marginBottom: 20
    },
    subtitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    }
})