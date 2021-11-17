function applyLabel() {
  const threads = GmailApp.getInboxThreads();
  const myGmailLabels = GmailApp.getUserLabels();
  Logger.log(myGmailLabels);
  const oxLabel = "OX PRO";
  const vicsLabel = "OX PRO/OX VICTORIA";

  const testLabel = "poopybutthole";

  const labelsHolderArr = [];



  myGmailLabels.map(label => {
    Logger.log(label.getName());
    labelsHolderArr.push(label.getName())
  })

  // // Logger.log(labelsHolderArr);

  let tempLabel;

  if (labelsHolderArr.includes(vicsLabel)) {
    Logger.log('Label is already created');
    tempLabel = GmailApp.getUserLabelByName(vicsLabel);
  } else {
    Logger.log('Label is being Created');
    tempLabel = GmailApp.createLabel(vicsLabel);
  }





  threads.map(message => {
    var victoriaDateArr = [3.0, 4.0, 5.0];
    var date = message.getLastMessageDate().getDay(); // date/time
    var hourOfDay = message.getLastMessageDate().getHours();
    Logger.log(hourOfDay);
    // Logger.log(date)



    const currentMessageSubject = message.getFirstMessageSubject();
    // Logger.log(currentMessageSubject);
    // Logger.log(currentMessageSubject.includes('Confirmation Request'));
    if (currentMessageSubject.includes('Confirmation Request') && victoriaDateArr.includes(date)) {
      if (date == 3.0 && hourOfDay <= 12) {
        Logger.log("This still belongs to Eddie");
        return;
      }
      message.addLabel(tempLabel);
    } else {
      Logger.log("nope")
    }
  })
}

