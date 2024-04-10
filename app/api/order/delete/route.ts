import { Item } from "@/models/item"
import { dbConnection } from "@/db/mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(
    request: NextRequest
) {
    try {
        const body = await request.json()
        await dbConnection();

        const { id } = body

        if (!id) {
            return new NextResponse("Invalid_Request, Data should have id and status", { status: 400 })
        }

        await Item.findByIdAndUpdate(id, {
            "status": "Deleted",
            updatedAt: new Date()
        })

        console.log("ITEMS_DELETE_SUCCESS")

        return new NextResponse("Oder Delete Success", { status: 200 })

    } catch (error) {
        console.log("ITEMS_PUT_ERROR: ", error)
        return new NextResponse("Internal_Error", { status: 500 })
    }
}