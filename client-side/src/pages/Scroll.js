import React from 'react';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import image_1 from "../img/blog/image_1.jpg";
import image_2 from "../img/blog/image_2.jpg";
import image_3 from "../img/blog/image_3.jpg";
import image_4 from "../img/blog/image_4.jpg";
import image_5 from "../img/blog/image_5.jpg";
import image_6 from "../img/blog/image_6.jpg";
gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {

    const boxRef = useRef(null);
    const pinRef = useRef(null);
    const dotRef = useRef(null);
    const fixRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        // const el = boxRef.current;
        // gsap.fromTo(el, { rotation: 0 }, { rotation: 180, duration: 3, scrollTrigger: { trigger: el, scrub: true } })
        // gsap.utils.toArray('span').forEach((span) => {
        //     ScrollTrigger.create({
        //         trigger: span,
        //         start: "top 60%",
        //         toggleClass: "active",
        //         // onEnter: () => span.classList.add('active'),
        //         markers: true
        //     })
        // })

        // console.log(window.innerWidth)

        const el = pinRef.current;
        const dot = dotRef.current;
        const fix = fixRef.current;
        const name = nameRef.current;

        gsap.to(el, {
            duration: 4,
            scrollTrigger: {
                trigger: el,
                start: "top top",
                end: `+=${window.outerHeight}`,
                pin: true,
            }
        })
        gsap.to(dot, {
            clipPath: "circle(100%)",
            duration: 4,
            scrollTrigger: {
                trigger: el,
                start: "top top",
                scrub: 1
            }
        })
        gsap.to(name, {
            transform: `translateX(calc(-100% + ${window.innerWidth}px))`,
            color: "red",
            scrollTrigger: {
                trigger: fix,
                start: "top top",
                end: `+=${name.clientWidth - window.innerWidth}`,
                scrub: true,
                pin: true,
            }
        })
        let panels = gsap.utils.toArray(".panel");
        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
                pin: true,
                pinSpacing: i === 2 ? true : false,
            });
        });


        const imageChange = gsap.timeline({});
        imageChange.to('.img', {
            display: "none",
            opacity: 0
        })
            .to('.img2', {
                display: "block",
                opacity: 1
            })
            .to('.img2', {
                display: "none",
                opacity: 0
            })
            .to('.img3', {
                display: "block",
                opacity: 1
            })
            .to('.img3', {
                display: "none",
                opacity: 0
            })
            .to('.img4', {
                display: "block",
                opacity: 1
            })
            .to('.img4', {
                display: "none",
                opacity: 0
            })
            .to('.img5', {
                display: "block",
                opacity: 1
            })
            .to('.img5', {
                display: "none",
                opacity: 0
            })
            .to('.img6', {
                display: "block",
                opacity: 1
            })
        ScrollTrigger.create({
            trigger: ".pic",
            start: "top top",
            pin: true,
            scrub: true,
            animation: imageChange
        });
    }, [])

    return (
        <div className='main_scroll'>
            <div className="helper"></div>
            <div className='pinBox' ref={pinRef}>
                <div className='dot' ref={dotRef}></div>
            </div>
            <div className="helper" ref={fixRef}>
                <p className='name' ref={nameRef}>varun swamy</p>
            </div>
            <div className="helper yellow panel">
                Pin 1
            </div>
            <div className="helper tomato panel">
                Pin 2
            </div>
            <div className="helper grey panel">
                Pin 3
            </div>
            <div className="pic">
                <img className='img' src={image_1} alt="" />
                <img className='img2' src={image_2} alt="" />
                <img className='img3' src={image_3} alt="" />
                <img className='img4' src={image_4} alt="" />
                <img className='img5' src={image_5} alt="" />
                <img className='img6' src={image_6} alt="" />
            </div>
            <div className="helper"></div>


        </div>

        // <div className='rotate' ref={boxRef}></div>
        // <div className='container'>
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id accusamus iure qui eos aliquam! Consequuntur velit quod, qui delectus voluptate labore hic, dolore maiores corporis dolorum debitis nobis perspiciatis iure molestiae quo iusto itaque veniam temporibus autem. Nemo ipsam eveniet iure dolores sed veritatis asperiores animi molestias debitis corrupti! Quibusdam?</p>
        //     <br />
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span> Eum rerum molestias assumenda reprehenderit ipsa nemo ut laborum beatae ullam ab neque est fugit quis cumque vero</span> quaerat aperiam illum commodi animi, temporibus tenetur odio quasi? Doloremque sed, et voluptatem, quam at molestiae similique reprehenderit praesentium doloribus delectus eligendi eum quod! Reiciendis magni eaque, maxime voluptates impedit, placeat cupiditate consequuntur at rem sint velit rerum quas! Eaque dolor repellat dicta vero alias magnam laboriosam suscipit libero officia rerum voluptatem fugiat sequi soluta laborum vitae consequatur, blanditiis asperiores eos. Sequi tempora, vel maiores impedit cupiditate obcaecati, perspiciatis inventore repellendus qui amet ad!</p>
        //     <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span> Id accusamus iure qui eos aliquam! Consequuntur velit quod, qui delectus voluptate labore hic, dolore maiores corporis dolorum debitis nobis perspiciatis iure molestiae quo iusto itaque veniam temporibus autem. Nemo ipsam eveniet iure dolores sed veritatis asperiores animi molestias debitis corrupti! Quibusdam?</p>
        //     <br />
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum molestias assumenda reprehenderit ipsa nemo ut laborum beatae ullam ab neque est fugit quis cumque vero quaerat aperiam illum commodi animi, temporibus tenetur odio quasi? Doloremque sed, et voluptatem, quam at molestiae similique reprehenderit praesentium doloribus delectus eligendi eum quod! Reiciendis magni eaque, maxime voluptates impedit, placeat cupiditate consequuntur at rem sint velit rerum quas! Eaque dolor repellat dicta vero alias magnam laboriosam suscipit libero officia rerum voluptatem fugiat sequi soluta laborum vitae consequatur, blanditiis asperiores eos. Sequi tempora, vel maiores impedit cupiditate obcaecati, perspiciatis inventore repellendus qui amet ad!</p>
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id accusamus iure qui eos aliquam! Consequuntur velit quod, qui delectus voluptate labore hic, dolore maiores corporis dolorum debitis nobis perspiciatis iure molestiae quo iusto itaque veniam temporibus autem.<span> Nemo ipsam eveniet iure dolores sed veritatis asperiores animi molestias debitis corrupti! Quibusdam?</span></p>
        //     <br />
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum molestias assumenda reprehenderit ipsa nemo ut laborum beatae ullam ab neque est fugit quis cumque vero quaerat aperiam illum commodi animi, temporibus tenetur odio quasi? Doloremque sed, et voluptatem, quam at molestiae similique reprehenderit praesentium doloribus delectus eligendi eum quod! Reiciendis magni eaque, maxime voluptates impedit, placeat cupiditate consequuntur at rem sint velit rerum quas! Eaque dolor repellat dicta vero alias magnam laboriosam suscipit libero officia rerum voluptatem fugiat sequi soluta laborum vitae consequatur, blanditiis asperiores eos. Sequi tempora, vel maiores impedit cupiditate obcaecati, perspiciatis inventore repellendus qui amet ad!</p>
        // </div> 
    )
}

export default Scroll