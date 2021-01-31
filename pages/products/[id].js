import Image from "next/image";
import Layout from "../../components/Layout";
import data from "../../data/products.json";

const ProductTemplate = ({ content }) => {
  const [{ title, description, price, image }] = content;

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12 md:gap-x-10 gap-y-6 my-12">
          <div className="md:col-span-6 col-span-12">
            <div>
              <Image
                src={image}
                layout="responsive"
                width={300}
                height={380}
                alt="product"
              />
            </div>
          </div>

          <div className="md:col-span-6 col-span-12">
            <h1 className="text-2xl mb-4">{title}</h1>

            <p className="text-lg text-gray-500 leading-5 mb-4">
              {description}
            </p>
            <p className="text-3xl mb-4">{price}</p>

            <button className="w-full mb-2 border border-gray-400 hover:border-gray-800 focus:outline-none rounded py-1">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// get all product slugs
export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { id: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const content = data.filter((item) => {
    return item.slug === id;
  });

  return {
    props: {
      content,
    },
  };
}

export default ProductTemplate;
