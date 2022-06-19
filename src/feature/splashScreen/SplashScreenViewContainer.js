// @flow
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { compose, lifecycle } from 'recompose';
import SplashScreenView from './SplashScreenView';
import { ResetNavigator } from '../../config/env';


export default compose(
  connect(
    state => ({

    }),
    (dispatch, { navigation }) => ({
      nav: navigation,
    }),
  ),
  lifecycle({
    componentDidMount() {
      const { navigation } = this.props;
      setTimeout(() => {
        ResetNavigator(navigation, 'ContactList');
      }, 3500);
    },
  }),
)(SplashScreenView);
