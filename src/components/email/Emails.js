import React from 'react'
import Email from './Email';

const Emails = () => {
    const emails = [{ 
                     expeditor:"Quora Digest",
                     messageTitle:"How can I be a millionaire?", 
                     message: "When expectations met reality for the first time ",
                     timestamp: "11:00 AM"
                    },

                    {
                    expeditor:"Google Maps ",
                    messageTitle:"Security alert", 
                    message: "We noticed a new sign-in to your Google Account on a Windows device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
                    timestamp: "Dec 3"
                    },

                    {
                    expeditor:"Facebook",
                    messageTitle:"Did you just reset your password?", 
                    message: "This is to let you know that your password was just reset",
                    timestamp: "Dec 2"
                    },

                    { 
                    expeditor:"Twitter",
                    messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                    message: "You can ignore this message. There's no need to take any action.",
                    timestamp: "Nov 28"
                    },
                    { 
                      expeditor:"Quora Digest",
                      messageTitle:"How can I be a millionaire?", 
                      message: "When expectations met reality for the first time ",
                      timestamp: "11:00 AM"
                     },
 
                     {
                     expeditor:"Google Maps ",
                     messageTitle:"Security alert", 
                     message: "We noticed a new sign-in to your Google Account on a Windows device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
                     timestamp: "Dec 3"
                     },
 
                     {
                     expeditor:"Facebook",
                     messageTitle:"Did you just reset your password?", 
                     message: "This is to let you know that your password was just reset",
                     timestamp: "Dec 2"
                     },
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },
 
                     {
                     expeditor:"Facebook",
                     messageTitle:"Did you just reset your password?", 
                     message: "This is to let you know that your password was just reset",
                     timestamp: "Dec 2"
                     },
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     {
                     expeditor:"Facebook",
                     messageTitle:"Did you just reset your password?", 
                     message: "This is to let you know that your password was just reset",
                     timestamp: "Dec 2"
                     },
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     {
                     expeditor:"Facebook",
                     messageTitle:"Did you just reset your password?", 
                     message: "This is to let you know that your password was just reset",
                     timestamp: "Dec 2"
                     },
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     {
                     expeditor:"Facebook",
                     messageTitle:"Did you just reset your password?", 
                     message: "This is to let you know that your password was just reset",
                     timestamp: "Dec 2"
                     },
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     {
                     expeditor:"Facebook",
                     messageTitle:"Did you just reset your password?", 
                     message: "This is to let you know that your password was just reset",
                     timestamp: "Dec 2"
                     },
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     },,
 
                     { 
                     expeditor:"Twitter",
                     messageTitle:"New login to Twitter from ChromeMobileAndroid on Android", 
                     message: "You can ignore this message. There's no need to take any action.",
                     timestamp: "Nov 28"
                     }





                     
                    
                    ];
  return (
    <div>
      {emails.map((email) => (<Email expeditor={email.expeditor} 
                                    messageTitle={email.messageTitle}
                                    message={email.message} 
                                    timestamp={email.timestamp} 

                                     />))}
                                     
    </div>
  );
};

export default Emails
