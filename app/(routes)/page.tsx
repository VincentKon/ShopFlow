import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("9a374a37-d037-41eb-a0d2-72291dc90c33");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}></Billboard>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}></ProductList>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
