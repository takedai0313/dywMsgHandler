'use strict';

const fs = require("fs");
const invokeLambda = (JSON.parse(fs.readFileSync(process.env.setting, 'utf8'))).invokeLambda;
const AWS = require("aws-sdk");
const lambda = new AWS.Lambda({
    apiVersion: '2015-03-31',
    region: 'ap-northeast-1'
});

exports.handler = (event, context, callback) => {
    console.log(event);
    const msgType = event.events[0].message.type;
    if(msgType === "image"){
        // 画像系サービスを呼び出す
        console.log("image");
    }else if(msgType === "text"){
        // text系サービスを呼び出す
        const param = {
            FunctionName: invokeLambda,
            InvocationType: "Event",
            Payload: new Buffer(JSON.stringify(event)).toString()
        };
        lambda.invoke(param, (err, data) => {
          if(err)   console.log(err, err.stack);
          else      console.log(data);
        });
        console.log("text");
    }else{
        // なにもしない
        console.log("null");
    }
    // TODO implement
    callback(null);
};