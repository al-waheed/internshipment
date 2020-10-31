import React from 'react';
import user from './image/user.jpg'


function Customer(props) {
    
   return (
        <div className='user-container'>
            <div className='user'>
                <div className='pics'>
                    <img src={user} className='profile-pics' alt='profile pics'/>
                </div>
               <div className='user-info'>
                   <div className='data'>
                 <p><h4>NAME:</h4>{props.user.name}</p>
                 <p><h4>CONTACT:</h4> {props.user.phone}</p>
                 <p><h4>ADDRESS:</h4> {props.user.address}</p>
                 <p><h4>ABOUT: </h4>{props.user.about}</p>
                 </div>
                 <div className='user-likes'>
                    <div className='likes'>
                    <h4>LIKES:</h4> 
                    <p>{ props.user.likes.map(like => {

                   return  <h4 className='like'>{like}</h4>


                     })}</p>
                    </div>

                    <div className='likes'>
                   <h4>DISLIKES:</h4> 
                   <p>{props.user.dislikes.map(dislike => {

                     return <h4  className='like'>{dislike}</h4>

                   })}</p>
                   <button ></button>
                   </div>
                 </div>
               </div>
            </div>
             
        </div>
    )
   }

export default Customer