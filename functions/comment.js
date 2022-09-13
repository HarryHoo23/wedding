// domain/.netlify/functions/1-hello
var Parse = require('parse/node');

Parse.initialize("9EkM1TAcCbWWc2URiZwoc68XyFrNIYy0tzWFBKEV", "7p0Djg4RkeMBJrPM0cRSL103UAQ9zjGikjVoucuk");
Parse.serverURL = 'https://parseapi.back4app.com/';

async function retrieveComment() {
    //Create your Parse Query, and define the class it will be searched    
    const query = new Parse.Query('forum');        
    let objects = await query.find();
    let commentsArray = [];

    try {
        for (let i = 0; i < objects.length; i++) {
            const comment = await query.get(objects[i].id);
            const name = comment.get('name');
            const content = comment.get('content');
            const createDate = comment.get('createdAt');
            const singleComment = {
                name, content, createDate
            };
            commentsArray.push(singleComment);
        }
    } catch (error) {
        console.log(error.message);
    }

    return commentsArray;
  }

exports.handler = async (event, context) => {
    let result = await retrieveComment();
    
    return {
        statusCode: 200, body: JSON.stringify(result)
    }
}