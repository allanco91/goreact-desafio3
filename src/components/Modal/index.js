import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as DevActions } from '../../store/ducks/devs';
import { Creators as ModalActions } from '../../store/ducks/modal';

import {
  Container, Content, Cancelar, Adicionar,
} from './styles';

class Modal extends Component {
  state = {
    user: '',
  };

  handleUserInput = e => this.setState({ user: e.target.value });

  handleHideModal = () => {
    const { hideModal } = this.props;

    hideModal();
    this.setState({ user: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { loading } = this.props;

    if (loading) return;

    if (!user) return;

    const { addDevRequest, modal } = this.props;

    addDevRequest(user, modal.cordinates);
    this.handleHideModal();
  };

  render() {
    const { user } = this.state;
    const { modal, loading } = this.props;

    return (
      <Container show={modal.visible}>
        <Content>
          <h3>Adicionar novo usuário</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Usuário do github"
              value={user}
              onChange={e => this.handleUserInput(e)}
            />
            <Cancelar type="button" onClick={this.handleHideModal}>
              Cancelar
            </Cancelar>
            <Adicionar type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </Adicionar>
          </form>
        </Content>
      </Container>
    );
  }
}

Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  addDevRequest: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    visible: PropTypes.bool,
    cordinates: PropTypes.objectOf(
      PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  loading: state.devs.loading,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...DevActions,
    ...ModalActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
