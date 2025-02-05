import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Riided" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Kooliriided"
                categoryId={1}
                items={[
                  {
                    id: 2,
                    name: "New dress",
                    imageUrl:
                      "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67018649_07.jpg?imwidth=2048&imdensity=1&ts=1712047355742.jpg",
                    items: [{ price: 20 }],
                    description: "Newest dress in the collection",
                  },
                  {
                    id: 3,
                    name: "Classic trousers",
                    imageUrl:
                      "https://media.wired.com/photos/611c5312798f0e2c853b702f/1:1/w_993,h_993,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg",
                    items: [{ price: 30 }],
                    description: "Classic style",
                  },
                  {
                    id: 4,
                    name: "Summer jacket",
                    imageUrl:
                      "https://www.mangooutlet.com/assets/rcs/pics/static/T5/fotos/S/57014388_99.jpg?imwidth=2048&imdensity=1&ts=1686049418473",
                    items: [{ price: 40 }],
                    description: "Light and comfortable",
                  },
                  {
                    id: 5,
                    name: "Winter hat",
                    imageUrl:
                      "https://www.duckworthco.com/cdn/shop/files/duckworth-merino-wool-clothing-usa-made-clothing-merino-wool-knit-cable-hat-shale.jpg?v=1729004348&width=1500",
                    items: [{ price: 50 }],
                    description: "Warm and soft",
                  },
                  {
                    id: 6,
                    name: "Leather bag",
                    imageUrl:
                      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
                    items: [{ price: 60 }],
                    description: "High quality leather",
                  },
                ]}
              />
              <ProductsGroupList
                title="Baby clothes"
                categoryId={2}
                items={[
                  {
                    id: 2,
                    name: "New dress",
                    imageUrl:
                      "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67018649_07.jpg?imwidth=2048&imdensity=1&ts=1712047355742.jpg",
                    items: [{ price: 20 }],
                    description: "Newest dress in the collection",
                  },
                  {
                    id: 7,
                    name: "Spring blouse",
                    imageUrl:
                      "https://www.mangooutlet.com/assets/rcs/pics/static/T5/fotos/S/57014388_99.jpg?imwidth=2048&imdensity=1&ts=1686049418473",
                    items: [{ price: 45 }],
                    description: "Light and comfortable",
                  },
                  {
                    id: 8,
                    name: "Autumn jacket",
                    imageUrl:
                      "https://www.duckworthco.com/cdn/shop/files/duckworth-merino-wool-clothing-usa-made-clothing-merino-wool-knit-cable-hat-shale.jpg?v=1729004348&width=1500",
                    items: [{ price: 55 }],
                    description: "Warm and soft",
                  },
                  {
                    id: 9,
                    name: "Winter hat with pompom",
                    imageUrl:
                      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
                    items: [{ price: 65 }],
                    description: "Warm and soft",
                  },
                  {
                    id: 10,
                    name: "Summer bag",
                    imageUrl:
                      "https://www.mangooutlet.com/assets/rcs/pics/static/T5/fotos/S/57014388_99.jpg?imwidth=2048&imdensity=1&ts=1686049418473",
                    items: [{ price: 70 }],
                    description: "Light and comfortable",
                  },
                  {
                    id: 11,
                    name: "Spring boots",
                    imageUrl:
                      "https://www.duckworthco.com/cdn/shop/files/duckworth-merino-wool-clothing-usa-made-clothing-merino-wool-knit-cable-hat-shale.jpg?v=1729004348&width=1500",
                    items: [{ price: 75 }],
                    description: "Warm and soft",
                  },
                  {
                    id: 12,
                    name: "Winter jacket with hood",
                    imageUrl:
                      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
                    items: [{ price: 80 }],
                    description: "Warm and soft",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
