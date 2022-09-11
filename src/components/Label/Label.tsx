import React from 'react'
import {LabelProps } from './types'
export const Label: React.FC<LabelProps> = ({...props})=>{

    return (
        <>
            <div className="products__info products-info products-info_disabled">
                <div className="products-info__description">
                    <div className="products-info__main products-info__main_sold">
                        <h3 className="products-info__header">{props.name}</h3>
                        <span className="products-info__price">{props.price}</span>
                    </div>
                    {props.sold && <span className="products-info__sold">sold out</span>}
                </div>
            </div>
        </>
    )
}