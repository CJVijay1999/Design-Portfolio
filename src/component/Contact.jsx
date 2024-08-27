import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 py-16 p-4">
      <h1 className="py-4 text-4xl text-center text-[#134B70] font-bold">
        Contact
      </h1>
      <form action="https://getform.io/f/bwngepoa" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              id=""
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>

        <div className=" flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
        </div>
        <button className="bg-[#134B70] rounded-lg p-4 text-gray-100 mt-4 w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
