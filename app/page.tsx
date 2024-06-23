import Image from "next/image";
import {
  AboutSectionImage,
  FeaturesSectionImageOne,
  FeaturesSectionImageTwo,
  FeaturesSectionImageThree,
  DownloadSectionImage
} from '../public/images'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
            <Image
              src={FeaturesSectionImageOne}
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />



     
    </main>
  );
}
