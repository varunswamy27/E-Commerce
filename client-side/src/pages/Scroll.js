import React from 'react';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
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
                // markers: true,
                pin: true,
            }
        })
        gsap.to(dot, {
            clipPath: "circle(100%)",
            duration: 4,
            scrollTrigger: {
                trigger: el,
                start: "top top",
                // markers: true,
                scrub: true
            }
        })
        gsap.to(fix, {
            duration: 2,
            scrollTrigger: {
                trigger: fix,
                start: "top top",
                end: `+=${window.outerHeight}`,
                // markers: true,
                pin: true
            }
        })
        gsap.to(name, {
            transform: `translateX(-40%)`,
            color: "red",
            duration: 4,
            scrollTrigger: {
                trigger: fix,
                start: "top top",
                // markers: true,
                scrub: 1
            }
        })
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