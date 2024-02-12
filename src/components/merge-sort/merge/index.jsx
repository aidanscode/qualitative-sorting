import { useEffect, useState } from "react";
import Comparison from "../../comparison";

function Merge({ left, right, setSortedItems }) {
    const [mergeState, setMergeState] = useState({
        leftIndex: 0,
        rightIndex: 0,
        mergedList: []
    });

    useEffect(() => {
        if (mergeState.leftIndex === left.length) {
            setSortedItems(mergeState.mergedList.concat(right.slice(mergeState.rightIndex)));
        } else if (mergeState.rightIndex === right.length) {
            setSortedItems(mergeState.mergedList.concat(left.slice(mergeState.leftIndex)));
        }
    }, [mergeState, left, right, setSortedItems]);

    const selectLeft = () => {
        setMergeState({
            ...mergeState,
            leftIndex: mergeState.leftIndex + 1,
            mergedList: [...mergeState.mergedList, left[mergeState.leftIndex]]
        });
    };

    const selectRight = () => {
        setMergeState({
            ...mergeState,
            rightIndex: mergeState.rightIndex + 1,
            mergedList: [...mergeState.mergedList, right[mergeState.rightIndex]]
        });
    };

    if (mergeState.leftIndex === left.length || mergeState.rightIndex === right.length) {
        return null; // let the useEffect wrap this up...
    } else {
        return <Comparison
            leftName={left[mergeState.leftIndex]}
            rightName={right[mergeState.rightIndex]}
            selectLeft={selectLeft}
            selectRight={selectRight}
        />
    }
}

export default Merge;