import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
      return <div>Loading...</div>;
  },
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}