
import Slider from 'react-slick';
import image1 from '../assets/BS-_aess.png';
import image3 from '../assets/OIP (1).jpeg';
import image4 from '../assets/OIP (2).jpeg';
import image5 from '../assets/OIP.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BranchChapters = () => {
  const banners = [
    {
      id: 1,
      title: "Advancing Technology for Humanity",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      image: image1,
    },
    {
      id: 2,
      title: 'Third slide label',
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: image3,
    },
    {
      id: 3,
      title: 'Third slide label',
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: image4,
    },
    {
      id: 4,
      title: 'Third slide label',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image5,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   const slider1Settings = { ...settings, autoplaySpeed: 1000 };

  //   const slider1Ref = useRef(null);
  //   const delay = (slider, amount) => {
  //     setTimeout(() => {
  //       slider.current.slickPlay();
  //     }, amount);
  //   };

  return (
    <div id="branchchapters" className="p-4">
      <div className="text-4xl font-semibold p-4 flex justify-center items-center h-full memHead">
        Branch Chapters
      </div>
      <div class="text-2xl leading-8 flex justify-center items-center memText">
        We have a range of sub societies based on the latest advancements in
        tech:
      </div>
      <style jsx>{`
        @media screen and (max-width: 500px) {
          .memText {
            font-size: 14px; // Font size for screens less than 737px wide
            margin: 0px;
          }
          .memHead {
            font-size: 24px; // Font size for screens less than 737px wide
            margin: 0px;
          }
        }
      `}</style>
      <div className="w-3/5 m-auto mt-5">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner}
              className='focus:outline-none rounded-t-xl flex justify-between justify-center items-center'
            >
              <img
                src={banner.image}
                alt=""
                className="h-28 w-28 rounded-full"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BranchChapters;
