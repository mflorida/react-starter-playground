import { createContext, useState } from 'react';

const appData = {
  email: '',
  username: ''
}

export const AppDataContext = createContext({
  data: appData,
  setData: (data) => ({
    ...appData,
    data
  })
});

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export function AppDataProvider(props){

  const {
    data = appData,
    children = null
  } = props;

  const [appState, setAppState] = useState(data);

  return (
    <AppDataContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppDataContext.Provider>
  );
}
