import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import '../Capsules/Capsules';
import CorPopup from './CorPopup';
import "./Cors.css";

function Cors() {
    const [capsules, setCapsules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const [searchText, setSearchText] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [launchDateFilter, setLaunchDateFilter] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCapsuleSerial, setSelectedCapsuleSerial] = useState(null);
  const openPopup = (capsuleSerial) => {
    setSelectedCapsuleSerial(capsuleSerial);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCapsuleSerial(null);
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const apiUrl = 'https://api.spacexdata.com/v3/cores';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCapsules(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const imageUrls = [
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G7_3_OS_56_5196_Desktop_501dcd8c6a.jpg',
    'https://www.spacex.com/static/images/falcon-heavy/FH_3.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_18_092323_DSC_8011_desktop_9e1cff5245.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/2015-land-landing.jpg',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/2017_SES-10_east_deck.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/HS_TIMELINE_2020_DM2_1325342image_1595460496.webp',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/HS_TIMELINE_2021_SN15_51171019709_7ff8e1ba76_o.webp',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/2021-i4.jpg',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/HS_TIMELINE_2018_FH_40126461851_14b93ec9d7_o.webp',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/HS_TIMELINE_2022_STARSHIP_51924610024_f67feb91ba_o.webp',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/STARSHIP_Testflight_DESKTOP.jpg',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/HS_TIMELINE_2008_Falcon-1-Flight-5-06.webp',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/2010.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_LAUNCH_desktop_46ec0834ce.jpg',
    'https://www.spacex.com/static/images/backgrounds-2021/sl4-3/post-launch/Starlink4-3_desktop_launches.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star_5_12_DSC_6998_desktop_563b34ba45.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
    'https://www.spacex.com/humanspaceflight/assets/images/timeline/HS_TIMELINE_2012_View%20of%20Dragon%20From%20ISS%20Credit%20NASA%2052412%207.webp',
    '	https://www.spacex.com/static/images/starshield/resilient.webp',
    'https://www.spacex.com/vehicles/starship/assets/images/STARSHIP_STARBASE_Desktop.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Mission_launches_47d27b48e1.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_curbh_DSC_2969_desktop_b183afee3c.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_11_Star5_11_DSC_6815_desktop_3ed52beef0.jpg',
    'https://sxcontent9668.azureedge.us/cms-assets/assets/LAUNCH_CRS_27_Desktop_6d7404f50b.png',
  ];

  const formatLaunchDate = (timestamp) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };
  return (
    <div className="capsules-container">
      <div className='cor-img'>CORS</div>
      <div className="search-form">
        <div className='search-input'>
          <TextField
            label="Name"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <TextField
            label="Status"
            variant="outlined"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          <TextField
            label="Launch Date"
            variant="outlined"
            value={launchDateFilter}
            onChange={(e) => setLaunchDateFilter(e.target.value)}
          />
        </div>
      </div>

      <Grid container spacing={2}>
      {capsules
          .filter((capsule) => {
            const nameMatch =
              searchText === '' || capsule.core_serial.toLowerCase().includes(searchText.toLowerCase());
            const statusMatch =
              statusFilter === '' || (capsule.status && capsule.status.toLowerCase() === statusFilter.toLowerCase());
            const launchDateMatch =
              launchDateFilter === '' || formatLaunchDate(capsule.original_launch) === launchDateFilter;

            return nameMatch && statusMatch && launchDateMatch;
          })
          .map((capsule, index) => (
            <Grid item key={capsule.core_serial} xs={12} sm={6} md={6} lg={6}>
              <Paper className="capsule-box">
                <img src={imageUrls[index]} alt={capsule.capsule_serial} className="capsule-image" loading='lazy' />
                <div className="capsule-details">
                  <Typography variant="h6">
                    Launch Date: {formatLaunchDate(capsule.original_launch)}
                    <span className='cap-type'>Status: {capsule.status || "Unknown"}</span>
                  </Typography>
                  <Typography variant="h4">{capsule.core_serial || 'STARLINK MISSION'}</Typography>
                </div>
                <button
                  className="home-btn"
                  onClick={() => openPopup(capsule.capsule_serial)}
                >
                  LEARN MORE
                </button>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <CorPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        capsuleSerial={selectedCapsuleSerial}
      />
    </div>
  );
}
export default Cors;
