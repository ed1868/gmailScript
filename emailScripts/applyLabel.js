function applyLabel() {
  const threads = GmailApp.getInboxThreads();
  const myGmailLabels = GmailApp.getUserLabels();
  Logger.log(myGmailLabels);
  const oxLabel = "OX PRO";
  const vicsLabel = "OX VICTORIA";

  const testLabel = "poopybutthole";

  const labelsHolderArr = [];

  let tempLabel;

  if(labelsHolderArr.includes(testLabel)){
    Logger.log('it does');
     tempLabel = GmailApp.getUserLabelByName(testLabel);
  }else{
    Logger.log('it does not');
      tempLabel = GmailApp.createLabel(testLabel);
  }

Logger.log( 'hhhhhhhh',tempLabel);

  myGmailLabels.map(label => {
    Logger.log(label.getName());
    labelsHolderArr.push(label.getName())
  })

  Logger.log(labelsHolderArr);


  threads.map(message => {
    
    Logger.log(message.getLastMessageDate().getDay());
    var date = message.getLastMessageDate().getDay(); // date/time
    // var body = message.getBody(); // mail
    // Logger.log(date)
    // Logger.log(body)


    const currentMessageSubject = message.getFirstMessageSubject();
    Logger.log(currentMessageSubject);
    Logger.log(currentMessageSubject.includes('Confirmation Request'));

    if(currentMessageSubject.includes('Eddie is Awesome' ) && date == "2.0"){
      Logger.log("yeah");
      message.addLabel(tempLabel);
    }else{

      Logger.log("nope")
    }
  })  
}

