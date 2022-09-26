import React, { useState, useEffect } from 'react';
const axios = require('axios');

function Header() {

  const [headerData, setPrelimData] = useState({});

  useEffect( () => {

    if (Object.keys(headerData).length === 0) {

        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then( (res) => {
            // handle success
            setPrelimData(res.data);
        })
        .catch((err) => {
            // handle error
            console.log(err);
        })


    }

  } , [headerData])

  const stats = [
    { name: 'Whatever object', id: 0, },
    { name: 'Current Velocity:  ', previousStat: + 'km/hr' , id: 1},
    { name: 'Time zone: ', previousStat: '56.14%' },
  ]

  return (
    <div>
      <dl className=" grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.id} className="px-4 py-0 sm:p-4">
            <dd className=" flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                Tracking: {item.name} 
                {item.id === 1 ? <div><span className=""> &nbsp; {parseInt(headerData.velocity) }  </span><span>km/hr</span></div> : null}
              </div>
            </dd>
          </div>
        ))}
      </dl>



    </div>
  );
}

export default Header;
