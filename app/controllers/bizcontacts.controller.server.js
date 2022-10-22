import bizcontactsModel from "../models/bizcontacts.js";

export function DisplayBizContactsList(req, res, next){
    bizcontactsModel.find(function(err, bizcontactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contacts List', page: 'bizcontacts/list', bizContacts: bizcontactsCollection})
    })
}