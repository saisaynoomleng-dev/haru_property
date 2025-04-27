import localFont from 'next/font/local';

export const objectivity = localFont({
  src: [
    {
      path: '../app/fonts/Objectivity-Thin.otf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../app/fonts/Objectivity-Light.otf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/Objectivity-Regular.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/Objectivity-Medium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/Objectivity-Bold.otf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/Objectivity-ExtraBold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/Objectivity-Super.otf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-objectivity',
});
