// const awsS3BucketName = 'edance-dev';
const awsS3BucketName = 'edance';

const awsRegion = 'us-east-2';

export const sensitive = {
  serverUrl: 'http://192.168.0.90:3000',
  // serverUrl: 'http://ec2-18-191-205-69.us-east-2.compute.amazonaws.com:3000',

  // aws
  awsAccessKeyId: 'AKIATPGUHHNLE7E36TJO',
  awsSecretAccessKey: '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',
  awsRegion: awsRegion,
  awsS3BucketName: awsS3BucketName,

  // paypal
  clientId: 'AZwXHopJFW1MZPeTAZTyLJEfQI7JWN0HEtOlhlH0MVgkRTSQFLRSUugXQNfiKfPgD4Jt8Qclxb7wBGF2',

  // wowza
  wowza: {
    //
    // live
    //
    hostAddress: 'ec2-18-220-249-230.us-east-2.compute.amazonaws.com',
    applicationName: 'live',
    username: 'dance-lesson',
    password: 'Paranga1972',
    adminUsername: 'wowza',
    adminPassword: 'i-0c68fd880a7ad08b6',
  },

  // lesson
  lessonPrefix: `https://${awsS3BucketName}.s3.${awsRegion}.amazonaws.com/lessons`,

  // stripe
  stripeKey: 'pk_test_51HSppZF6ElS15z3P2cni8CvpLLOFcaVLFlpZYtQDuyNunCf8sgPmhWNJSwFlyGQ5E9jUVK3OgjuICN7g4qVeUFXI00jLtfkClC',
  stripeSecretKey: 'sk_test_51HSppZF6ElS15z3Pe97cKve6ws4BMbr80mEuarFni1akx97LpLUcDE2mgVCafV49zTsQkcRICLS5F0mR3QwKt4ku00RJA2D9P1',
  stripeReturnUrl: 'https://edancesport.com',
  stripeRefreshUrl: 'https://edancesport.com/refresh',
  stripeClientId: 'ca_I3mTeqJN7tGbMWcMfRS9M9jDf1QjHqOd',
};
