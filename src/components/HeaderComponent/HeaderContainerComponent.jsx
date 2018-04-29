import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

class HeaderContainerComponent extends PureComponent {
  render() {
    return (
      <AppBar>
        <Toolbar>
          Hello!
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles()(HeaderContainerComponent);
