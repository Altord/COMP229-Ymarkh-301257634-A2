/*
* FILE			    :	bizcontacts.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-22
*/
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BizContactsSchema = new Schema ({
    contactName: String,
    contactNumber: String,
    emailAddress: String,
}, {
    timestamps: true,
    collection: 'bizcontacts'
})

export default mongoose.model('BizContacts', BizContactsSchema);