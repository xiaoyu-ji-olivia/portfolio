import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHmTMWF8Lx2Pg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1664884892651?e=1769644800&v=beta&t=WNelLcw1gN-OSJAGChPqpbl0zBRWvjI9-0DdYkZVyKw"
          // "C:/Users/xnxgg/Desktop/ps/portfolio_github/react-portfolio-template-master/react-portfolio-template-master/src/assets/images/IMG_1790.JPG"
           alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/xiaoyu-ji-olivia/xiaoyu-ji-olivia.github.io" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/xiaoyu-ji-8a0338193/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Xiaoyu Ji</h1>
          <p>Machine Learning and Computer Vision Researcher</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/xiaoyu-ji-olivia/xiaoyu-ji-olivia.github.io" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/xiaoyu-ji-8a0338193/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;