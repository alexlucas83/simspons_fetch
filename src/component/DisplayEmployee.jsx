import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
        <img  src={employee.image}  alt="picture"  />
            <ul>
                <li>quote : {employee.quote}</li>
                <li>
                    character : {employee.character} 
                </li>
                <li>
                    characterDirection : {employee.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;