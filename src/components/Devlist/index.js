import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as DevActions } from '../../store/ducks/devs';

import {
  Container, ContentDev, DataDev, Botoes, Apagar, Mostrar,
} from './styles';

const DevList = ({ devs, removeDev }) => (
  <Container>
    {!devs.length && <p>Nenhum usuário adicionado.</p>}
    {devs.map(dev => (
      <ContentDev key={dev.id}>
        <img src={dev.avatar} alt="avatar" />
        <DataDev>
          <strong>{dev.name}</strong>
          <span>{dev.login}</span>
        </DataDev>
        <Botoes>
          <Apagar onClick={() => removeDev(dev.id)}>
            <i className="fa fa-times-circle fa-2x" />
          </Apagar>
          <Mostrar href={`https://github.com/${dev.login}`}>
            <i className="fa fa-angle-right fa-2x" />
          </Mostrar>
        </Botoes>
      </ContentDev>
    ))}
  </Container>
);

DevList.propTypes = {
  devs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.name,
      login: PropTypes.name,
    }),
  ).isRequired,
  removeDev: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  devs: state.devs.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevList);
