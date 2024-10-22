import { View, FlatList } from 'react-native';
import MealComponent from '../component/MealComponent'

function DisplayList({ item }) {

    function renderedItem(itemData) {

        const items = itemData.item;
        const mealComponent = {
            id: items.id,
            title: items.title,
            duration: items.duration,
            complexity: items.complexity,
            affordability: items.affordability,
            imageUrl: items.imageUrl
        }

        return <MealComponent {...mealComponent} />
    }

    return (
        <View>
            <FlatList
                data={item}
                renderItem={renderedItem}
                keyExtractor={item => item.id}
            />
        </View>
    )

};

export default DisplayList;