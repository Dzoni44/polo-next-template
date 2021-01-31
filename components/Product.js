import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./sectionTitle";
import data from "../data/products.json";

const Product = () => {
  const latest = data.filter((item) => item.id < 4);

  return (
    <>
      <div className="container">
        <SectionTitle title="Most Popular" />

        <div className="grid grid-cols-12 justify-items-center sm:gap-8 gap-y-8 mb-12">
          {data.map((item) => {
            return <SingleProduct key={item.id} dataProps={item} />;
          })}
        </div>

        <SectionTitle title="Latest" />

        <div className="grid grid-cols-12 justify-items-center sm:gap-8 gap-y-8 mb-12">
          {latest.map((item) => {
            return <SingleProduct key={item.id} dataProps={item} />;
          })}
        </div>
      </div>
    </>
  );
};

const SingleProduct = ({ dataProps }) => {
  const { title, slug, description, price, image } = dataProps;

  return (
    <div className="md:col-span-4 sm:col-span-6 col-span-12 md:max-w-none max-w-sm shadow-xl hover:shadow-2xl transition duration-300">
      <Link href={`/products/${slug}`}>
        <a>
          <Image
            src={image}
            layout="responsive"
            width={300}
            height={380}
            alt="product"
            className="transform md:hover:scale-110 transition duration-300"
          />
        </a>
      </Link>

      <div className="px-5 py-3">
        <h3>
          <Link href={`/products/${slug}`}>
            <a className="block text-xl mb-2">{title}</a>
          </Link>
        </h3>

        <p className="leading-5 mb-2 leading-5 mb-2 text-gray-500">
          {description}
        </p>

        <p className="text-xl mb-2">$ {price}</p>

        <button className="w-full mb-2 border border-gray-400 hover:border-gray-800 focus:outline-none rounded py-1">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
