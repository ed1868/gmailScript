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


  let tempLabel;


  //CREATES VICTORIAS LABEL IF I DONT HAVE IT AND TELLS ME IT IS ALREADY CREATED IF I DO
  if (labelsHolderArr.includes(vicsLabel)) {
    Logger.log('Label is already created');
    tempLabel = GmailApp.getUserLabelByName(vicsLabel);
  } else {
    Logger.log('Label is being Created');
    tempLabel = GmailApp.createLabel(vicsLabel);
  }

  threads.map(message => {

    let victoriaDateArr = [3.0, 4.0, 5.0];
    let date = message.getLastMessageDate().getDay(); // date/time
    let hourOfDay = message.getLastMessageDate().getHours();
    Logger.log(hourOfDay);
    // Logger.log(date)

    let messageSenders = message.getMessages();
    let subjectArr = ['BONOTEL - Reservation', 'Confirmation Request', 'DERBY - Reservation', 'HBSI - Reservation', 'Your Order has been Processed', 'New account request', 'Payment due now', 'Re: URGENT:'];
    const currentMessageSubject = message.getFirstMessageSubject();
    Logger.log(currentMessageSubject);
    let isOti = false;

    messageSenders.map(email => {
      Logger.log(email.getFrom());
      let emailSender = email.getFrom();
      if (emailSender == "ox@overseasinternational.com") {
        Logger.log('This email is coming from Overseas');
        isOti = true;

        subjectArr.forEach(subject => {
          if (currentMessageSubject.includes(subject) && victoriaDateArr.includes(date) && isOti) {
            if (date == 3.0 && hourOfDay < 12) {
              Logger.log(date)
              Logger.log("This still belongs to Eddie");
              return;
            }
            Logger.log('This Belongs to Vic');
            message.addLabel(tempLabel);
            message.moveToArchive();
          }
        })


      } else {
        isOti = false;

      }

    })
    Logger.log(isOti);
  });
}

