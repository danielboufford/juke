import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const artist = this.state.selectedArtist;
    const albums = this.state.artistAlbums;
    const songs = this.state.artistSongs;

    console.log("albums", albums);
    console.log("songs", songs);

    return (
      <div>
        <h3>{artist.name}</h3>
        <h4>ALBUMS</h4>
        {albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <Link className="thumbnail" to={`/albums/${album.id}`}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </Link>
          </div>
        ))}
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Artists</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {
                songs && songs.map(song => (
                  <tr key={song.id}>
                    <td>
                      <button className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-play"></span>
                      </button>
                    </td>
                    <td>{ song.name }</td>
                    <td>
                      <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
                    </td>
                    <td>{ song.genre }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    );
  }
}
