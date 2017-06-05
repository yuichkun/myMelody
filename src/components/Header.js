import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
export default class Header extends React.Component{
  render(){
    return (
      <div>
        <AppBar
          title="My Melody"
          titleStyle={{
            textAlign: 'center'
          }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
        />
      </div>
    );
  }
}
