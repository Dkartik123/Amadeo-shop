import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
const prisma = new PrismaClient();

async function up() {
  // Создаем пользователей
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  // Создаем категории
  await prisma.category.createMany({
    data: [{ name: "Пицца" }, { name: "Напитки" }, { name: "Десерты" }],
  });

  // Создаем продукты
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Пепперони",
        price: 599,
        size: 30,
        description: "Классическая пицца пепперони с томатным соусом",
        imageUrl: "https://example.com/pepperoni.jpg",
        categoryId: 1,
      },
      {
        name: "Кола",
        price: 99,
        size: 500,
        description: "Coca-Cola 0.5л",
        imageUrl: "https://example.com/cola.jpg",
        categoryId: 2,
      },
      {
        name: "Чизкейк",
        price: 299,
        size: 150,
        description: "Нью-Йорк чизкейк",
        imageUrl: "https://example.com/cheesecake.jpg",
        categoryId: 3,
      },
    ],
  });

  // Создаем корзину для тестового пользователя
  const cart = await prisma.cart.create({
    data: {
      userId: 1,
      token: "test-cart-token",
      totalPrice: 0,
      totalQuantity: 0,
    },
  });

  // Добавляем товар в корзину
  await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId: 1,
      quantity: 2,
    },
  });

  // Создаем тестовый заказ
  await prisma.order.create({
    data: {
      userId: 1,
      totalPrice: 1198,
      totalQuantity: 2,
      status: "PENDING",
      token: "test-order-token",
      fullName: "User Test",
      email: "user@test.ru",
      phone: "+7999999999",
      shippingAddress: "Test Street 123",
      shippingCity: "Test City",
      shippingPostalCode: "123456",
      shippingCountry: "Russia",
      items: {
        create: [
          {
            productId: 1,
            quantity: 2,
            price: 599,
          },
        ],
      },
    },
  });
}

async function down() {
  // Удаляем все данные из таблиц в правильном порядке
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE "OrderItem" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`,
  ]);
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
