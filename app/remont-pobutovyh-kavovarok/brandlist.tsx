import { PrismaClient } from '@prisma/client'
import Link from 'next/link';

import { usePathname } from 'next/navigation'


export type BrandProps = {
    id: number;
    slug: string | null;
    title: string | null;
    text: string | null;
    keywords: string | null;
    description: string | null;
    image: string | null;
  }

const prisma = new PrismaClient();
const brandList = await prisma.repairdevice.findMany({
  skip: 1
});

  

  export default async function BrandList() {
    
    return (
        <div>
        <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">

        {brandList.map((brand: BrandProps, id: number) =>  (
        <li key={id}>
            <Link href={`/remont-pobutovyh-kavovarok/${brand.slug}`} className="mr-4 hover:underline md:mr-6 ">
            {brand.title}
        </Link>
        </li>
        ))}

        </ul>
    </div>
    );
}
