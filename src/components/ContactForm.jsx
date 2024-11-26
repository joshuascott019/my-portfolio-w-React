import { useState } from 'react';

const ContactForm = () => {
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-5">
      <div className="bg-slate-800 rounded-lg p-8 max-w-4xl w-full absolute top-1/3">
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
              className="px-1 mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 bg-slate-50"
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
              className="px-1 mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 bg-slate-50"
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
              className="px-1 mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 bg-slate-50"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
