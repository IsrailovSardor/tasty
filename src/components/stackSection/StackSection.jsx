import React from "react";
import "./stackSection.scss"

import jquery from '../../images/stack/front/jquery.svg'
import typescript from '../../images/stack/front/typescript.svg'
import javascript from '../../images/stack/front/javascript.svg'
import react from '../../images/stack/front/react.svg'
import vue from '../../images/stack/front/vue.svg'
import html from '../../images/stack/front/html.svg'

import kotlin from '../../images/stack/mobile/kotlin.svg'
import swift from '../../images/stack/mobile/swift.svg'
import flutter from '../../images/stack/mobile/flutter.svg'
import java from '../../images/stack/mobile/java.svg'

import node from '../../images/stack/back/node.svg'
import dotnet from '../../images/stack/back/dotnet.svg'
import laravel from '../../images/stack/back/laravel.svg'
import php from '../../images/stack/back/php.svg'
import golang from '../../images/stack/back/golang.svg'
import javaBack from '../../images/stack/back/java.svg'
import CustomAnimation from "../../hoc/animation/CustomAnimation";
import Appearance from "../../hoc/animation/Appearance";


const custom = {
    visible: { opacity: 1, x:0, transition: { duration: 1, delay: 0 } },
    hidden: { opacity: 0, x: 100 }
};

function StackSection(){
    const front = [jquery, typescript, javascript, react, vue, html]
    const mobile = [kotlin, swift, flutter, java]
    const back = [node, dotnet, laravel, php, golang, javaBack]

    return(
        <div className="stackSection">
            <div className="container">
                <div className="stack__item front">
                    <p className="stack__item__title">
                        Front end
                    </p>
                    <div className="stack__item__images">
                        {
                            front.map((image, index) =>
                                CustomAnimation(
                                    () => <img src={image} alt="front" key={`stack__section__front__${index}`} className="stack__item__image"/>
                                ,

                                    {
                                        ...custom,
                                        visible: {
                                            ...custom.visible,
                                            transition: {
                                                ...custom.visible.transition,
                                                delay: 0
                                            }
                                        }
                                    }
                                )
                            )
                        }
                    </div>
                </div>
                <div className="stack__item main-item">
                    <p className="stack__item__title">Our stack</p>
                    <p className="stack__item__description">Our employees strive for the best quality development and in working on</p>
                </div>
                <div className="stack__item mobile">
                    <p className="stack__item__title">
                        Mobile
                    </p>
                    <div className="stack__item__images">
                            {
                                mobile.map((image, index) =>
                                    CustomAnimation(
                                        () => <img src={image} alt="front" key={`stack__section__mobile__${index}`} className="stack__item__image"/>
                                        ,
                                        {
                                            ...custom,
                                            visible: {
                                                ...custom.visible,
                                                y: 0,
                                                transition: {
                                                    ...custom.visible.transition,
                                                    delay: 0
                                                }
                                            },
                                            hidden: {
                                                ...custom.hidden,
                                                x: 0,
                                                y:100
                                            }
                                        }
                                    )
                                )
                            }
                    </div>
                </div>
                <div className="stack__item back">
                        <p className="stack__item__title">
                            Backend
                        </p>
                        <div className="stack__item__images">
                            {
                                back.map((image, index) =>
                                    CustomAnimation(
                                    () => <img src={image} alt="front" key={`stack__section__back__${index}`} className="stack__item__image"/>,
                                        {
                                            ...custom,
                                            visible: {
                                                ...custom.visible,
                                                transition: {
                                                    ...custom.visible.transition,
                                                    delay: 0
                                                }
                                            }
                                        }
                                    )
                                )
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}
export default StackSection