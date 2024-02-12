function ItemList({list, title, ordered}) {
    return <div>
        <h3>{title}</h3>
        {ordered ? (
            <ol>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ol>
        ) : (
            <span>{list.join(', ')}</span>
        )}
    </div>
}

export default ItemList;