import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'


export default function Home() {
  return <>
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
        <ProductsGroupList title="Kooliriided"
        categoryId={1}
         items={[{
          id: 2,
          name: 'Новое платье',
          imageUrl: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67018649_07.jpg?imwidth=2048&imdensity=1&ts=1712047355742.jpg',
          items: [{ price: 20 }],
          description: [{ name: 'Новейшее платье в коллекции' }, { name: 'Современный дизайн' }]
        }, {
          id: 3,
          name: 'Классические брюки',
          imageUrl: 'https://media.wired.com/photos/611c5312798f0e2c853b702f/1:1/w_993,h_993,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg',
          items: [{ price: 30 }],
          description: [{ name: 'Классический стиль' }, { name: 'Высокое качество' }]
        }, {
          id: 4,
          name: 'Летняя куртка',
          imageUrl: 'https://www.mangooutlet.com/assets/rcs/pics/static/T5/fotos/S/57014388_99.jpg?imwidth=2048&imdensity=1&ts=1686049418473',
          items: [{ price: 40 }],
          description: [{ name: 'Легкая и удобная' }, { name: 'Идеальна для лета' }]
        }, {
          id: 5,
          name: 'Зимняя шапка',
          imageUrl: 'https://www.duckworthco.com/cdn/shop/files/duckworth-merino-wool-clothing-usa-made-clothing-merino-wool-knit-cable-hat-shale.jpg?v=1729004348&width=1500',
          items: [{ price: 50 }],
          description: [{ name: 'Теплая и мягкая' }, { name: 'Защитит от холода' }]
        }, {
          id: 6,
          name: 'Кожаная сумка',
          imageUrl: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
          items: [{ price: 60 }],
          description: [{ name: 'Качественная кожа' }, { name: 'Многофункциональная' }]
        }]}  />
        <ProductsGroupList title="Beebiriided"
        categoryId={2}
         items={[{
          id: 2,
          name: 'Новое платье',
          imageUrl: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67018649_07.jpg?imwidth=2048&imdensity=1&ts=1712047355742.jpg',
          items: [{ price: 20 }],
          description: [{ name: 'Новейшее платье в коллекции' }, { name: 'Современный дизайн' }]
        }, {
          id: 7,
          name: 'Весенняя блуза',
          imageUrl: 'https://www.mangooutlet.com/assets/rcs/pics/static/T5/fotos/S/57014388_99.jpg?imwidth=2048&imdensity=1&ts=1686049418473',
          items: [{ price: 45 }],
          description: [{ name: 'Легкая и удобная' }, { name: 'Идеальна для весны' }]
        }, {
          id: 8,
          name: 'Осенняя куртка',
          imageUrl: 'https://www.duckworthco.com/cdn/shop/files/duckworth-merino-wool-clothing-usa-made-clothing-merino-wool-knit-cable-hat-shale.jpg?v=1729004348&width=1500',
          items: [{ price: 55 }],
          description: [{ name: 'Теплая и мягкая' }, { name: 'Защитит от холода' }]
        }, {
          id: 9,
          name: 'Зимняя шапка с помпоном',
          imageUrl: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
          items: [{ price: 65 }],
          description: [{ name: 'Теплая и мягкая' }, { name: 'Стильная и модная' }]
        }, {
          id: 10,
          name: 'Летняя сумка',
          imageUrl: 'https://www.mangooutlet.com/assets/rcs/pics/static/T5/fotos/S/57014388_99.jpg?imwidth=2048&imdensity=1&ts=1686049418473',
          items: [{ price: 70 }],
          description: [{ name: 'Легкая и удобная' }, { name: 'Идеальна для лета' }]
        }, {
          id: 11,
          name: 'Весенние ботинки',
          imageUrl: 'https://www.duckworthco.com/cdn/shop/files/duckworth-merino-wool-clothing-usa-made-clothing-merino-wool-knit-cable-hat-shale.jpg?v=1729004348&width=1500',
          items: [{ price: 75 }],
          description: [{ name: 'Теплые и мягкие' }, { name: 'Защитят от холода' }]
        }, {
          id: 12,
          name: 'Зимняя куртка с капюшоном',
          imageUrl: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
          items: [{ price: 80 }],
          description: [{ name: 'Теплая и мягкая' }, { name: 'Стильная и модная' }]
        }]} />
        </div>
        
      </div>
    </div>
  </Container>
  </>
    

}