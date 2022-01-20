const calculateTemp =() =>{
    const numbertemp= document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

     const celToFah =(cel) =>{
         let fahrenheit =Math.round((cel*9/5) +32);
         return fahrenheit;
     }

     const FahToCel =(fah) =>{
        let celcius = Math.round((fah-32)*5/9);
        return celcius;
    }

    let result;
     if(valueTemp =='cel'){
         result= celToFah(numbertemp);
         document.getElementById('resultContainer').innerHTML=`= ${result}° fahrenheit`;
     }else{
         result=FahToCel(numbertemp);
         document.getElementById('resultContainer').innerHTML=`= ${result}° celcius`;
     }















}