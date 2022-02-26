import React from 'react';

type Obje = {
  [key: string]: any;
};
const Debug = (props: Obje) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};
const Console = (props: Obje) => {
  console.log({ props });
};

export default Debug;
Debug.Console = Console;
