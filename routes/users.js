var express = require('express');
var router = express.Router();

var userModel = require('../models/user.model');

    /* GET users listing. */
    router.get('/', function(req, res, next) {
      res.send('User Route Home');
    });


    //Add User API Call
    router.post('/add',(req,res)=>{
        newUser = new userModel(req.body)
        newUser.save((error,result)=>{
        if (error) {
          res.send({status:false, mesg:'Something Wrong happen',errorCode: 101})
        } else {
          res.send({status:true, mesg:'New User Added to Database',UserDetails: result})
        }
      });
    });

  
    //Get All user API Call
    router.get('/getAll',(req,res)=>{
      userModel.find((error,result)=>{
        if (error) {
          res.send(error);
        } else {
          res.send(result);
        }
      });
    });


    //update details
    router.put('/update', (req,res) => {
      
      //findOneAndUpdate(condition,update,options,callback)
      userModel.findOneAndUpdate(
        {
          //condition to match 
          code: req.body.code
        },
        {
          //update details using set
          $set : {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            isActive: req.body.isActive
          }
        }, 
        { 
          //options
          new: true,  //return updated details in result
          upsert: true //if no match found it will insert new with provided details
        }, 
        (err, result) => {
          if (err) {
            res.sendStatus(404).send(err);
          } else {
            res.sendStatus(200).send(result);
          }
        });
    });


    
      //set isActive true
      router.put('/setActiveTrue',(req,res)=>{
        userModel.updateOne(
           { code : req.query.code },
          {
            $set:{
              isActive: true
            },
          },
          (err, result) => {
            if (result == 1)
              res.send(err)
            else if (result.nModified == 0)
              res.send({status:false, msg: 'Not Modified or Already Exist.'})
            else
              res.send({status:true, mesg:'User Details Updated.',userDetails: result});
          });
      });

      //set isActive false
      router.put('/setActiveFalse',(req,res)=>{
        userModel.updateOne(
           { code : req.query.code },
          {
            $set:{
              isActive: false
            },
          },
          (err, result) => {
            if (result == 1)
              res.send(err)
            else if (result.nModified == 0)
              res.send({status:false, msg: 'Not Modified or Already Exist.'})
            else
              res.send({status:true, mesg:'User Details Updated.',userDetails: result});
          });
      });

      //Get List of Active Users
      router.get('/getActiveUsers', (req,res) => {
        userModel.find({ isActive : true }, { code : 1,  first_name : 1, last_name: 1, _id:0 } , (err, result ) => {
          if (err) {
            res.sendStatus(404).send(err.message);
          } else {
            res.sendStatus(200).send(result);
          }
        });
      });

      //Get Active User Count
      	router.get('/activeUserCount',(req,res) => {
          userModel.countDocuments({ isActive: true },(err,count) => {
              if (err) {
                res.send({status: false, count: err});
              } else {
                res.send({status: true, count: count});
              }
          });
        });

        //Get Active User Count
      	router.get('/inActiveUserCount',(req,res) => {
          userModel.countDocuments({ isActive: false },(err,count) => {
              if (err) {
                res.send({status: false, count: err});
              } else {
                res.send({status: true, count: count});
              }
          });
        });


      //Get List of In Active Users
      router.get('/getInActiveUsers', (req,res) => {
        userModel.find({ isActive : false }, { code : 1,  first_name : 1, last_name: 1, _id:0 } , (err, result ) => {
          if (err) {
            res.sendStatus(404).send(err.message);
          } else {
            res.sendStatus(200).send(result);
          }
        });
      });

      //Explicit Query Name Contains Example
      router.get('/contains', (req,res) => {
        
        var query =userModel.find({ first_name: new RegExp(req.query.term,'i')});
        
        query.exec((err, result) => {
          if (err) {
            res.status(404).send({status: false, result: null})
          } else {
            res.status(200).send(result)
          }
        });
      });

module.exports = router;
