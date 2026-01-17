import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faTable } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Pandas",
    "Blender",
    "opencv",
    "Unity",
    "ffmpeg",
    "AWS",
    // "React",
    // "TypeScript",
    // "JavaScript",
    // "HTML5",
    // "CSS3",
    // "SASS",
    // "Flask",
    // "SQL",
    // "PostgreSQL",
    // "Postman"
];

const labelsSecond = [
    "Python",
    "Pytorch",
    "Tensorflow",
    "Git",
    "Linux",
    "Hugging Face",

    // "GitHub Actions",
    // "Docker",
    // "Azure",
    // "Snowflake",
    // "Selenium",
];

const labelsThird = [
    "Streamlit",
    "Onnx",
    "Flash-attention",
    "Quantization",
    "Tuning"
    // "Groq",
    // "LangChain",
    // "Qdrant",
    // "Hugging Face",
    // "LlamaIndex",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faTable} size="3x"/>
                    <h3>Data Preparation</h3>
                    <p> Design and generate 2D and 3D synthetic datasets for applications including food crystallization, vapor simulation, and facial expression modeling.
                         Familiar with data organization and preprocessing to support model training.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML Model Development</h3>
                    <p>I have developed Machine Learning models in the areas of instance segmentation, 
                        domain adaptation, video generation and image understanding. Current project is related to LLM.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Model Deployment and Optimization</h3>
                    <p> After model training, I have made UI interfaces used by manufacturings in their daily life. I also have experience with LLM and instance segmentation model optimization.
                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;