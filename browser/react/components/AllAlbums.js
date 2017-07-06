import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Dumb b/c only renders
const AllAlbums = (props) => {

  // No this bc not constructor function
  const albums = props.albums;

  // render () {
  //   const albums = this.state.albums;

    return (
      <div>
        <h4>Albums</h4>
        <div className="row">
        {
          albums.map(album => (
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
          ))
        }
        </div>
      </div>
    );
  }


export default AllAlbums;
