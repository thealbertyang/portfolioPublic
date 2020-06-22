import React from 'react';

import MainLayout from '../components/page/Layout';
import Header from '../components/page/Header';
import Section from '../components/page/Section';

const title = "About";

const About = () => {
    return (
        <MainLayout title={title}>
            <Header overlineText={`Me`} overlineClassName={`text-white`} titleClassName={`font-weight-light text-white`} titleText={`About`} backgroundImage={`/img/aboutBg.jpg`} height={`35rem`}>
                <div className='row'>
                    <div className='col-12 d-flex flex-column'>
                        <a href='https://github.com/thealbertyang' className='btn btn-outline-primary' target='_blank'><i className="fab fa-github"></i> View Github</a>
                    </div>
                </div>
			</Header>
            <Section backgroundColor={`#ffffff`}>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 offset-md-3'>
                            <p className='mb-5'>
                                Passionate about web development and an expert that you're looking for. I've worked with many businesses on establishing their online presence and building web applications to simplify operational processes. My expertise is in back-end development, but I also have an eye for design. Specifically speaking, I work with React, Mongo, Node, and Express -- paired with Photoshop and CSS to render a sleek app or contemporary website design. Although my stack of choice is MERN, I've worked a lot with Wordpress, designing sites and modifying plugins for more simple cost effective solutions, as well as Larvel.
                            </p>
                            <p>
                                <img src="/img/me.jpg" className='img-fluid'/>
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="py-5" backgroundColor={`#080808`} fluid>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 className='font-weight-light text-white text-center mb-5'>
                                Skillsets
                            </h2>
                        </div>
                        <div className='col-4'>
                            <img src='/img/node.png' className='img-fluid'/>
                        </div>
                        <div className='col-4 mb-5'>
                            <img src='/img/react.png' className='img-fluid'/>
                        </div>
                        <div className='col-4'>
                            <img src='/img/mongo.png' className='img-fluid'/>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="text-white">Web Technologies</h5>
                                </div>
                                <div className="col-md-6 col-6">
                                    <ul className='list-unstyled text-muted'>
                                        <li>HTML / CSS / JS</li>
                                        <li>Mongo, Express, React, Node</li>
                                        <li>Docker</li>
                                        <li>Bootstrap</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-6">
                                    <ul className='list-unstyled text-muted'>
                                        <li>Laravel</li>
                                        <li>Vue.js</li>
                                        <li>jQuery</li>
                                        <li>WordPress</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
						</div>
						<div className="col-md-6 col-12">
	                        <div className="row">
                                <div className="col-md-12">
                                    <h5 className='text-white'>More</h5>
                                </div>
                                <div className="col-md-6 col-6">
                                    <ul className='list-unstyled text-muted'>
                                        <li>WebPack / NPM</li>
                                        <li>GitHub</li>
                                        <li>SSH</li>
                                        <li>Ubuntu</li>
                                        <li>phpMyAdmin</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-6">
                                    <ul className='list-unstyled text-muted'>
                                        <li>DigitalOcean</li>
                                        <li>PhotoShop</li>
                                        <li>OOP</li>
                                        <li>MVC</li>
                                        <li>RESTful API</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
  				</div>
          </Section>
        </MainLayout>
    );
}

export default Home;