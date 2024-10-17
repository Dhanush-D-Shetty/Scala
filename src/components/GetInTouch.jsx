import React, {useState} from "react";
import Heading from "./Heading";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
    industry: "",
    message: "",
    agreeTerms: false,
    subscribeNewsletter: false,
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section>
      <Heading txt="Get In Touch" />

      <div className="font-montserrat flex justify-center  items-center sm:min-h-screen p-4  ">
        <form
          onSubmit={handleSubmit}
          className=" font-montserrat sm:bg-[#EEEFF1] font-bold px-10 py-6 sm:px-14 sm:py-16  shadow-lg max-w-3xl w-full sm:space-y-4 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name*"
                onChange={handleChange}
                className="mt-1 w-full p-2 border-black border rounded sm:rounded-none text-black placeholder:text-black"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name*"
                onChange={handleChange}
                className="mt-1 w-full p-2 border-black border rounded sm:rounded-none placeholder:text-black"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company *"
              className="mt-1 w-full p-2 border-black border rounded sm:rounded-none text-black placeholder:text-black"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="mt-1 w-full p-2 border-black border rounded sm:rounded-none placeholder:text-black"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="w-full">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 w-full p-2 border-black border rounded sm:rounded-none"
                required>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Israel">Israel</option>
              </select>
            </div>
            <div className="w-full">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="mt-1 w-full p-2 border-black border rounded sm:rounded-none"
                required>
                <option value="">Select industry</option>
                <option value="Tech">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Messages"
              className="mt-1 w-full p-2 border-black border rounded sm:rounded-none placeholder:text-black"
              rows="6"
              required
            />
          </div>

          <div className="space-y-2 flex items-center flex-col md:flex-row">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className=" border-black border rounded sm:rounded-none"
                required
              />
              <label className="text-sm font-semibold">
                I confirm, I have read and agree to Scala’s privacy policy and
                consent to sharing my information
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="subscribeNewsletter"
                checked={formData.subscribeNewsletter}
                onChange={handleChange}
                className="  border-gray-300 rounded"
              />
              <label className="text-sm font-semibold">
                I would like to receive alerts and updates from Scala
              </label>
            </div>
          </div>

          <div className="text-center pt-12">
            <button className="bg-[#EE3235] text-white px-16 py-2 font-bold rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
