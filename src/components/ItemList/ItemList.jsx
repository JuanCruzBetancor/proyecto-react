import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ items = []}) => {

return (
        items.map(items => <Item keys={items.id} items={items} />)
);
}

export default ItemList