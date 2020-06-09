import React from 'react';
import Card from './Card';

const List = ({ list, onDelete }) => {
    const todoList = list.map((item, index) => {
        return (

            <Card
                text={item}
                key={index}
                id={index}
                itemdelete={onDelete}
            />

        )
    })
    return (
        <div className="ma3 pa1">
            {todoList}
        </div>
    )
}

export default List;