import Image from "../../models/images.model";
import Product from "../../models/product.model";
import fs from "fs"
export const addProduct = async (req: any, res: any) => {

    try {

        const { userId, productName, description, base_price, categoryId, addressId, latest_bid, bidderId, title } = req.body;


        let productInfo = await Product.create({
            userId: userId,
            productName: productName,
            description: description,
            base_price: base_price,
            categoryId: categoryId,
            addressId: addressId,
            latest_bid: latest_bid,
            bidderId: bidderId,
            title: title
        })

        return res.send(productInfo);
    } catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }

}

export const getProductDetails = async (req: any, res: any) => {
    try {

        let productInfo = await Product.findAll(
            { where: { id: req.body.id } }
        )

        return res.send("result")
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}

export const updateProductDetails = async (req: any, res: any) => {
    try {
        if (req.body) {
            const product_id = req.body.id
            const updateProductInfo = await Product.update(
                req.body, { where: { id: product_id } }
            );
            res.send('Product Details Updated')
        }
        else {
            res.send('Invalid Info')
        }
    }

    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}


export const deleteProduct = async (req: any, res: any) => {
    try {
        const product = await Product.destroy({ where: { id: req.body.productId } })
        res.send("Product Deleted successfully")

    } catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}


export const ProductImage = async(req:any, res:any)=>{

    const {id} = req.params;

    if(req.file){
        try{
            const filePath = fs.readFileSync(req.file.path);
            
            let productImage = await Image.create({
                image:filePath,
                product_id: id,
            })

            res.send(productImage)
               
        }catch (error) {
            console.error('Error :', error);
            return res.status(500).json({ error: 'Internal server error' });
    
        }
    }
}
export const PlaceBid = async (req: any, res: any) => {
    try {

        const { latest_bid, productId, userId } = req.body;

        await Product.increment(
            'base_price',
            {
                by: latest_bid,
                where: { product_id: productId }
            }
        )
        await Product.update(
            {
                bidderId: userId
            },
            {
                where: { product_id: productId }
            }
        )

        res.status(200).send("bid successfull")

    } catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}