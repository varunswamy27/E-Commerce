import React, { useState } from "react";
import styles from "../styles/sections/CounterUp.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterUp = () => {
  const [focus, setFocus] = useState(false);

  return (
    <section className={styles.counter_up}>
      <div className="container">
        <div className={styles.counter_wrap}>
          <div className={styles.counter_box}>
            <div className={`${styles.count} text_lg text_500`}>
              <CountUp
                start={focus ? 0 : null}
                end={3000}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span  ref={countUpRef}/>
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    ></VisibilitySensor>
                  </div>
                )}
              </CountUp>
            </div>
            <p className={`${styles.type} text_xs`}>OUR SATISFIED CUSTOMERS</p>
          </div>
          <div className={styles.counter_box}>
            <div className={`${styles.count} text_lg text_500`}>
            <CountUp
                start={focus ? 0 : null}
                end={115}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    ></VisibilitySensor>
                  </div>
                )}
              </CountUp>            </div>
            <p className={`${styles.type} text_xs`}>YEARS OF EXPERIENCE</p>
          </div>
          <div className={styles.counter_box}>
            <div className={`${styles.count} text_lg text_500`}>
            <CountUp
                start={focus ? 0 : null}
                end={100}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    ></VisibilitySensor>
                  </div>
                )}
              </CountUp>            </div>
            <p className={`${styles.type} text_xs`}>KINDS OF LIQUOR</p>
          </div>
          <div className={styles.counter_box}>
            <div className={`${styles.count} text_lg text_500`}>
            <CountUp
                start={focus ? 0 : null}
                end={40}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    ></VisibilitySensor>
                  </div>
                )}
              </CountUp>            </div>
            <p className={`${styles.type} text_xs`}>OUR BRANCHES</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterUp;
