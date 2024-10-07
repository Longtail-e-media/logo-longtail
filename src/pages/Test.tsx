// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     axios
//       .get(
//         'https://longtail.info/logo/dynamic/api/v1/getLogo.php/',
//       )
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       {data &&
//         data.map((item: any) => (
//           <div key={item.id} className="m-4 rounded border p-4 shadow">
//             <h2 className="text-2xl font-bold">{item.title}</h2>
//             <img src={item.img_thumb} alt={item.name} className="my-4" />
//             <div
//               dangerouslySetInnerHTML={{ __html: item.content }}
//               className="text-gray-700"
//             />
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold">Logo Formats:</h3>
//               <ul>
//                 {item.logoFormats.img_jpg && (
//                   <li>
//                     <a
//                       href={item.logoFormats.img_jpg}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       JPG
//                     </a>
//                   </li>
//                 )}
//                 {item.logoFormats.img_png && (
//                   <li>
//                     <a
//                       href={item.logoFormats.img_png}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       PNG
//                     </a>
//                   </li>
//                 )}
//                 {item.logoFormats.img_svg && (
//                   <li>
//                     <a
//                       href={item.logoFormats.img_svg}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       SVG
//                     </a>
//                   </li>
//                 )}
//               </ul>
//             </div>
//             <p className="text-sm text-gray-500">
//               Added Date: {item.added_date}
//             </p>
//             <p className="text-sm text-gray-500">
//               Modified Date: {item.modified_date}
//             </p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Test;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test: React.FC = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     axios
//       .get(
//         'https://longtail.info/logo/dynamic/api/v1/getLogo.php/',
//       )
//       .then((response) => {
//         console.log('API Response:', response.data); // Log API response
//         const jsonString = response.data.replace('const logoDetails = ', '').replace(/;$/, '');
//         const parsedData = JSON.parse(jsonString);
//         console.log('Parsed Data:', parsedData); // Log parsed data
//         if (Array.isArray(parsedData)) {
//           setData(parsedData);
//         } else {
//           setData([parsedData]);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('API Error:', error); // Log API error
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   console.log('Data to Render:', data); // Log data to be rendered

//   return (
//     <div>
//       {data.map((item: any, index) => (
//         <div key={index} className="m-4 rounded border p-4 shadow">
//           <h2 className="text-2xl font-bold">{item.title}</h2>
//           <img src={item.img_thumb} alt={item.name} className="my-4" />
//           <div
//             dangerouslySetInnerHTML={{ __html: item.content }}
//             className="text-gray-700"
//           />
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold">Logo Formats:</h3>
//             <ul>
//               {item.logoFormats && item.logoFormats.img_jpg && (
//                 <li>
//                   <a
//                     href={item.logoFormats.img_jpg}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     JPG
//                   </a>
//                 </li>
//               )}
//               {item.logoFormats && item.logoFormats.img_png && (
//                 <li>
//                   <a
//                     href={item.logoFormats.img_png}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     PNG
//                   </a>
//                 </li>
//               )}
//               {item.logoFormats && item.logoFormats.img_svg && (
//                 <li>
//                   <a
//                     href={item.logoFormats.img_svg}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     SVG
//                   </a>
//                 </li>
//               )}
//             </ul>
//           </div>
//           <p className="text-sm text-gray-500">Added Date: {item.added_date}</p>
//           <p className="text-sm text-gray-500">
//             Modified Date: {item.modified_date}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Test;

import React from 'react';
import useFetchLogos from '../hooks/useFetchLogos';

const Test: React.FC = () => {
  const { data, loading, error } = useFetchLogos(
    'https://longtail.info/logo/dynamic/api/v1/getLogo.php/',
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map((item: any, index) => (
        <div key={index} className="m-4 rounded border p-4 shadow">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <img src={item.img_thumb} alt={item.name} className="my-4" />
          <div
            dangerouslySetInnerHTML={{ __html: item.content }}
            className="text-gray-700"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Logo Formats:</h3>
            <ul>
              {item.logoFormats && item.logoFormats.img_jpg && (
                <li>
                  <a
                    href={item.logoFormats.img_jpg}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JPG
                  </a>
                </li>
              )}
              {item.logoFormats && item.logoFormats.img_png && (
                <li>
                  <a
                    href={item.logoFormats.img_png}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PNG
                  </a>
                </li>
              )}
              {item.logoFormats && item.logoFormats.img_svg && (
                <li>
                  <a
                    href={item.logoFormats.img_svg}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SVG
                  </a>
                </li>
              )}
            </ul>
          </div>
          <p className="text-sm text-gray-500">Added Date: {item.added_date}</p>
          <p className="text-sm text-gray-500">
            Modified Date: {item.modified_date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Test;
