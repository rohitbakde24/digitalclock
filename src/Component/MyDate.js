import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import './MyDate.css';
import sunc from './image/sunc.png';
import moon from './image/moon.png';
import AOS from 'aos';


const MyDate = () => {
    let d = new Date();
    let NewTime = d.toLocaleTimeString();
    let NewHour = d.getHours();
    let NewDay;
    let NewDate = d.getDate();
    let NewMonth ;
    let NewYear = d.getFullYear();

    // today day
    switch(d.getDay()){
        case 0:
            NewDay = "Sunday";
            break;
        case 1:
            NewDay = "Monday";
            break;
        case 2:
            NewDay = "Tuesday";
            break;
        case 3:
            NewDay = "Wednesday";
            break;
        case 4:
            NewDay = "Thursday";
            break;
        case 5:
            NewDay = "Friday";
            break; 
        case 6:
            NewDay = "Saturday";       
    }
//this month
    switch(d.getMonth()){
        case 0:
            NewMonth = "January";
            break;
        case 1:
            NewMonth = "February";
            break;
        case 2:
            NewMonth = "March";
            break;
        case 3:
            NewMonth = "April";
            break;
        case 4:
            NewMonth = "May";
            break;
        case 5:
            NewMonth = "June";
            break; 
        case 6:
            NewMonth = "July";
            break; 
        case 7:
            NewMonth ="August";
            break;
        case 8:
            NewMonth = "September";
            break;
        case 9:
            NewMonth = "October";
            break;
        case 10:
            NewMonth = "November";
            break;
        case 11:
            NewMonth = "December";            
    }
    //time
    const [time,setTime] = useState(NewTime);
    const UpdateTime = ()=>{
        let NewTime = new Date().toLocaleTimeString(); 
        setTime(NewTime)
    }
    setInterval(UpdateTime, 1000);
    // use state for dark light mode
    const [day,night] = useState(true)
    
    AOS.init()
     return (<>
<div className={day? 'dark-mode':'light-mode'}>
    <div className='text-center bg'> 
        <div className='myimg pt-5'>
            <div data-aos="fade-down" data-aos-duration="3000">
                <img src= {(NewHour>6&&NewHour<18)?sunc:moon} style={{width:300}}/>
            </div>
        </div>
            <h1 className='display-1 font pt-5' ><b>{time}</b></h1>
            <h1 className='font' ><b>{NewDay}, {NewDate} {NewMonth}, {NewYear} </b></h1>
   
        <Form>
            <Form.Check 
            type="switch"
            id="custom-switch"
            onChange={()=>{night(!day)}}
            />
        </Form>
    </div>
</div>
    </>
  )
}

export default MyDate;