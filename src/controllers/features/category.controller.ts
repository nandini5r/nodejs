import Category from "../../models/category.model"

export const createCategory = async (req: any, res: any) => {


    try {

        let { name, parent_id, image } = req.body;
        let categoryData = await Category.create(
            {
                name: name,
                parent_id: parent_id,
                image: image

            }
        )

        return res.send(categoryData)
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}



export const getCategoryDetails = async (req: any, res: any) => {
    try {
         console.log(req.params.id,"idididid")
        let categoryData = await Category.findAll(
            { where: { id: req.params.id } }
        )

        return res.send(categoryData)
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}



export const updateCategory = async (req: any, res: any) => {
    try {
        let categoryData = await Category.update(req.body, { where: { id: req.body.id } })
        return res.send(categoryData)
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' })
    }
}




export const deleteCategory = async (req: any, res: any) => {

    try {
        let category = await Category.destroy({ where: { id: req.body.id } })
        return res.send(category)
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server error' })
    }
}



export const categoryImage = async (req: any, res: any) => {
    const { id } = req.params;
    if (req.file) {
        try {

            const file = req.file.buffer
            let categoryImg = await Category.update({ image: file }, {
                where: {
                    id: id,
                },
            })

            res.send(categoryImg)

        } catch (error) {
            console.error('Error :', error);
            return res.status(500).json({ error: 'Internal server error' });

        }
    }
}






