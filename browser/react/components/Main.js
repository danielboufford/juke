import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import AllArtists from './AllArtists';
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>

          <div className="col-xs-10">
            <Route exact path="/" component={AllAlbums}></Route>
            <Route exact path="/albums" component={AllAlbums}></Route>
            <Route path="/albums/:albumId" component={SingleAlbum}></Route>
            <Route exact path="/artists" component={AllArtists}></Route>
            <Route path="/artists/:artistId" component={SingleArtist}></Route>
          </div>
        <Player />
      </div>
      </HashRouter>
    );
  }
}
