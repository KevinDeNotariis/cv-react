import { useEffect, useState } from 'react';
import Button from './Button';
import { H3 } from './headers';

const ToggleText = ({ txt }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div
      style={{
        textAlign: 'justify',
        backgroundColor: '#b9d6f2',
        color: 'black',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#0353a4',
          color: 'white',
        }}
      >
        <div>
          <H3>Description</H3>
        </div>
        <div>
          <Button on="blue-background" type="button" onClick={() => setToggled(!toggled)}>
            {!toggled ? 'view ⇩' : 'hide ⇧'}
          </Button>
        </div>
      </div>
      <div
        style={{
          margin: '10px',
        }}
      >
        {toggled ? <p>{txt}</p> : undefined}
      </div>
    </div>
  );
};

export default ToggleText;
