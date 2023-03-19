import React from "react";

import { Helmet } from "react-helmet";

import Navigation from "../components/navigation";
import ServicesCard from "../components/services-card";
import PortofolioCard from "../components/portofolio-card";
import BlogCard from "../components/blog-card";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agencia de Diseño</title>
        <meta property="og:title" content="Creative Agency Page" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container" id="Home">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text Heading1">
                <span>Somos una agencia de Creación Creativa</span>
              </h1>
              <span className="home-text03">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </span>
                <br></br>
                <span>tempor incididunt ut labore et dolore magna aliqua.</span>
              </span>
              <button className="home-primary button-primary button-lg button">
                Get in touch with us
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container1">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095-1000w.png"
                  className="home-image"
                />
              </div>
              <div className="home-container2">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B1%5D-1000w.png"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B2%5D-1000w.png"
                  className="home-image2"
                />
              </div>
              <div className="home-container3">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B3%5D-1000w.png"
                  className="home-image3"
                />
                <div className="home-container4">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                    className="home-image4"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
                    className="home-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container" id="Services">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <span className="home-text07">nuestros servicios</span>
                <h2 className="Heading2">
                  <span>Brindamos una amplia familia</span>
                  <br></br>
                  <span>de soluciones creativas</span>
                </h2>
              </div>
            </div>
            <div className="home-cards-container">
              <ServicesCard
                text="Creación de Contenido"
                image_src="/playground_assets/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Diseño de Marca e Imagen"
                image_src="/playground_assets/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Diseño de Producto"
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="section-container" id="Portfolio">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <span className="home-text12">nuestro trabajo</span>
              <h2 className="home-text13 Heading2">
                <span>Mirá nuestros Proyectos</span>
              </h2>
              <span className="home-text15">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </span>
                <br></br>
                <span>
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </span>
              </span>
              <button className="button-secondary button-lg button">
                Estos son algunos de nuestros proyectos
              </button>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text19 tab-selector-btn">Publicidad</span>
              <span className="home-text20 tab-selector-btn">
                Redes Sociales
              </span>
              <span className="home-text21 tab-selector-btn">Marca</span>
              <span className="home-text22 tab-selector-btn">UI / UX</span>

              <span className="tab-selector-btn">Diseño de Producto</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                project_title="Diseños de Oficina"
                rootClassName="portofolio-card-root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="Nuevas ideas de Publicidad"
                rootClassName="portofolio-card-root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Diseño de Campaña 2021"
                rootClassName="portofolio-card-root-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Campaña de Avisos"
                rootClassName="portofolio-card-root-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Diseño de Campañña 2020"
                rootClassName="portofolio-card-root-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Diseño de Campaña 2022"
                rootClassName="portofolio-card-root-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-about section-container" id="About">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <span className="home-text25">Nosotros</span>
              <h2 className="home-text26 Heading2">
                <span>Tu Marca con</span>
                <br></br>
                <span>Propósito e Impacto</span>
              </h2>
              <span className="home-text30">
                Una agencia creativa digital de servicios integrales con
                oficinas reales.
              </span>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text31">Calidad de servicio</span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text32">
                    Desarrollo de estrategias a largo plazo
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text33">
                    Auditorías de marca gratuitas a Start Ups
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text34">
                    Más de 10 años de experiencia
                  </span>
                </div>

                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text36">
                    Acompañamiento en implementaciones
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container" id="Process">
          <div className="home-max-width4 max-content-container">
            <span className="home-text37">Nuestros Proceso</span>
            <h2 className="home-text38 Heading2">
              <span>
                Tenemos un proceso simple
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
            </h2>
            <div className="home-step">
              <span className="home-text42">01</span>
              <div className="home-container5">
                <span className="home-text43">Buscamos la mejor idea</span>
                <span className="home-text44">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Lorem ipsum dolor sit amet, consec
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text45">02</span>
              <div className="home-container6">
                <span className="home-text46">
                  BrainStorming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text47">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Lorem ipsum dolor sit amet, consec
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text48">03</span>
              <div className="home-container7">
                <span className="home-text49">Diseño</span>
                <span className="home-text50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Lorem ipsum dolor sit amet, consec
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container" id="blog">
          <div className="home-max-width5 max-content-container">
            <span className="home-text51">Publicaciones</span>
            <h2 className="home-text52 Heading2">
              <span>Nuestras últimas publicaciones</span>
            </h2>
            <span className="home-text54">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <div className="home-blog-cards-container">
              <BlogCard rootClassName="blog-card-root-class-name"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-card-root-class-name1"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text58">qué estas esperando?</span>
            <h2 className="home-text59 Heading2">
              <span>Trabajemos Juntos!</span>
            </h2>
            <span className="home-text61">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary3 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-contact-container">
                <span className="home-text73">Contactanos</span>
                <span className="home-text74">
                  <span>Calle Sin Nombre, Sin Número</span>
                  <br></br>
                  <span>
                    Alguna Ciudad
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Alguna Provincia
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Código Postal</span>
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <span className="home-text82">Registrate a nuestro NewsLetter</span>
              <input
                type="text"
                placeholder="ingresa tu email"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribite</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width8 max-content-container">
          <h5>DiseñoCreativo</h5>
          <span className="home-text83">
            <span>
              Todos los derechos Reservados @
            </span>
            <span>
              | Diseño por
            </span>
            <span className="home-text87">Dysam.Soft</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
