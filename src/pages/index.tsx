import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../layouts/Layout';
import '../scss/index.scss';
import ServicesCard from '../components/servicesCard/ServicesCard';
import DigitalTransformationLogo from '../images/svgAssets/dt.svg';
import StartupsLogo from '../images/svgAssets/startups.svg';
import DevOpsLogo from '../images/svgAssets/devops.svg';
import AppDevLogo from '../images/svgAssets/appDev.svg';
import EumentisLogo from '../images/svgAssets/eumentis-logo.svg';
import { FluidImageType, LocationProps } from '../utils/types';
import GatsbyImage from 'gatsby-image';
import TopClientsCountrySlider from '../components/TopClientsCountrySlider';
// swiper carousel slider
import 'swiper/swiper.scss';
import 'swiper/swiper-vars.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import SocialMediaBar from '../components/SocialMediaBar';

// using swiper core features to autoplay slider
SwiperCore.use([Autoplay]);

// index page company logo + social bar
const CompanyHeader = (): JSX.Element => (
  <header className="row align-items-center justify-content-center company-details">
    <div className="col-auto">
      <EumentisLogo />
    </div>
    <div className="col-auto">
      <h1 className="company-name">Eumentis Cloud</h1>
      <div className="row social-media-icons">
        <SocialMediaBar />
      </div>
    </div>
  </header>
);

// Functional Component
const IndexPage: React.FC<LocationProps> = ({ location }) => {
  // fetching top client's responsive images using transformer plugin
  const { allFile }: FluidImageType = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          absolutePath: { regex: "/topClients/" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <div className="container index-main-content">
        {CompanyHeader()}
        <section id="services" className="row no-gutters">
          <ServicesCard
            navigateTo="/Services/DigitalTransformation/"
            title="DT"
            description="Digital Transformation"
            img={<DigitalTransformationLogo />}
          />
          <ServicesCard
            navigateTo="/Services/Startups/"
            title="Startups"
            description={'Product Development for Startups'}
            img={<StartupsLogo />}
          />
          <ServicesCard
            navigateTo="/Services/DevOps/"
            title={'LMS'}
            description={'Customised Learning Management System'}
            img={<DevOpsLogo />}
          />
          <ServicesCard
            navigateTo="/Services/AppDev/"
            title={'App Dev'}
            description={'Customised Application Development'}
            img={<AppDevLogo />}
          />
        </section>
        <section className="container-fluid position-sticky py-3">
          <div>
            <h4 className="text-center page-title">Top Clients</h4>
          </div>
          <Swiper
            id="main"
            loopPreventsSlide={false}
            loop
            centeredSlides
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            slidesPerView={5}
            spaceBetween={60}
            preloadImages
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {allFile.edges.map(
              (item): JSX.Element => (
                <SwiperSlide key={item.node.base}>
                  <GatsbyImage
                    style={{ height: '6rem' }}
                    imgStyle={{
                      height: item.node.base === 'bizminder.png' ? '4rem' : '5rem',
                      objectFit: 'contain',
                    }}
                    className="top-client-img"
                    fluid={item.node.childImageSharp.fluid}
                    alt={item.node.base.split('.')[0]}
                  />
                  <TopClientsCountrySlider baseImg={item.node.base} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
