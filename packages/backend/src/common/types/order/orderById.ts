import type { Product } from "@prisma/client";

export type OrderById = {
    product: Product,
    buyer: { 
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        phone: string,
    }
}