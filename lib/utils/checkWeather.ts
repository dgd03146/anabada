const checkWeather = (sky: string, pty: string) => {
  const requestDate = new Date();
  const currHour = requestDate.getHours();
  // 저녁
  if (currHour >= 18 || currHour < 6) {
    // 맑을 때
    if (Number(sky) === 1) {
      switch (Number(pty)) {
        case 0:
          return '/assets/weatherIcons/clear_night.svg';
        default:
          return;
      }
    }
    // 구름 많음
    else if (Number(sky) === 3) {
      switch (Number(pty)) {
        case 0:
          return '/assets/weatherIcons/cloudy_night_normal.svg';
        case 1:
          return '/assets/weatherIcons/cloudy_night_rain.svg';
        case 3:
          return '/assets/weatherIcons/cloudy_night_snow.svg';
        default:
          return;
      }
    }
    // 흐림
    else if (Number(sky) === 4) {
      switch (Number(pty)) {
        case 0:
          return '/assets/weatherIcons/rainy_normal.svg';
        case 1:
          return '/assets/weatherIcons/rainy_rain.svg';
        case 2:
          return '/assets/weatherIcons/rainy_snowandrain.svg';
        case 3:
          return '/assets/weatherIcons/rainy_snow.svg';
        default:
          return;
      }
    }
  }
  // 낮
  else {
    if (Number(sky) === 1) {
      switch (Number(pty)) {
        case 0:
          return '/assets/weatherIcons/clear_day.svg';
        default:
          return;
      }
    }
    // 구름 많음
    else if (Number(sky) === 3) {
      switch (Number(pty)) {
        case 0:
          return '/assets/weatherIcons/cloudy_day_normal.svg';
        case 1:
          return '/assets/weatherIcons/cloudy_day_rain.svg';
        case 3:
          return '/assets/weatherIcons/rainy_snow.svg';
        default:
          return;
      }
    }
    // 흐림
    else if (Number(sky) === 4) {
      switch (Number(pty)) {
        case 0:
          return '/assets/weatherIcons/rainy_normal.svg';
        case 1:
          return '/assets/weatherIcons/rainy_rain.svg';
        case 2:
          return '/assets/weatherIcons/rainy_snowandrain.svg';
        case 3:
          return '/assets/weatherIcons/rainy_snow.svg';
        default:
          return;
      }
    }
  }
};

export default checkWeather;
