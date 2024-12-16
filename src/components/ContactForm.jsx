import React, { useState } from 'react'
import '../css/ContactForm.css' // You'll need to create this CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

    return (
      <div className="mainContainer">
            
    <div className="contact-container">
      <div className="left">
        <div className="FormContainer">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Message Here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="testimonials">
          <h1>Get In <span>Touch.</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a. Donec eros sem, rhoncus eu pellentesque sit amet,</p>
          
          <div className="contact-info">
            <div className="info-item">
              <i className="location-icon"></i>
              <div>
                <h3>Office Address</h3>
                <p>99th, Arround St. Pku City, 28292, Riau Indonesia</p>
              </div>
            </div>

            <div className="info-item">
              <i className="phone-icon"></i>
              <div>
                <h3>Call Us</h3>
                <p>+(827) 123 - 456 - 7891</p>
              </div>
            </div>

            <div className="info-item">
              <i className="mail-icon"></i>
              <div>
                <h3>Mail Us</h3>
                <p>info@evaniayogastudio.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactForm