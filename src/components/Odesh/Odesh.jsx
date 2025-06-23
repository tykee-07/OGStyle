import React from 'react'
import "./Odesh.scss"
import { APIclient } from '../../axios/APIcliend'
import { useEffect, useState } from 'react'
import bestlike from "../Beset/svg/best-like.svg"
import pro1 from "../Beset/img/pro1.png"
function Odesh() {
    const [list, setList]=useState([])
      async function data() {
        try {
          const res = await APIclient.get('https://6824116865ba05803398c659.mockapi.io/Prodact');
          console.log(res);
          setList(res.data);
        } catch (error) {
          console.log(error);
          
        }
      }
      useEffect(() => {
        data();
      }, [])
  return (
    <div>
      {
        list.map((item) => {
          return (
            <div key={item.id} className="pro-kros">
                    <img src={item.img} alt="" />
                    <div className="info-text">
                      <div className="title">
                         <h4>{item.title}</h4> 
                       <p>Артикул 19666 </p>
                      </div>
                      <div className="like">
                       <h3>3290 ₽</h3>
                        <img src={bestlike} alt="" />
                      </div>
                      </div>
                    <div className="pro-kros2">
                    <img src={item.img} alt="" />
                    <div className="info-text2">
                      <div className="title2">
                         <h4>{item.title}</h4> 
                       <p>Артикул 19666 </p>
                      </div>
                      <div className="like2">
                       <h3>3290 ₽</h3>
                        <img src={bestlike} alt="" />
                      </div>
                      <div className="eur">
                        <p>35 eur</p>
                        <p>36 eur</p>
                        <p>37 eur</p>
                        <p>38 eur</p>
                        <p>39 eur</p>
                        <p>40 eur</p>
                        <p>41 eur</p>
                      </div>
                      </div>
                    </div>
                    </div>
          )
        })
      }
    </div>
  )
}

export default Odesh
