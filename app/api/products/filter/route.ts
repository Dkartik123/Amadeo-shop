import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const priceFrom = Number(searchParams.get("priceFrom")) || 0;
    const priceTo = Number(searchParams.get("priceTo")) || 1000;
    const categories = searchParams.get("categories")?.split(",").map(Number);

    const products = await prisma.product.findMany({
      where: {
        AND: [
          {
            price: {
              gte: priceFrom,
              lte: priceTo,
            },
          },
          categories?.length
            ? {
                categoryId: {
                  in: categories,
                },
              }
            : {},
        ],
      },
      include: {
        category: true,
      },
    });

    console.log("Filtered products query:", {
      priceFrom,
      priceTo,
      categories,
      productsCount: products.length,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("[PRODUCTS_FILTER]", error);
    return NextResponse.json(
      { error: "Failed to filter products" },
      { status: 500 }
    );
  }
}
