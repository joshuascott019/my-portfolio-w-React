import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_u81137d', // Service ID
        'template_94fi3ih', // Template ID
        emailParams,
        'Bi1ErfwepMpCqKlkI' // Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('FAILED...', error);
          alert('There was an issue sending your message. Please try again.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-5">
      <div className="bg-slate-800 rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-slate-100 mb-4 text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="text-slate-900 px-3 py-2 mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 bg-slate-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="text-slate-900 px-3 py-2 mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 bg-slate-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="text-slate-900 px-3 py-2 mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 bg-slate-50"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 ${
              isSubmitting
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-slate-600 hover:bg-slate-500'
            } text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
