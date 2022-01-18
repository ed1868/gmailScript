function transferEmails() {
    const threads = GmailApp.getInboxThreads();
    const myGmailLabels = GmailApp.getUserLabels();

    Logger.log(myGmailLabels);

    // LABEL I WANT TO TRANSFER ALL EMAILS TO
    const oxLabel = "OX AC";


    const testLabel = "poopybutthole";

    const labelsHolderArr = [];


    myGmailLabels.map(label => {
        Logger.log(label.getName());
        labelsHolderArr.push(label.getName())
    })


    let tempLabel;


    //CREATES NEW LABEL IF YOU DONT HAVE IT ALREADY 
    //LOGS IF YOU ALREADY HAVE THE NEW LABEL 
    if (labelsHolderArr.includes(oxLabel)) {
        Logger.log('Label is already created');
        tempLabel = GmailApp.getUserLabelByName(oxLabel);
    } else {
        Logger.log('Label is being Created');
        tempLabel = GmailApp.createLabel(oxLabel);
    }


    threads.map(message => {
        //EMAIL TARGET
        let target = "ox@overseasinternational.com";
        let targetTwo = "ox@overseasnetwork.com";
        let targetArray = ["Overseas Xpress <ox@overseasnetwork.com>", "ox@overseasnetwork.com", "ox@overseasinternational.com",]
        //GET MESSAGE SENDERS 
        var messageSenders = message.getMessages();
        // Logger.log('MESSAGE SENDERS:');
        // Logger.log(messageSenders);
        if (messageSenders) {
            //LOOP ALL MESSAGES
            messageSenders.map(email => {
                //GET THE SENDERS ADDRESS
                let emailSender = email.getFrom();
                Logger.log(emailSender);

                //GET THE EMAILS CC ADDRESSES
                let emailCc = email.getCc().split(',');

                Logger.log(typeof (emailCc));
                Logger.log(Object.values(emailCc));

                //CHECK IF EMAIL ADDRESS IS OX@OVERSEASINTERNATIONAL.COM OR ox@overseasnetwork.com
                if (emailSender == target || emailSender == targetTwo) {
                    message.addLabel(tempLabel);
                    message.moveToArchive();
                }
            })
        }
    })

}

