import { Op } from "sequelize";
import Pin from "../../models/pin.model";
import Saved from "../../models/saved.model";
import { client } from "../../database/redis"
import Category from "../../models/category.model";


export const createPin = async (req: any, res: any) => {


    try {

        let { user_id, category_id, image, description, title, like_count, comment_count } = req.body;
        let pinData = await Pin.create(
            {
                title: title,
                category_id: category_id,
                image: image,
                user_id: user_id,
                description: description,
                like_count: like_count,
                comment_count: comment_count
            }
        )


        return res.send(pinData)
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

export const updatePin = async (req: any, res: any) => {
    try {
        let pinData = await Pin.update(req.body, { where: { id: req.body.id } })
        return res.send(pinData)

    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

export const pinImage = async (req: any, res: any) => {
    const { id } = req.params;
    if (req.file) {
        try {

            const file = req.file.buffer
            let pinImage = await Pin.update({ image: file }, {
                where: {
                    id: id,
                },
            })

            res.send(pinImage)

        } catch (error) {
            console.error('Error :', error);
            return res.status(500).json({ error: 'Internal server error' });

        }
    }
}


export const like_count = async (req: any, res: any) => {
    const pin_id = req.params.id;

    try {
        const likes: any = await Pin.findOne({ where: { id: pin_id } });

        res.send(likes)
        console.log(likes, "LIKE COUNT");

        const comment = await Pin.update(
            { like_count: likes.like_count + 1 },
            {
                where: {
                    id: pin_id
                }
            }
        )

    }

    catch (err) {
        console.error('Error incrementing like:', err);
        return res.status(500).json({ error: 'Internal server error' });


    }

}

export const comment_count = async (req: any, res: any) => {
    const pin_id = req.params.id;

    try {
        const comments: any = await Pin.findOne({ where: { id: pin_id } });

        res.send(comments)
        console.log(comments, "COMMENT COUNT");

        const comment = await Pin.update(
            { comment_count: comments.comment_count + 1 },
            {
                where: {
                    id: pin_id
                }
            }
        )

    }

    catch (err) {
        console.error('Error incrementing comment:', err);
        return res.status(500).json({ error: 'Internal server error' });


    }

}

export const save_pin = async (req: any, res: any) => {
    try {

        const { user_id, pin_id } = req.body
        const saved = await Saved.create({
            user_id: user_id,
            pin_id: pin_id

        })
        res.send(saved)
    }

    catch (error) {
        console.error('Error saving pin', error);
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const searchFilter = async (req: any, res: any) => {
    try {
        const searchContent = req.body.title || req.body.description;
        const limit = req.query.limit;
        const page = req.query.page
        const offset = (page - 1) * limit;
        const search = await Pin.findAll({
            limit,offset,
            where: {
                [Op.or]:
                    [
                        {
                            title: {
                                [Op.iLike]: `%${searchContent}%`
                            }
                        },
                        {
                            description: {
                                [Op.iLike]: `%${searchContent}%`
                            }
                        }
                    ],

            },

            include: [
                {
                    model: Category,
                    where: {
                        name: {
                            [Op.iLike]: `%${searchContent}%`,
                        },
                    },
                },
            ],
        })

        console.log(search, "<<<<<<<<<<<<<")
        res.send(search)

    }

    catch (error) {
        console.error('Error fetching pins:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



export const setRecentPins = async (req: any, res: any) => {
    try {
        const recentPins = await Pin.findAll({
            order: [
                ['updatedAt', 'DESC']
            ],
            limit: 3
        })

        console.log(recentPins);



        const pinIds = recentPins.map(pin => pin.id);
        console.log(pinIds, 'llllllllllllllllllllllllllllllllll')
        const pinIdValue = JSON.stringify(pinIds);

        let setRecentPins = await client.set('recentPin', pinIdValue)

        res.json(recentPins)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' })
    }
}


export const getAllRecentPins = async (req: any, res: any) => {
    try {
        const recentPins: any = await client.get('recentPin');
        console.log(JSON.parse(recentPins), ">>>>>")
        const pins = JSON.parse(recentPins)

        for (let i = 0; i < pins.length; i++) {

            const recentPinData = await Pin.findAll({
                where: {
                    id: pins[i]
                }
            })
            console.log(recentPinData)
        }



    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal server error' });
    }
}


export const pinPicture = async (req: any, res: any) => {
    try {

        const pinPicture = await Pin.update({ pinned: true }, { where: { id: req.body.id } })

        return res.json({ message: 'Picture pinned successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const pinOnTop = async (req: any, res: any) => {
    try {
        const feed = await Pin.findAll({
            where: {
                pinned: true
            }
        })
        return res.json(feed);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

