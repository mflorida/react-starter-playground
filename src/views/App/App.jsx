import React, { useEffect, useContext } from 'react';
import { HashRouter as Router, useLocation, useParams, withRouter } from 'react-router-dom';
import { AppRoutes } from '../../routes.js';
import Counter from '../../examples/Counter/index.js';
import { FlexSpacer } from '../../components/index.js';
import PageHeader from '../PageHeader/index.js';
import Footer from '../Footer.jsx';

function Page(){

  const location = useLocation();
  const params = useParams();
  // const { setCounterValue } = useContext(Counter.Context);

  // console.log(location);
  console.log(params);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Counter.Provider>
      <div id={'page'} className={'flex flex-col justify-between'}>
        <PageHeader/>
        <div id={'view'}>
          <AppRoutes/>
        </div>
        <FlexSpacer width={'100%'}/>
        <Footer/>
      </div>
    </Counter.Provider>
  );
}

export function App(){
  return (
    <div id={'app-wrapper'}>
      <Router basename={'/'}>
        <Page/>
      </Router>
    </div>
  );
}

export default App;
