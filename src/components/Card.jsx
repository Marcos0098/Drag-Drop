import React from 'react'

function Card(props) {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragEnd = e => {
        if (e.target.style.display == 'none') {
          e.target.style.display = 'block';
        }
      }

    const dragOver = e => {
        e.stopPropagation();
    }

  return (
    <div id={props.id} onDragStart={dragStart} onDragOver={dragOver} className={props.className} draggable={props.draggable} onDragEnd={dragEnd}>
        {props.children}
    </div>
  )
}

export default Card