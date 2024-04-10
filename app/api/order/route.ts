import { Item } from "@/models/item"
import { dbConnection } from "@/db/mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function POST(
    request: NextRequest
) {
    try {
        const body = await request.json()
        await dbConnection();

        console.log(body)

        const { customerName, products } = body


        if (!customerName) {
            return new NextResponse("Invalid_Request, Data should have customer name", { status: 400 })
        }

        if (!Array.isArray(products)) {
            return new NextResponse("Invalid_Request, Data should be an array", { status: 400 })
        }

        let total = 0

        for (const product of products) {
            if (!product.name || !product.price || !product.quantity) {
                return new NextResponse("Invalid_Request, Data should have product name, quantity and price", { status: 400 })
            }

            total += product.price * product.quantity
        }

        await Item.create({
            customerName,
            products,
            total,
            status: "pending",
            createdAt: new Date(),
            updatedAt: new Date()
        })

        console.log("ITEMS_POST_SUCCESS")

        return new NextResponse("Order created successfully", { status: 201 })

    } catch (error) {
        console.log("ITEMS_POST_ERROR: ", error)
        return new NextResponse("Internal_Error", { status: 500 })
    }
}