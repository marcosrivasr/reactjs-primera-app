import React from 'react';
import Item from './Item';
import './List.css';

function List(props){
    return(
        <div className="list">
            {props.items.map(item =>
                <Item 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    rating={item.rating} 
                    onremove={props.onremove}
                    onupdaterating={props.onupdaterating} />
            )}
        </div>
    );
}


export default List;