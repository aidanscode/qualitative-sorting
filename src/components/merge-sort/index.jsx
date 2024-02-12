import { useEffect, useState } from "react";
import Merge from "./merge";


function MergeSort({ itemsToSort, setSortedItems }) {
    const mid = Math.floor(itemsToSort.length / 2);
    const [sortState, setSortState] = useState({
        left: itemsToSort.slice(0, mid),
        right: itemsToSort.slice(mid, itemsToSort.length),
        isLeftDone: false,
        isRightDone: false
    });

    const finishedLeft = (newLeft) => {
        setSortState({
            ...sortState,
            left: newLeft,
            isLeftDone: true
        });
    };
    
    const finishedRight = (newRight) => {
        setSortState({
            ...sortState,
            right: newRight,
            isRightDone: true
        });
    };

    useEffect(() => {
        if (itemsToSort.length < 2) {
            setSortedItems(itemsToSort)
        }
    }, [itemsToSort, setSortedItems]);

    if (itemsToSort.length < 2) {
        return null;
    } else if (!sortState.isLeftDone) {
        return <MergeSort key={'left'} itemsToSort={sortState.left} setSortedItems={finishedLeft} />
    } else if (!sortState.isRightDone) {
        return <MergeSort key={'right'} itemsToSort={sortState.right} setSortedItems={finishedRight} />
    } else {
        return <Merge left={sortState.left} right={sortState.right} setSortedItems={setSortedItems} />
    }
}

export default MergeSort;