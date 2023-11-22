import React from 'react';
import Image from '../assets/demoPic.png';

const BranchChapters = () => {
  return (
    <>
      <div className='px-10 py-10 mx-10 my-10 font-light'>
        <div className='mr-20 ml-'>
          <h1>
            Prof. Sivaji Chakravorty addressed the students about benefits of
            IEEE membership
          </h1>
        </div>
        <div className='mr-20 mt-4 mb-3' style={{ 'font-size': '20' }}>
          <p>
            Riding on the back of a communique with complete consensus, the New
            Delhi G20 Leaders' Declaration makes India's G20 Sherpa Amitabh Kant
            the man of the moment.
          </p>
        </div>
        <hr />
        {/* break line */}

        {/* time of publish */}
        <div className='text-sm font-light'>
          <p>
            <div>By: Mantosh Kumar</div>
            <div> Jamshedpur, Oct 2, 2023 05:43 am</div>
          </p>
        </div>
        <div className='mt-3 mb-5 flex justify-center item-center'>
          <img src={Image} alt='' style={{ height: '75%', width: '75%' }} />
        </div>
        <div>
          <p>
            <div className='py-2'>
              India's G20 Sherpa Amitabh Kant on drafting the joint communique
              which got 100 per cent consensus, delivering a win-win on the
              Ukraine question, and the green development pact. The session was
              moderated by Shubhajit Roy, Diplomatic Editor, The Indian Express
            </div>
            <div className='py-2'>
              Shubhajit Roy: This G20 summit adopted a joint communique with
              consensus. What happened in the last 72 to 96 hours before the
              summit declaration was adopted?
            </div>
            <div className='py-2'>
              We were very clear that we should have a consensus-based document.
              By the time we had gone in for the final round of the Sherpas'
              meetings, we had agreed on a substantial amount of text. We did
              this almost 60 km away from Delhi, in Manesar. On September 4, we
              started discussing the geopolitical paragraph on Russia-Ukraine.
            </div>
            <div className='py-2'>
              That was the most complex... We kept the meeting on the morning of
              September 8 in Sushma Swaraj Bhavan, because, by then, the leaders
              started coming in. We gave them one draft, to which there were
              different viewpoints. We modified that and it went to Moscow and
              came back with many comments, and then we finally worked on that
              late evening
            </div>
            <div className='py-2'>
              Then at 11.30 at night, we had our last round of Sherpa meetings,
              and said this is the final draft. I also told them that this would
              not be discussed anymore at the Sherpa level. If anyone wants to
              challenge this, their leader can discuss it with my leader, my
              prime minister... We were negotiating an agreement which even the
              United Nations Security Council was not able to achieve.
            </div>
            <div className='py-2'>
              We have a consensus language, which we feel is very strong. It
              moves the debate towards diplomacy and dialogue. It happened over
              200-odd bilateral meetings and 16 formal meetings, through tough,
              brutal negotiations.
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default BranchChapters;
