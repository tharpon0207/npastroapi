'use strict';
const Announcements = require('../model/announcements');
const { Sequelize } = require('sequelize');
const sequelize = require('../util/database');
let Op = Sequelize.Op;

module.exports = { addAnnouncement, editAnnouncement, deleteAnnouncement, getAnnouncements, getOneAnnouncement }

async function addAnnouncement(req, res, next) {
  let announcement = req.body;
  try {
      const newAnnouncement = await Announcements.create({
        title: announcement.title,
        description: announcement.description,
    });

    console.log('New announcement added:', newAnnouncement.toJSON());

    res.json({
      error: false,
      message: 'Announcement successfully created',
      announcement: newAnnouncement 
    });
  } catch (error) {
    console.error('Error adding announcement:', error);
    res.status(500).json({ error: true, message: 'Error adding announcement', details: error.message });
  }
}

async function editAnnouncement(req, res, next){
  const announcement = req.body;
  const updatedFields = {};
  try {

    if (announcement.title) {updatedFields.title = announcement.title};
    if (announcement.description) {updatedFields.description = announcement.description};

    if (Object.keys(updatedFields).length > 0) {
        console.log(updatedFields);
        await Announcements.update(updatedFields, {
            where: {
                id: announcement.id,
            },
        });
        res.json({
            error: false,
            message: 'Announcement successfully edited',
            changes: Object.keys(updatedFields),
        });

        console.log('Announcement successfully edited');
    } else {
        res.status(400).json({
            error: true,
            message: 'No fields provided for update',
        });
    }
} catch (error) {
    console.error('Error editing announcement: ', error);
    res.status(500).json({
        error: true,
        message: 'Error editing announcement',
        details: error.message,
    });
    console.log(error.message);
}
}

async function deleteAnnouncement(req, res, next) {
  let id = req.swagger.params.id.value;
  try{
      await Announcements.destroy({
          where: {
              id: id
          },
      }); 

      res.json({
          error: false,
          message: "Announcement successfully deleted",
          announcement: {id: id}
          }
      )
  }catch(error){
      console.error('Error deleting announcement: ', error);
      res.status(500).json({
          error: true,
          message: 'Error deleting announcement',
          details: error.message,
      });
  }
}

async function getAnnouncements(req, res, next){
    try{
        const data = await Announcements.findAll({
            attributes: [
                'id', 
                'title', 
                'description',
                [Sequelize.col('createdAt'), 'createdAt'], 
                [Sequelize.fn('MONTHNAME', Sequelize.col('createdAt')), 'month'], 
                [Sequelize.fn('DAY', Sequelize.col('createdAt')), 'day'], 
                [Sequelize.fn('YEAR', Sequelize.col('createdAt')), 'year'] 
            ],
            order: [
                ['createdAt', 'DESC']
            ]});
        res.json(data);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function getOneAnnouncement(req, res, next){
    const id = req.swagger.params.id.value;
    try{
        const data = await Announcements.findOne({
            attributes: [
                'title', 
                'description'
            ],
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                id: {
                  [Op.eq]: id
                },
              }
        });
        res.json(data);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}



