function transferEmails() {
    const threads = GmailApp.getInboxThreads();
    const myGmailLabels = GmailApp.getUserLabels();

    Logger.log(myGmailLabels);

    // LABEL I WANT TO TRANSFER ALL EMAILS TO
    const oxLabel = "OX AC";

    //CREATES NEW LABEL IF YOU DONT HAVE IT ALREADY 
    //LOGS IF YOU ALREADY HAVE THE NEW LABEL 
    if (labelsHolderArr.includes(oxLabel)) {
        Logger.log('Label is already created');
        tempLabel = GmailApp.getUserLabelByName(oxLabel);
    } else {
        Logger.log('Label is being Created');
        tempLabel = GmailApp.createLabel(oxLabel);
    }

}

