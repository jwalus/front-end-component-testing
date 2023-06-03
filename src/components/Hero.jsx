import { herovideo } from '../assets';

const Hero = () => {
  return (
    <div className="xm:mx-4 xl:mx-56 xxl:mx-64">
      <div className="w-full flex xm:flex-col md:flex-row">
        <div className="flex flex-col">
          <h1>BuiltIn is your one stop shop for tech related news.</h1>
          <p>
            Stay up-to-date with the latest technology trends and innovations. <br />
            Explore in-depth articles and analysis on the tech industry.
          </p>
          <button></button>
        </div>
        <div className="flex">
        <video muted playsInline src={herovideo} type="video/mp4" className="w-[600px]" loop autoPlay></video>
        </div>
      </div>
    </div>
  )
}

export default Hero