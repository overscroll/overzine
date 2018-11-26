import React from 'react';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className="list-item">
      <div className="overzine-opener">
        <div className="overzine-opener__headline">Headline {title}</div>
      </div>
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}