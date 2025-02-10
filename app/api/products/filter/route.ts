import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const priceFrom = Number(searchParams.get("priceFrom")) || 0;
    const priceTo = Number(searchParams.get("priceTo")) || 1000;
    const categories =
      searchParams.get("categories")?.split(",").map(Number) || [];
    const sizes = searchParams.get("sizes")?.split(",") || [];

    const products = await prisma.product.findMany({
      where: {
        AND: [
          {
            price: {
              gte: priceFrom,
              lte: priceTo,
            },
          },
          categories.length > 0
            ? {
                categoryId: {
                  in: categories,
                },
              }
            : {},
          sizes.length > 0
            ? {
                size: {
                  in: sizes.map(Number),
                },
              }
            : {},
        ],
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("[PRODUCTS_FILTER_GET]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
