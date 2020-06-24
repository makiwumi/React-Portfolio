import Link from 'next/link';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, fab, faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab, faGithub, faLinkedin);


const Homepage = () => (
  <Layout>
      <div className="cover">
        <div className="hello">
          <h1 className="hi">Hello<span className="dot">.</span></h1>
          <h3 className="subtitle">I'm Marian <span className="slash"> | </span> Full Stack Web Developer</h3>
          <div className="socialicons">
          <a href="mailto:mfakiwumi@gmail.com" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon="envelope" />
          </a>
          
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <FontAwesomeIcon icon={['fab', 'github']} />
          </div>
        
        </div>
      </div>
      {/* <div className="latest-work">
        <h2>Latest Work</h2>
      
        <div className="">
          <Link href="/portfolio">
            <a className="view-more">View All</a>
          </Link>
        </div>
      </div> */}
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css');
      .cover {
        position: relative;
        min-height: 600px;
        /* background: url(/static/seamless-doodle-transp.jpg);
        background-size: cover; */
      }
      .hello {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* background: blue; */
        padding: 10px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
        /* background: red; */
        font-family: 'Ubuntu', sans-serif;
        font-size: 100px;
        font-weight: bold;
        /* dark grey */
        color: #212121;
      }

      .hello h3 {
        font-family: 'Ubuntu', sans-serif;
        /* font-family: 'Press Start 2P', cursive; */
        color:#212121;
      }
      .dot {
        /* pink */
        color: rgb(238, 192, 192);
        font-weight: bold;
      }

      .slash{
        color: rgb(238, 192, 192);
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      /* .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 20px;
      } */
      @media (max-width: 480px) {
        .hello {
          position: absolute;
          top: 25%;
          left: 50%;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;

//npm run dev