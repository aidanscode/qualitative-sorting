import { useState } from "react";
import ItemList from '../item-list';
import MergeSort from "../merge-sort";

function Sort({ itemsToSort }) {
    const [sortedItems, setSortedItems] = useState(null);
    return sortedItems == null ?
        <MergeSort itemsToSort={itemsToSort} setSortedItems={setSortedItems} />
        :
        <ItemList list={sortedItems} title='Sorted List' ordered={true} />
}

export default Sort;