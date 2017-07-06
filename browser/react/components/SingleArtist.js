import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Songs from './songs'
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
  constructor() {
    super();
    this.state = {
      selectedArtist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount () {

    const artistId = this.props.match.params.artistId;

    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(selectedArtist => {
        this.setState({ selectedArtist })
      });

    axios.get(`/api/artists/${artistId}/albums/`)
      .then(res => res.data)
      .then(artistAlbums => {
        this.setState({ artistAlbums })
      });

    axios.get(`/api/artists/${artistId}/songs/`)
      .then(res => res.data)
      .then(artistSongs => {
        this.setState({ artistSongs })
      });

  }

  render () {

    const artist = this.state.selectedArtist; // or however you've named it
    const artistId = this.props.match.params.artistId;

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artistId}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artistId}/songs`}>SONGS</Link></li>
        </ul>

        <Route path="/artists/:artistId/albums" render={
          (routeProps) => <AllAlbums albums={this.state.artistAlbums}
          artistId={routeProps.match.params.artistId} />
        } />
        <Route path="/artists/:artistId/songs" render={
          (routeProps) => <Songs songs={this.state.artistSongs}
          artistId={routeProps.match.params.artistId} />
        } />

      </div>
    );

    // const artist = this.state.selectedArtist;
    // const artistAlbums = this.state.artistAlbums;
    // const artistSongs = this.state.artistSongs;

    // return (
    //   <div>
    //       <AllAlbums albums={artistAlbums}/>
    //       <Songs songs={artistSongs}/>          
    //   </div>
    // );
  }
}
 