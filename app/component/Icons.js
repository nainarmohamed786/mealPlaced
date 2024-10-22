import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function Icons({ name, color, onPress }) {
    return (
        <View>
            <Pressable style={({ pressed }) => pressed && styles.buttonPressed} onPress={onPress}>
                <Ionicons name={name} size={24} color={color} />
            </Pressable>
        </View>
    )
}

export default Icons;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.5
    }
})