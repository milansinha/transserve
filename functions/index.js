// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// import * as cors from 'cors';

const admin = require('firebase-admin');
const functions = require('firebase-functions');
// const corsHandler = cors({origin: ['http://localhost:4200','https://pro-in-your-pocket.web.app']});

admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((req, res) => {
//         res.send("Hello from Firebase!");
//   });

exports.employeeLog = functions.https.onRequest((req, res) => {
    // corsHandler(req, res, () => {
        const usersRef = admin.firestore().collection("employelog").doc();
        console.log(req.body);
        if (req.method !== 'POST') {
            return res.status(500).json({
                message: 'Not allowed'
            })
        } else {
            return usersRef.set(
                // alanisawesome: {
                    // date:'16/09/2020',
                    // timelog:'16',
                    // project:'1',
                    // employee:'3'
                    req.body
                // },
            ).then(() => {
                return res.status(200).send('success');
                // res.status(200).json({
                //     return 'success';
                // });
            }).catch(error => {
                return res.status(500).send(error);
            })
        }

    // })

});

exports.project = functions.https.onRequest((req, res) => {
    const usersRef = admin.firestore().collection("project");
    if(req.method !== 'GET') {
        return res.status(500).json({
            message: 'Not allowed'
        })
    } else {
        return usersRef.get().then((result) => {
        // return usersRef.get().then((response) => {
            // let data = result.data();
            return res.status(200).json(result.docs.map(doc => doc.data()));
        }).catch(error => {
            return res.status(500).send(error);
        })
    }
});

exports.employee = functions.https.onRequest((req, res) => {
    const usersRef = admin.firestore().collection("employee");
    if(req.method !== 'GET') {
        return res.status(500).json({
            message: 'Not allowed'
        })
    } else {
        return usersRef.get().then((result) => {
        // return usersRef.get().then((response) => {
            // let data = result.data();
            return res.status(200).json(result.docs.map(doc => doc.data()));
        }).catch(error => {
            return res.status(500).send(error);
        })
    }
});