import ItemList from './components/item-list';
import Sort from './components/sort';

function App() {
    const itemsToSort = ['Green', 'Yellow', 'Blue', 'White', 'Red', 'Aqua', 'Black'];

    return <>
        <ItemList list={itemsToSort} title='Original List' ordered={false} />
        <Sort itemsToSort={itemsToSort}/>
    </>
}

export default App;
