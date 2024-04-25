import i1 from "../ourteamimage/1.png";
import i2 from "../ourteamimage/2.jpg";
import i3 from "../ourteamimage/3.jpg";
import i4 from "../ourteamimage/4.png";
import i5 from "../ourteamimage/5.jpg";
import i6 from "../ourteamimage/6.jpg";
import i7 from "../ourteamimage/7.jpg";
import i8 from "../ourteamimage/8.jpg";
import i9 from "../ourteamimage/9.jpg";
import i10 from "../ourteamimage/10.jpg";
import i11 from "../ourteamimage/11.jpg";

function Ourteam() {
  return (
    <div className="bg-slate-50">
      <p className="text-4xl font-semibold p-2 text-center">Our Team</p>
      <hr className="border-gray-300 sm:max-w-sm  max-w-52 border-t-2 mx-auto" />
      <div>
        <div className="p-2 py-10 flex flex-col items-center ">
          <img src={i1} alt="Team Image" className="max-h-36 max-w-36 rounded-full"/>
          <div className="text-base font-semibold">Walter Dowing</div>
          <div className="text-sm font-medium">President IEEE Systems Council</div>
        </div>
        <div className="md:flex justify-center sm:gap-10 gap-5">
          <div className="p-2">
            <p className="text-xl font-medium p-2 flex justify-center">Program Chair</p>
            <div className="p-2 flex flex-col items-center">
              <img src={i2} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
              <div className="text-base font-semibold">Dr.SanjeeviKumar Padmanaban,Professor</div>
              <div className="text-sm font-medium">University of South Eastern Norway</div>
            </div>
          </div>
          <div className="p-2 flex flex-col items-center">
            <p className="text-xl font-medium p-2">Faculty InCharge</p>
            <div className="flex md:gap-24">
              <div className="p-2 mr-1 flex flex-col items-center">
                <img src={i3} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
                <div className="text-base font-semibold">Dr.Kumari Namrata</div>
                <div className="text-sm font-medium">Faculty Counselor(EED)</div>
              </div>
              <div className="p-2 ml-1 flex flex-col items-center">
                <img src={i4} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
                <div className="text-base font-semibold">Dr.Rashmi Sinha</div>
                <div className="text-sm font-medium">Faculy Counselor(ECED)</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-medium mt-6  text-center">IEEE System council</p>
        <p className="text-2xl font-medium  mb-6 text-center">Student members</p>
        <div>
          <div className="md:flex justify-center">
            <div className="p-4 flex flex-col items-center">
              <img src={i5} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
              <div className="text-base font-semibold">Nishant Kumar</div>
              <div className="text-sm font-medium">Chair</div>
            </div>
            <div className="p-2 flex justify-center gap-2">
              <div className="p-2 flex flex-col items-center">
                <img src={i6} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
                <div className="text-base font-semibold">Mantosh Kumar</div>
                <div className="text-sm font-medium">Vice Chair</div>
              </div>
              <div className="p-2 flex flex-col items-center">
                <img src={i7} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
                <div className="text-base font-semibold">Rajesh Kumar</div>
                <div className="text-sm font-medium">Treasurer</div>
              </div>
            </div>
            <div className="p-2 flex justify-center gap-2">
              <div className="p-2 flex flex-col items-center">
                <img src={i8} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
                <div className="text-base font-semibold">Md Sazzad</div>
                <div className="text-sm font-medium">Secretary</div>
              </div>
              <div className="p-2 flex flex-col items-center">
                <img src={i9} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
                <div className="text-base font-semibold">Kumaresh Pal</div>
                <div className="text-sm font-medium">Webmaster</div>
              </div>
            </div>
          </div>

          <div className="p-2 flex justify-center gap-2">
            <div className="p-2 flex flex-col items-center">
              <img src={i10} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
              <div className="text-base font-semibold">Abhinav Kumar</div>
              <div className="text-sm font-medium">Volunteer</div>
            </div>
            <div className="p-2 flex flex-col items-center">
              <img src={i11} alt="Team Image" className="max-h-32 max-w-32 rounded-full"/>
              <div className="text-base font-semibold">Himanshu Singh</div>
              <div className="text-sm font-medium">Volunteer</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Ourteam;

