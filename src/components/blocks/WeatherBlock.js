import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../reusables/Spinner';

import CSS from '../../css/WeatherBlock.module.css';

// Weather block. There will be a lot more logic when I actually connect to a weather API.
function WeatherBlock({ lat, lon, setNetworkIssue }) {
  const [temp, setTemp] = useState('55');
  const [desc, setDesc] = useState('Sunny');
  const [loading, setLoading] = useState(true);
  // settimeout to update this every 5 minutes maybe?
  useEffect(() => {
    // On first render get the weather data and place it in state.
    fetch(`/weatherInfo/${lat}/${lon}`).then(data => data.json())
      .then(({ temperature, summary }) => {
        setTemp(Math.round(temperature));
        setDesc(summary);
        setLoading(false);
      }).catch(err => {
        console.error({ err, message: "Can't connect to /weatherInfo" });
      });
  }, []);

  return (
    <section className={CSS.WeatherBlock}>
      {loading ? <>
        <div className={CSS.loader}>
          <Spinner />
        </div>
      </> : <>
          <div className={CSS.temperatureContainer}>
            <span className={CSS.temperature}>{temp}</span>
          </div>
          <div className={CSS.descContainer}>
            <span className={CSS.desc}>{desc}</span>
          </div>
        </>}
    </section>
  );
}

WeatherBlock.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string,
  setNetworkIssue: PropTypes.func,
};

WeatherBlock.defaultProps = {
  lat: '40.7831',
  lon: '73.9712',
  setNetworkIssue: (() => { throw new ReferenceError('setNetworkIssue not passed to MainView'); }),
};

export default WeatherBlock;