import React from 'react';

const Songs = (props) => {

  const songsProp = props.songs;

  return (
    <div>
      <h4 className='newLine'>SONGS</h4>
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
            songsProp && songsProp.map(song => (
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

export default Songs;
