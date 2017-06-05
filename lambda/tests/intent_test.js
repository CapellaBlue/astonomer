// This is a Javascript test harness that simulates the execution of Lambda function code
// From the command prompt, type "node test.js"

var MyLambdaFunction = require('../src/index.js'); // assumes single Lambda function with exports.handler

 // this is the Lambda request data, generated by the Alexa service.  Replace with your actual Alexa request.
var event =
    {
        "session": {
            "sessionId": "SessionId.ad801386-587f-4177-acfd-2b5465af9d57",
            "application": {
                "applicationId": "amzn1.ask.skill.92a24c78-c2ca-410f-aa76-9ea83c7dcf55"
            },
            "attributes": {
                // "zipcode": "98223"
            },
            "user": {
                "userId": "amzn1.ask.account.AFWYF4KTDQ74XDLCUJOOMAN5RH2GVV2URTQLSDA3UFT44N3KTTL4ZAQSIM3W4ZLYYITBQJQLH3SVVXRZ7ZB7U7RGPZVWJX4LJIWTYFJFTZ6PEQLE6ROQLLMVFTOHLVV67MNMLKDL2S3C243UMPW2FDCMEN2J3XYX5LIXLSBOBH2FNVT3I5I7T7WVIRIWTNHFC55VE3ZLY5JJJYI"
            },
            "new": true
        },
        "request": {
            "type": "IntentRequest",

            "requestId": "EdwRequestId.7cd76ccf-0fa0-47da-b2cf-e6b080bcb87d",

            "locale": "en-US",
            "intent": {
                "name": "GetWeatherTimeIntent",
                "slots": {
                    "Zipcode": {
                        "name": "Zipcode",
                        "value": "98223"
                    },
                    "Time": {
                        "name": "Time",
                        "value": "13:00"
                    },
                    "Date": {
                        "name": "Date"
                        // "value": "2017-06-04"
                    }
                }
            }
        },
        "version": "1.0"
    };

var context = {
    'succeed': function (data) {
        console.log(JSON.stringify(data, null,'\t') );

    },
    'fail': function (err) {
        console.log('context.fail occurred');
        console.log(JSON.stringify(err, null,'\t') );
    }

};

function callback(error, data) {
    if(error) {
        console.log('error: ' + error);
    } else {
        console.log(data);
    }
}

// call the function
MyLambdaFunction['handler'] (event, context, callback);
