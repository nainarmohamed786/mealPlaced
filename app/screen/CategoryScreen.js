
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../component/CategoryGrid';

function CategoryScreen({ navigation }) {
    function renderedItem(itemData) {
        function Pressed() {
            navigation.navigate("MealOverview", {
                categoryId: itemData.item.id
            })
        }
        return <CategoryGrid title={itemData.item.title} color={itemData.item.color} onPress={Pressed} />
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderedItem}
            numColumns={2}
        />
    )
}

export default CategoryScreen