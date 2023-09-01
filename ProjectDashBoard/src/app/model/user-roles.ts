export class UserRoles {

public static userRoles:Array<any>=[
  //on 0th index 
    {
        re:[
              {label:'View Enquiry' ,path:'viewEnq'},
              {label:'Add Enquiry' ,path:'addEnq'},
              {label:'Send Mail' ,path:'sendMail'},
              {label:'Fill Loan Form' ,path:'loanApp'}
              
            ],
            oe:[
                {label:'view Enquiry' ,path:'checkCibil'},
                {label:'Verify Application' ,path:'verifyApp'},
                
                
                
              
                
              ] ,
             admin:[
              {label:'Add new Empolyee', path:'addemployee'},
              {label:'View Employee',path:'viewemp'},
             ],
             cm:[
              {label:'check aplication', path:'checkAplli'},
              {label:'apllication form',path:'apllicationform'},
              {label:'genrate Sanction',path:'gsanction'},
              {label:'Send Mail To Cm',path:'sendmailcm'},
             ]
    }
      


]

}
