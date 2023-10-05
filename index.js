
let employeeArry = [];

let element;




class Employee{

    constructor(name,age,gender,TotalSalary,Deductions,Bonus,NetPay,Status){

        this.name = name
        this.age = age
        this.gender = gender
        this.TotalSalary = TotalSalary
        this.Deductions = Deductions
        this.Bonus = Bonus
        this.NetPay = NetPay
        this.Status = Status

    }

    static displayEmployee(employeeArry){

        element = employeeArry

        tableBox.innerHTML = ''
        
        employeeArry.forEach((elem,i)=>{
            
            if(elem.Bonus === 0 && elem.Deductions === 0){
                elem.NetPay = elem.TotalSalary
            }

            let statusBTN = elem.Status ? 'paid' : 'unpaid';
           

            tableBox.innerHTML += `
                    <tr id="TR">
                        <th scope="row">${i+1}</th>
                        <td>${elem.name}</td>
                        <td>${elem.age}</td>
                        <td>${elem.gender}</td>
                        <td>${elem.TotalSalary}</td>
                        <td>${elem.Deductions}</td>
                        <td>${elem.Bonus}</td>
                        <td>${elem.NetPay}</td>
                        <td><button id="editBTN" onclick="Employee.showModal(${i},element)">Edit Salary</button></td>
                        <td>
                            <button id="${statusBTN}">${elem.Status ? 'Paid' : 'Unpaid' }</button>
                        </td>
                        <td>
                            <button id="payBTN" onclick="Employee.paySalary(${i},element)">Pay</button>    
                        </td>
                    </tr>
            
            `


        })

      
    }


    static showModal(id,element){

        modal.style.display = 'block'

        modal.innerHTML = `
                           
            <div id="modalDiv">
                <input type="text" name="" id="salaryInput">
                <div>
                    <button onclick="Employee.deductSalary(${id},element)" id="deductBTN">deduct</button>
                    <button onclick="Employee.addBonus(${id},element)" id="bonusBTN">add bonus</button>
                </div>
            </div>

        `
    }

    static searchEmp(){
            
        let val= SearchInp.value.toLowerCase();

        let  filtered = employeeArry.filter((elem,i)=>{

            let names = elem.name.toLowerCase();
                
            return names.startsWith(val);

        })

        console.log(filtered);

        this.displayEmployee(filtered)

    }

     

    static deductSalary(id,element){

       if(salaryInput.value !== ''){
        element[id].NetPay = element[id].NetPay - parseInt(salaryInput.value)
        element[id].Deductions += parseInt(salaryInput.value)
        this.displayEmployee(element)

        modal.style.display = 'none'
       }else{
        alert('Kindly input an Amount')
       }


    }

    static addBonus(id,element){
 
        if(salaryInput.value !== ''){

            element[id].NetPay = element[id].NetPay + parseInt(salaryInput.value)
            element[id].Bonus += parseInt(salaryInput.value)

            this.displayEmployee(element)

            modal.style.display = 'none'
        }else{
        alert('Kindly input an Amount')
       }
       

    }

    
    static paySalary(id,element){

        let paid =false

        let color = false

        tableBox.innerHTML = ''

                if(element[id].Status === true){
                    paid = true

                }else{ 

                    let sal = salary.innerHTML

                    let companySal = parseInt(sal)

                    companySal = companySal - element[id].NetPay

                    salary.innerHTML = companySal


                    element[id].Status = true
                    
                    this.displayEmployee(element)

                    }
                    

                if(paid === true){
                    alert('This Employee has already been paid')
                    this.displayEmployee(element)
                }

    }


    static payAll(){

        let paid = false
        tableBox.innerHTML = ''
        employeeArry.forEach((elem,i)=>{

        //    if(elem.Status ===true){
        //         paid = true
        //    }else{
                 if(elem.NetPay != ''){


                    let sal = salary.innerHTML

                    let companySal = parseInt(sal)

                     let NetPay = employeeArry.reduce((accr,cur)=>{

                        return accr + cur.NetPay
                     },0)

                     console.log(NetPay);

                    salary.innerHTML = 10000000 - NetPay


                    elem.Status = true

                    
                }
                this.displayEmployee(employeeArry)
        //    }

        })

        //  if(paid === true){
        //         alert('This Employee has already been paid')
        //         this.displayEmployee(employeeArry)
        //     }


    }

}


let ben = new Employee('Ben',26,'Male',200000,0,0,'',false)
let mark = new Employee('Mark',29,'Male',250000,0,0,'',false)
let anjy = new Employee('Anjy',23,'Female',100000,0,0,'',false)
let folake = new Employee('Folake',23,'Female',100000,0,0,'',false)
let yetunde = new Employee('Yetunde',23,'Female',50000,0,0,'',false)
let steve = new Employee('Steve',24,'Male',150000,0,0,'',false)
let mercy = new Employee('Mercy',26,'Female',100000,0,0,'',false)
let idris = new Employee('Idris',27,'Male',200000,0,0,'',false)
let ife = new Employee('Ife',27,'Male',500000,0,0,'',false)

employeeArry.push(ben,mark,anjy,folake,yetunde,steve,mercy,idris,ife)


console.log(employeeArry);
Employee.displayEmployee(employeeArry)

