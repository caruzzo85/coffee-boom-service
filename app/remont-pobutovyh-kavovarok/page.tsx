import Image from 'next/image'
import BrandList from './brandlist';
import Join from '../components/Joinus';
import prisma from '../db';


const fetchRepair = async () => {
  const repair = await prisma.repairdevice.findFirst()  
  return repair;
}



export default async function ArticlePage() {

  const repair =  await fetchRepair()
  const text = repair?.text


  if (typeof text === 'string' && text.length > 0) {

  return (
      <main className="relative flex flex-col justify-center bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
  
      <div className="px-6 py-10 mx-auto">
      <BrandList/>
  
  <div className="mt-10">
   
  <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
    <div dangerouslySetInnerHTML={{ __html: text}}/>
  </div>
  </div>
  <Join/>
    </div>
  
      </div>
    </main>
  );
  } else {
    return(
      <>Not found</>
    )
  }
}
