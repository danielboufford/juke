
import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StatefulAlbums extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
    // this.state.albums = this.state.albums.bind(this);
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }

  render () {

    return (
      // How to pass down props in react
      <AllAlbums albums={this.state.albums}/>
    )

  }

}
