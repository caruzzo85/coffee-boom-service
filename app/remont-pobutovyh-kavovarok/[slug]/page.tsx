import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import BrandList from '../brandlist';
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

interface RepairProps {
  params: {
    slug: string;
  }
}

const prisma = new PrismaClient();

const fetchRepair = async (slugText: string) => {
  const repair = await prisma.repairDevice.findUnique({
    where: {
      slug: slugText
    }
  })

  return repair;
}

export default async function RepairPage({params}: RepairProps) {

  const repair =  await fetchRepair(params.slug)
  const text = repair?.text


  if (typeof text === 'string' && text.length > 0) {

  return (
<>

      <main className="relative flex flex-col justify-center bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
  
      <div className="px-6 py-10 mx-auto">
      <BrandList/>
  
  <div className="mt-10">
  
  <div className="h-80 mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative">
  <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
  <Image 
          src={repair?.image! || 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover" 
          alt={""} 
          width={1000}
          height={1000}
       />
  <div className="p-4 absolute bottom-0 left-0 z-20">
    
    <h2 className="text-4xl font-semibold text-gray-100 leading-tight bg-white">
      {repair?.title}
    </h2>
    <div className="flex mt-3">
      <div>
        <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
      </div>
    </div>
  </div>
  </div>
  
  <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
    <div dangerouslySetInnerHTML={{ __html: text}}/>
  </div>
  </div>
  
    </div>
  
      </div>
    </main>
  
  </>
  );
  } else {
    return(notFound() )
  }
}


 
export async function generateMetadata(
  {params}: RepairProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const repair =  await fetchRepair(params.slug)
  
 
 
  return {
    title: repair?.title,
    description: repair?.description,
    keywords: repair?. keywords
  }
}
 