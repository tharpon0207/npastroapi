'use strict';
const Events = require('../model/events');
const { Sequelize } = require('sequelize');
const sequelize = require('../util/database');
let Op = Sequelize.Op;

module.exports = { addEvent, editEvent, deleteEvent, getEvents, getOneEvent }

async function addEvent(req, res, next) {
  let event = req.body;
  try {
      const newEvent = await Events.create({
        title: event.title,
        description: event.description,
        Month: event.Month,
        Day: event.Day,
        start: event.start,
        end: event.end
    });

    console.log('New event added:', newEvent.toJSON());

    res.json({
      error: false,
      message: 'Event successfully created',
      event: newEvent 
    });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: true, message: 'Error adding event', details: error.message });
  }
}

async function editEvent(req, res, next){
  const event = req.body;
  const updatedFields = {};
  try {

    if (event.title) {updatedFields.title = event.title};
    if (event.description) {updatedFields.description = event.description};
    if (event.Month) {updatedFields.Month = event.Month};
    if (event.Day) {updatedFields.Day = event.Day};
    if (event.start) {updatedFields.start = event.start};
    if (event.end) {updatedFields.end = event.end};

    if (Object.keys(updatedFields).length > 0) {
        console.log(updatedFields);
        await Events.update(updatedFields, {
            where: {
                id: event.id,
            },
        });
        res.json({
            error: false,
            message: 'Event successfully edited',
            changes: Object.keys(updatedFields),
        });

        console.log('Event successfully edited');
    } else {
        res.status(400).json({
            error: true,
            message: 'No fields provided for update',
        });
    }
} catch (error) {
    console.error('Error editing event: ', error);
    res.status(500).json({
        error: true,
        message: 'Error editing event',
        details: error.message,
    });
    console.log(error.message);
}
}

async function deleteEvent(req, res, next) {
  let id = req.swagger.params.id.value;
  try{
      await Events.destroy({
          where: {
              id: id
          },
      }); 

      res.json({
          error: false,
          message: "Event successfully deleted",
          event: {id: id}
          }
      )
  }catch(error){
      console.error('Error deleting event: ', error);
      res.status(500).json({
          error: true,
          message: 'Error deleting event',
          details: error.message,
      });
  }
}

async function getEvents(req, res, next){
    try{
        const data = await Events.findAll({
            attributes: [
                'id', 
                'title', 
                'description',
                'start',
                'end',
                'Month',
                'Day',
            ],
            order: [
                ['createdAt', 'DESC']
            ]})
        res.json(data);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function getOneEvent(req, res, next){
    const id = req.swagger.params.id.value;
    try{
        const data = await Events.findOne({
            attributes: [
                'title', 
                'description',
                'Month',
                'Day',
                'start',
                'end'
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