import React from "react";
import GettingMarried from "../components/GettingMarried";
import MoveSectionDown from "../components/MoveSectionDown";
import MoveSectionUp from "../components/MoveSectionUp";
import PageNumber from "../components/PageNumber";
import ImageGallery from "../components/ImageGallery";
import { animated, useSpring } from "react-spring";

const FadeInDirection = ({ isVisible, children }) => {
    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 500,
        delay: 2000,
        duration: 1000
    });
    return <animated.div style={styles}>{children}</animated.div>;
};

const FadeInLeftDirection = ({ isVisible, children }) => {
    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 100,
        delay: 1000,
        duration: 1000
    });
    return <animated.div style={styles}>{children}</animated.div>;
};

const InfoPage = (props) => {

    return (
        <div className="info wrapper">
            <MoveSectionUp />
            <GettingMarried />
            <div className="text-center info-content">
                <FadeInLeftDirection isVisible={props.isVisible}>
                    <h4 className="color-brown">邀请人</h4>
                    <p className="color-pink">新郎： 胡仲珩 & 新娘： 智颖黎</p>
                    <h4 className="mb-3">邀请函</h4>
                </FadeInLeftDirection>
                <FadeInDirection isVisible={props.isVisible}>
                    <p>
                        月色与雪色之间，你是第三种绝色，于我而言，日月星辉之中，你是第四种难得。”原本应该在三年前就举办的婚礼，因为疫情延期至2022年，却也意外地，让我们有了对爱情和婚姻更深刻的感悟之后，迎来属于我们的，独特的一天。感念天南海北的亲友们，虽然身不能至，但在此我们对所有在远方挂念我们的亲友说：谢谢你们，我们的感情要迎来新的阶段啦，真诚感谢与所有人的相知相遇，惺惺相惜，感谢一直唇齿相依的家人感谢所有雪中送碳的朋友。请随我们，一起进入人生的下一程，每一程。
                    </p>
                </FadeInDirection>
            </div>
            <div className="photo-frame px-3 mt-4">
                <ImageGallery />
            </div>
            <MoveSectionDown />
            <PageNumber number={props.number} />
        </div>
    );
};

export default InfoPage;
