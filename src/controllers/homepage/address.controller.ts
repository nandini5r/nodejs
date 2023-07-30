import Address from "../../models/address.model";

export const addAddress = async(req:any,res:any)=>{
    console.log("nnnnnnn")
    try{

        const { userId,house_no, street,  landmark, country, city ,zipCode,state,address_type} = req.body;
        let addressInfo  = await Address.create({
            userId: userId,
            house_no:house_no,
            street:street,
            landmark:landmark,
            country:country,
            city:city,
            zipCode:zipCode,
            state:state,
            address_type:address_type
        })
         console.log(addressInfo,"OOOOO")
        return res.send("addressInfo");
    }   catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
    
}

export const updateAddress =async (req:any,res:any) => {

    try{
        if(req.body){
            const address_id = req.body.id
            const updateAddressInfo = await Address.update(
              req.body,{ where: { id: address_id } }

            )

            res.send('Address  Updated')

        }
        else{
            res.send('Invalid Info')
          }
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
}

export const deleteAddress = async(req:any, res:any)=>{
    try{
        const address = await Address.destroy({where:{id:req.body.id}})
        res.send( "Address Deleted successfully")

    } catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
}