
import PerSkills from "./PerSkills";
import Progress from "./Progress";


const Skills = () =>{
    return (
        <section id="skills" className="bg-bg">
            <div className="py-40  container">
                <div className="text-center space-y-4">
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <p className=" uppercase text-lg">technical and professional</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="capitalize text-2xl font-extrabold tracking-widest text-lst scale-110">my skills</div>
                </div>
                <div className="flex flex-col lg:flex-row pt-16 space-y-20 lg:space-y-0">
                    <div data-aos="zoom-out" data-aos-duration="3000" className="w-full lg:w-1/2 text-center capitalize font-extrabold text-3xl space-y-20 ">
                        <div>
                        <p className="">technical skills</p>
                        </div>
                        <div className="    w-full bg--400 mx-auto">
                            <div className="bg- w-[70%] mx-auto space-y-6">
                                <Progress skill="Next" per={72} />
                                <Progress skill="React" per={68} />
                                <Progress skill="JavaScript" per={80} />
                                <Progress skill="TypeScript" per={80} />
                                <Progress skill="C" per={80} />
                                <Progress skill="C++" per={80} />
                                <Progress skill="Docker" per={50} />
                                <Progress skill="Redux Toolkit" per={72} />
                                <Progress skill="TailwindCSS" per={60} />
                            </div>
                        </div>
                        
                        
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="3000"  className="w-full lg:w-1/2 text-center  flex flex-col items-center  capitalize font-extrabold text-3xl space-y-20 ">
                        <div>
                        <p className="">professional skillls</p>
                        </div>
                        <div className="   lg:pt-10 w-[90%] space-y-10 mx-auto">
                            <div className="bg- w-[70%] mx-auto s space-y-12">
                                
                            <div className="flex gap-10">
                                <PerSkills text="Creativity"  per={90}/>
                                 <PerSkills text="Creativity"  per={90}/>


                                </div> <div className="flex gap-10">
                                <PerSkills text="Creativity"  per={90}/>
                                 <PerSkills text="Creativity"  per={90}/>


                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    

                </div>

                
            </div>
        </section>
    )
}

export default Skills;