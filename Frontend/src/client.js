// // import sanityClient from '@sanity/client'
// // import { ImageUrlBuilder } from '@sanity/image-url'

// // export const client = sanityClient({
// //     projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
// //     dataset: 'production',
// //     apiVersion: '2022-02-01',
// //     useCdn: true,
// //     token: process.env.REACT_APP_SANITY_TOKEN,
// // })

// // const builder = ImageUrlBuilder(client);

// // export const urlFor = (source) => builder.image(source);
// const sanityClient = require('@sanity/client');

// const client = sanityClient({
//   dataset: '<dataset name>',
//   token: '<secret token>',

// });
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'nln9jitu',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skMKB8EpvRqPhirzFpl97xpp9RMY4evIZyvtXEupzOgK6ycWtWUu9vFtWKBOOzoT3qp5na1DHAlU9MqiEBMlmDLviL3w55nO7dQFdkS3SlySGo2xFNLxRjsouZTHmlp9aL5Q4PDOaTGdtUV2LLnL9Egurtyk4HFjZtwxi7EcNmhesve7Q87b',
    ignoreBrowserTokenWarning: true
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);




// import sanityClient from '@sanity/client';
// // import imageUrlBuilder from '';
// import ImageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//     projectId: 'tju4fp7p',
//     dataset: 'production',
//     apiVersion: '2022-02-01',
//     useCdn: true,
//     token: 'skhAST0tQzzB4YQAErNvWjFBrVzXqm2StFw0nY3iZs9dHa0hMfZU0MY7d4hfE1zSPGkSs8xXBlOmkVWhbhe3NkFwjsOBOT9iZ3iRDvmriOlqRT0SNV0QR6evy2IqiJSREGYW0zcC3cEyKVI92dwtS9L4gggbZyEKdmxNdZWoGldTCB29CHff',
// });

// const builder = ImageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);

// import React from 'react'
// import myConfiguredSanityClient from './sanityClient'
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(myConfiguredSanityClient)

// function urlFor(source) {
//     return builder.image(source)
// }