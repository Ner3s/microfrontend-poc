import React, { ReactElement } from 'react';

function MockComponent({
  textDisplay = 'Mock Component',
}: {
  textDisplay?: string;
}): ReactElement {
  return (
    <div>
      <h1>{textDisplay}</h1>
    </div>
  );
}

export { MockComponent };
