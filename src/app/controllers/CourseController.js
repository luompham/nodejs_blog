const Course = require('../models/Course');

const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
  //[GET]/
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: 'Error!!!' });
    //   }
    // });

    Course.find({})
      .then((courses) => {
        // courses = courses.map(course => course.toObject())
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((error) => next(error));
    // res.render('home');
  }

  // [GET]/search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new CourseController();
