/*
* FILE			    :	index.controller.server.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-22
*/
import { UserDisplayName } from "../routes/utils/index.js";

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req)} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req)} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req)} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req)} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req)} );
};