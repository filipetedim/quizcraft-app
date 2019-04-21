import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Containers
import FilterMenu from '../containers/FilterMenu';
import QuestionTable from '../containers/QuestionTable';

// Components
import Header from '../components/Header';
// import ContentWrapper from '../components/ContentWrapper';

const styles = {
  root: {
    padding: 30,
  },
};

class Questions extends Component {
  state = { loading: true, collapse: false };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Header />
        <Grid className={classes.root} container spacing={16}>
          <Grid item xs={12} md={4} lg={2}>
            <FilterMenu />
          </Grid>
          <Grid item xs={12} md={8} lg={10}>
            <QuestionTable />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(observer(Questions));
