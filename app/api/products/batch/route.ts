import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const products = await req.json();

    if (!Array.isArray(products)) {
      return NextResponse.json(
        { error: "Expected an array of products" },
        { status: 400 }
      );
    }

    const createdProducts = await prisma.$transaction(
      products.map((product) =>
        prisma.product.create({
          data: {
            name: product.name,
            price: product.price,
            size: product.size,
            description: product.description,
            imageUrl: product.imageUrl,
            categoryId: product.categoryId,
          },
          include: {
            category: true,
          },
        })
      )
    );

    return NextResponse.json(createdProducts);
  } catch (error) {
    console.error("[PRODUCTS_BATCH_POST]", error);
    return NextResponse.json(
      { error: "Failed to create products" },
      { status: 500 }
    );
  }
}
