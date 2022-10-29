import { useState } from "react";

export const ExperienceUnused = () => {
    const experienceunused = [
        {
            time: "September 2022 - present",
            title: "Senior Software Quality Assurance Engineer at Enosis Solutions",
            description: "~ Web Automation with testing with Selenium WebDriver, Robot Framework and Python",
        },
        {
            time: "11:00 - 12:00",
            title: "Accordion test",
            description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer",
        }
    ];
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return(
        <section className="experienceunused" id="experienceunused">
            <div className="wrapper">
                <div className="accordion">
                    {experience.map((item,i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{item.title}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}