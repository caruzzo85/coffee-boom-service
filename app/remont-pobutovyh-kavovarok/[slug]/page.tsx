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
 