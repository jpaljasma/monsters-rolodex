import React from "react";
import { Card } from '../card/card.component';

import "./card-list.styles.scss";

export const CardList = props => {
  if(props.monsters && props.monsters.length > 0 ) {
    return (
        <div className="card-list">
          {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      );    
  }
  else {
      if(props.searchField) {
        return <div className='error'>No monsters found with the keyword "{props.searchField}".</div>
      }
  }
  return '<span>...</span>';
};
