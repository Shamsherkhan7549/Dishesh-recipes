import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../assets/recipes-logo.jpg'
import { Link } from 'react-router'
const About = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
      <div className='row  py-5'>
      <div className='d-block d-lg-none'>
              <h2>About Us</h2>
              <div>
                Welcome to <h5 className='d-inline'><span className='text-danger'>Re</span><span className='text-primary'>cip</span><span className='text-success'>es</span></h5>,
                  your go-to destination for delicious and easy-to-follow recipes! Whether you’re a beginner in the kitchen or a seasoned chef, we bring you a variety of dishes that are simple, flavorful, and made with love. 
              </div>
            </div>
        <div  className='col-lg-6 col-10 mt-5 mt-lg-0 '>
           <img  className='w-100 rounded' src={logo} />
        </div>
        <div className='col-1'></div>
        <div className="col-lg-5 col-sm-10 mt-lg-0 mt-5 d-flex flex-column gap-2">
            <div className='d-none d-lg-block'>
              <h2>About Us</h2>
              <div>
                Welcome to <h5 className='d-inline'><span className='text-danger'>Re</span><span className='text-primary'>cip</span><span className='text-success'>es</span></h5>,
                  your go-to destination for delicious and easy-to-follow recipes! Whether you’re a beginner in the kitchen or a seasoned chef, we bring you a variety of dishes that are simple, flavorful, and made with love. 
              </div>
            </div>

                <h4>Our Mission</h4>
                <div>At  <h5 className='d-inline'><span className='text-danger'>Re</span><span className='text-primary'>cip</span><span className='text-success'>es</span></h5>, we believe that cooking should be fun, accessible, and rewarding. Our mission is to inspire home cooks by providing:</div>
                <ul>
                  <li> Step-by-step recipes with clear instructions</li>
                  <li> Healthy and budget-friendly meal ideas</li>
                  <li>Traditional and modern flavors from around the world</li>
                  <li> Cooking tips, hacks, and ingredient substitutes</li>
                </ul>

                <h4>What You’ll Find Here</h4>
                <p>🍽️ Tried & Tested Recipes – We ensure that every recipe is easy to follow and works perfectly.</p>
                <p>
                🌍 Diverse Cuisine – From Indian classics to international favorites, we cover a wide range of tastes.</p>
                <p>⏳ Quick & Easy Meals – Perfect for busy schedules and last-minute cravings.</p>
                <p>🥦 Healthy Options – Nutritious meals that don’t compromise on taste.</p>

                <h4>Our Story</h4>

                <div><h5 className='d-inline'><span className='text-danger'>Re</span><span className='text-primary'>cip</span><span className='text-success'>es</span></h5>,started with a simple idea – to make cooking enjoyable for everyone. What began as a small collection of family recipes has grown into a platform where food lovers can explore, learn, and share their passion for cooking.</div>

                <h4>Join Our Community</h4>
                <p>We’d love to hear from you! Share your experiences, ask questions, and connect with fellow foodies:</p>
                <p>📩 Contact us: <a href="mailto:shamsher.khan7515@gamil.com">shamsher.khan7515@gamil.com </a></p>
                <p>📲 Follow us on <Link to="https://www.linkedin.com/in/shamsher-khan-883107301 ">Linkedin</Link></p>
                <p>Happy Cooking! 🍳✨</p>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default About