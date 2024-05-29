import React from 'react';
import './Background.css';
import IconGroup from './IconGroup';

const Background = () => {
  // Define how many times quieres renderizar el componente IconGroup
  const numGroups = 50;

  return (
    <section>
      <div className="row">
        <div>
        {Array.from({ length: numGroups }, (_, i) => (
          <IconGroup key={i} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
