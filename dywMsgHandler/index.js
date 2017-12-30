exports.handler = (event, context, callback) => {
    console.log(event);
    const msgType = event.events[0].message.type;
    if(msgType === "image"){
        // 画像系サービスを呼び出す
        console.log("image");
    }else if(msgType === "text"){
        // text系サービスを呼び出す
        console.log("text");
    }else{
        // なにもしない
        console.log("null");
    }
    // TODO implement
    callback(null);
};