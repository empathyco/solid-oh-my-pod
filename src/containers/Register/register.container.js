import React, { Component } from 'react';
import RegisterComponent from './register.component';
import { Provider } from '@services';



class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { providers: [] };
  }

  async componentDidMount() {
    const providers = await Provider.getIdentityProviders();
    this.setState({ providers });
  }

  render() {
    const { providers } = this.state;
    return <RegisterComponent providers={providers} {...this.props} />;
  }
}

export default RegisterContainer;
