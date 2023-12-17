import React from "react";
const Aboutieee = () => {
  return (
    <div className="bg-sky-700 px-4 pb-8" id="membership">
      <div style={{ margin: "0 1%" }}>
        <div className="">
          <div className="flex text-2xl font-semibold text-slate-50 py-4 justify-center aboutHead">
            About IEEE
          </div>
          <p className="text-lg font-normal text-slate-50 px-1 pb-4 text-justify aboutText">
            IEEE is the world's largest professional association dedicated to
            advancing technological innovation and excellence for the benefit of
            humanity. When you join IEEE, you join a community of over 425,000
            technology and engineering professionals united by a common desire
            to continuously learn, interact, collaborate, and innovate.
            {/* IEEE
            Membership provides you with the resources and opportunities you
            need to keep on top of changes in technology; get involved in
            standards development; network with other professionals in your
            local area or within a specific technical interest; mentor the next
            generation of engineers and technologists, and so much more. For
            more info about IEEE visit ieee.org. */}
          </p>
        </div>
        <style jsx>{`
          @media screen and (max-width: 500px) {
            .aboutHead {
              font-size: 20px; // Font size for screens less than 500px wide
            }
            .aboutText {
              font-size: 14px; // Font size for screens less than 500px wide
              margin: 0px;
            }
          }
        `}</style>
        <div className="sm:flex mt-8">
          <div className="bg-sky-900 m-3" style={{ borderRadius: "2%" }}>
            <div className="text-3xl font-semibold text-slate-50 p-4 memHead">
              IEEE Membership
            </div>
            <p className="text-lg font-normal text-slate-50 px-4  text-justify memText">
              To join this community of over 425,000 technology and engineering
              professionals united by a common desire to continuously learn,
              interact, collaborate, and innovate visit ieee/ membership and
              obtain your membership at the earliest.
            </p>
            <style jsx>{`
              @media screen and (max-width: 500px) {
                .memText {
                  font-size: 14px; // Font size for screens less than 500px wide
                  margin: 0px;
                }
                .memHead {
                  font-size: 20px;
                }
              }
            `}</style>
            <a
              href="https://www.ieee.org/membership/join/index.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=join"
              style={{ textDecoration: "none" }}
            >
              <div className="flex justify-end button-cont">
                <button className="py-0.5 px-4 bg-[#E87722] hover:bg-red-500 text-slate-100 text-xl font-medium rounded-2xl mr-4 mt-4 mb-3 cursor-pointer">
                  Join us
                </button>
                <style jsx>{`
                  @media screen and (max-width: 736px) {
                    button {
                      font-size: 14px;
                    }
                    .button-cont {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                  }
                `}</style>
              </div>
            </a>
          </div>
          <div
            className="bg-sky-900 sm:ml-6 m-3"
            style={{ borderRadius: "2%" }}
          >
            <div className="text-3xl font-semibold text-slate-50 p-4 memHead">
              IEEE Societies
            </div>
            <p className="text-lg font-normal text-slate-50 px-4 pb-4 text-justify memText">
              IEEE Society members stay technically current, network with
              colleagues locally and abroad, and collaborate on research and
              projects with leading experts - all while taking advantage of
              specialized opportunities. To know about the various IEEE
              societies visit ieee/societies.
            </p>
            <a
              href="https://www.ieee.org/communities/societies/index.html"
              style={{ textDecoration: "none" }}
            >
              <div className="flex justify-end button-cont">
                <button className="py-0.5 px-4 bg-[#E87722] hover:bg-red-500 text-slate-100 text-xl font-medium rounded-2xl mr-4 mb-3 cursor-pointer ">
                  Explore
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutieee;
