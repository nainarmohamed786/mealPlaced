import { View, Text, StyleSheet } from 'react-native'


function ContentSub({ data }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </View>

    )
}

export default ContentSub;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 4,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10
    },
    text: {
        color: "white",
        textAlign: "center",
    }
})