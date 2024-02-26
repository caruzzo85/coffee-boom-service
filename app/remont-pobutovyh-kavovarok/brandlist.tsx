import { headers } from 'next/headers'
import prisma from '../db';
import Image from 'next/image';
import Link from 'next/link';


export type BrandProps = {
  id: number;
  slug: string | null;
  title: string | null;
  text: string | null;
  keywords: string | null;
  description: string | null;
  image: string | null;
}

const brandList = await prisma.repairdevice.findMany({
  skip: 1
});



export default async function BrandList() {

  const referer = headers().get('referer');
  console.log(referer?.substring(referer.lastIndexOf('/') + 1));

  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">

        {brandList.map((brand: BrandProps, id: number) => (
          <li key={id} className="px-4 md:px-6">
            {brand.slug === referer?.substring(referer.lastIndexOf('/') + 1).toString() ?
              <Image src={`/images/brands/${brand.slug}.svg`} alt='' width={100} height={100} />
              :
              <Link href={process.env.NEXT_PUBLIC_HOST + `/remont-pobutovyh-kavovarok/${brand.slug}`}>
                <Image src={`/images/brands/${brand.slug}.svg`} alt='' width={100} height={100} />
              </Link>
            }
          </li>
        ))}

      </ul>
    </div>
  );
}
