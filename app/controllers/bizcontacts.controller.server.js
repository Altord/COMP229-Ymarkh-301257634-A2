import bizcontactsModel from "../models/bizcontacts.js";

export function DisplayBizContactsList(req, res, next){
    bizcontactsModel.find(function(err, bizcontactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contacts List', page: 'bizcontacts/list', bizcontacts: bizcontactsCollection})
    })
}

///

///

export function DisplayBizContactsEditPage(req, res, next){
    let id = req.params.id;

    bizcontactsModel.findById(id, (err, bizcontact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Edit Business Contact', page: 'bizcontacts/edit', bizcontacts: bizcontact });
    });    
}

export function ProcessBizContactsEditPage(req, res, next){

    let id = req.params.id;

    let newContact = bizcontactsModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress,
    });

    //REFUSE TO UPDATE I HAVE NO CLUE WHY
    bizcontactsModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/bizcontacts-list')
    } )
}


export function ProcessBizContactsDelete(req, res, next){
    let id = req.params.id;

    bizcontactsModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/bizcontacts-list');
    })
}

