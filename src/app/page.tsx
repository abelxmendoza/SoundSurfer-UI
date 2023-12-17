// pages/page.tsx

import React from 'react';
import Image from 'next/image';
import  { SongInput } from '../components/song-input';


const Page: React.FC = () => {
  return (
    <div>
      {/* You can add other content or components here */}
      <SongInput />
    </div>
  );
};

export default Page;
