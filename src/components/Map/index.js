import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import 'mapbox-gl/dist/mapbox-gl.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as DevActions } from '../../store/ducks/devs';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { Mark } from './styles';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.44738649310391,
      longitude: -46.80551162897843,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;

    showModal({ latitude, longitude });
  };

  render() {
    const { viewport } = this.state;
    const { devs } = this.props;

    return (
      <MapGL
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
        onViewportChange={vp => this.setState({ viewport: vp })}
      >
        {devs.map(dev => (
          <Marker
            key={dev.id}
            latitude={dev.latitude}
            longitude={dev.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <Mark src={dev.avatar} alt="avatar" />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

Map.propTypes = {
  devs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      avatar: PropTypes.string,
    }),
  ).isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  devs: state.devs.data,
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
)(Map);
