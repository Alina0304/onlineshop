import React from 'react'
import {CardProps } from './type'
import {Label} from '../Label/Label'
export const Card: React.FC<CardProps> = ({...props})=>{

    return (
        <>
            <a href="#" className="products__item">
                <img src={props.image_url} alt="" className="products__img" />
                    {props.coming_soon &&  <span className="products__expected expected">{props.coming_soon}</span>}
                    <Label {...props} />
            </a>
        </>
    )
}