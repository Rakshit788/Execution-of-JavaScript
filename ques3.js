const students = [
{name : "Mithun" ,
 marks : 95   } ,


 {name : "Prabhir" ,
   marks : 75  
                     }  ,
                     
     
 {name : "Alka" ,
 marks : 92 
                   }   ,

     
 {name : "Shivam" ,
 marks : 70   
                   } ,
 
    {name : "Farman" ,
      marks : 99  
                   }                                



]
function printStudentAbove90 (name){
  for(let obj of students) {


    
 if(obj.name === name && obj.marks > 90){
  console.log(`Congratulations ${name} you have cleared the exam `) }
  
    if(obj.name == name && obj.marks < 90){
      console.log(`Sorry ${name} you have not cleared the exam `) 
    }  


  
           } }

   
    
 
    

  



printStudentAbove90("Mithun")

printStudentAbove90("Prabhir")

 
