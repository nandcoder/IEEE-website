import React from 'react';

const Aboutieee = () => {
  return (
    <div id="membership" className="bg-sky-700 px-6 pb-8">
      <div className="">
        <div className="text-3xl font-semibold text-slate-50 p-4 ">
          About IEEE
        </div>
        <p className="text-lg font-normal text-slate-50 px-4 pb-4 text-justify">
          IEEE is the world's largest professional association dedicated to
          advancing technological innovation and excellence for the benefit of
          humanity. When you join IEEE, you join a community of over 425,000
          technology and engineering professionals united by a common desire to
          continuously learn, interact, collaborate, and innovate. IEEE
          Membership provides you with the resources and opportunities you need
          to keep on top of changes in technology; get involved in standards
          development; network with other professionals in your local area or
          within a specific technical interest; mentor the next generation of
          engineers and technologists, and so much more. For more info about
          IEEE visit ieee.org.
        </p>
      </div>
      <div className="sm:flex mt-8">
        <div className="bg-sky-900 m-3">
          <div className="text-3xl font-semibold text-slate-50 p-4">
            IEEE Membership
          </div>
          <p className="text-lg font-normal text-slate-50 px-4  text-justify">
            To join this community of over 425,000 technology and engineering
            professionals united by a common desire to continuously learn,
            interact, collaborate, and innovate visit ieee/ membership and
            obtain your membership at the earliest.
          </p>
          <a href="https://www.ieee.org/membership/join/index.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=join">
            <button className=" py-0.5 px-4 bg-orange-400 hover:bg-red-500 text-slate-100 text-xl font-medium rounded-2xl ml-4 mb-4 cursor-pointer">
              Join us
            </button>
          </a>
        </div>
        <div className="bg-sky-900 sm:ml-6 m-3">
          <div className="text-3xl font-semibold text-slate-50 p-4 ">
            IEEE Societies
          </div>
          <p className="text-lg font-normal text-slate-50 px-4 pb-4 text-justify">
            IEEE Society members stay technically current, network with
            colleagues locally and abroad, and collaborate on research and
            projects with leading experts - all while taking advantage of
            specialized opportunities. To know about the various IEEE societies
            visit ieee/societies.
          </p>
        </div>
      </div>
    </div>
  );
};

  );
};

export default Aboutieee;
