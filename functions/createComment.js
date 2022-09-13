var Parse = require('parse/node');

Parse.initialize("9EkM1TAcCbWWc2URiZwoc68XyFrNIYy0tzWFBKEV", "7p0Djg4RkeMBJrPM0cRSL103UAQ9zjGikjVoucuk");
Parse.serverURL = 'https://parseapi.back4app.com/';

async function saveNewPlayer(name, content) {
    //Create your Parse Object
    const comment = new Parse.Object("forum");

    //Define its attributes
    comment.set('name', name);
    comment.set('content', content);

    try{
        //Save the Object
        let result = await comment.save()
        console.log(result);
    } 
    catch(error){
        console.log(error);
    }
} 

exports.handler = async (event, context) => {
    const method = event.httpMethod;
    if (method !== 'POST') {
        return {
            statusCode: 405,
            body: "Only POST Request Allowed."
        }
    }

    const { name, content } = JSON.parse(event.body);
    if (!name || !content) {
        return {
            statusCode: 400,
            body: '请填写所有信息'
        }
    }

    console.log(name);
    console.log('content:', content);

    await saveNewPlayer(name, content);
    
    return {
        statusCode: 200, body: 'Successfully write in.'
    }
}