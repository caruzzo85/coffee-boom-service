import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center">
    <Link href={"https://coffee-boom.com.ua"} target="_blank">
    <Image src="/images/banner-shop.webp" alt="shop" width={1000} height={1000} />
    </Link>
    </div>
    </>    
  )
}

export default Shop