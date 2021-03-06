import Layout from '../components/Layout';
import{AnimatePresence, motion} from 'framer-motion';

const About = () => (
  <AnimatePresence>
    
    <Layout>
      <motion.div className="cover"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
      >
      <h1>About Me</h1>
    <div className="about-text">
      <img src="/static/IMG_2621-Edit.jpg" />
      <p id="indent">
        I am a full-stack web developer experienced in HTML, CSS, Bootstrap, Node.js and JavaScript that specializes in front-end web development and applications. In my previous career as a Medical Laboratory Scientist, I worked with laboratory information systems. I was able to team up with programmers to design and improve workflow in the lab. I have enjoyed designing and creating websites since beginning my journey at the Johns Hopkins coding bootcamp. With my background in Art, Photography and my interest in programming, I was recently motivated to turn my passion into a career.  I’m looking forward to optimizing user experience through design, software development and engineering with a team where I can grow, create and learn to master these skills.
      </p>
    </div>
    
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
      .about-text {
        color:black;
        text-align:left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding:10px;
        background: white;
      }
      
      img {
        float:left;
        width:250px;
        margin: 10px 30px 20px 20px;
      }
      p {
        font-size: 20px;
        font-family: 'Spinnaker', sans-serif;
      }

      #indent{
        text-indent: 50px;
      }

      @media (max-width: 600px){
        .about-text img {
          float:none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}

    </style>
      
    </motion.div>   
  </Layout>
  </AnimatePresence>
  
);

export default About;