import mongoose, { Schema } from 'mongoose'

const itemSchema = new Schema(
    {
        customerName: {
            type: String,
            required: true
        },
        products: [
            {
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        total: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        },
        updatedAt: {
            type: Date,
            required: true
        }

    },
    {
        timestamps: true
    }
)

export const Item = mongoose.model('Item', itemSchema)