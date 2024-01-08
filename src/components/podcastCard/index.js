import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

const PodcastCard = ({id, title, displayImage}) => {
  return (
    <NavLink to = {`podcast/${id}`}>
        <div className='podcast-card'>
            <img src={displayImage} className='podcast-display-image'/>
            <p className='podcast-title'>{title}</p>
        </div>
    </NavLink>
  )
}

export default PodcastCard;